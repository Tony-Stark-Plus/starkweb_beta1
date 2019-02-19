<template>
    <div class="media user_reply col-md-8 offset-md-2">
        <div class="media-left media-top img_wrapper">
            <img :src="user_cookie.imgUrl">
        </div>
        <div class="media-body comment_body">
            <textarea name="" rows="2" class="reply_text" placeholder="说点什么...." v-model="reply_content" @focus="reply_open">
            </textarea>
            <div class="subBtn" v-if="btnShow">
                <button class="reply_post btn btn-success" v-on:click="reply_sub">回复评论</button>
                <button class="cancel btn btn-info" @click="reply_close">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userReply.vue",
        props: ['user_cookie','discussion_id','type'],
        data() {
            return{
                parent_id: 0,
                reply_content: null,
                reply_id:0,
                btnShow: 0,
                ajax_data: null
            }
        },
        methods:{
            reply_open() {
                this.btnShow = 1
            },
            reply_close() {
                this.btnShow = 0;
                console.log('0')
            },
            reply_sub() {
                if(this.reply_content.length < 6){
                    Swal.fire({
                        type: 'error',
                        title: '评论失败',
                        text: '评论字数要大于六个字哦'
                    })
                }
                else{
                    this.reply_post();
                    this.sendMesToComment();
                    this.reply_content = null;
                    this.btnShow =  0;
                }
            },
            reply_post() {
                const self_this = this;
                var post_data = {
                    'body': this.reply_content,
                    'discussion_id': this.discussion_id,
                    'user_id': this.user_cookie.user_id,
                    'parent_id': this.parent_id,
                    'reply_id': this.parent_id,
                    'type': this.type,
                };
                this.axios.post('/weixin/reply_store', {
                    reply_data: post_data
                }).then(function (response) {
                    self_this.ajax_data = response.data
                }).catch(function (error) {
                    console.log(error);
                });
            },
            sendMesToComment() {
                var append_data = {
                    'content' : this.reply_content,
                    'str_gap' : '刚刚',
                    'uname' : this.user_cookie.user_name,
                    'imgUrl' : this.user_cookie.imgUrl,
                    'id' : null
                }
                this.$emit('getMessage', append_data)
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "./UserReply.stylus";
</style>