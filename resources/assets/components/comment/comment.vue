<template>
    <div class="comment_wrapper col-md-8 offset-md-2 col-sm-12 offset-sm-0">
        <div class="comment" v-for="(item,key) in data_comment">
            <div class="media comment_item">
                <div class="media-left media-top img_wrapper">
                    <img :src="item[0].imgUrl">
                </div>
                <div class="media-body comment_body">
                    <div class="sub_mes"><span class="comment_user_name">{{item[0].uname}}</span><span class="date">{{item[0].str_gap}}前</span></div>
                    <p class="comment_content">{{item[0].content}}</p>
                    <div class="reply_func">
                        <span class="replay_btn" ref="reply_btn" @click="reply_open">回复</span>
                        |
                        <span class="share_btn" @click="">分享</span>
                    </div>
                    <div class="reply_write">
                        <textarea name="" rows="3" class="reply_text"
                                  :discussion_id="discussion_id" :type="type" :parent_id="item[0].id"
                        :reply_id="item[0].id" :reply_user_id="item[0].user_id"
                        :reply_user_name="item[0].uname" :index_key="key">

                        </textarea>
                        <div class="btns">
                            <button class="reply_post btn btn-success" @click="reply_post">回复评论</button>
                            <button class="cancel btn btn-info" v-on:click="reply_close">取消</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="media comment_item type_reply" v-for="item_reply in item" v-if="item_reply.parent_id">
                <div class="media-left media-top img_wrapper">
                    <img :src="item_reply.imgUrl">
                </div>
                <div class="media-body comment_body">
                    <div class="sub_mes">
                        <span class="comment_user_name">{{item_reply.uname}}</span>
                        <span class="reply">回复</span>
                        <span class="replyer_name">{{item_reply.reply_uname}}</span>
                        <span class="date">{{item_reply.str_gap}}前</span></div>
                    <p class="comment_content">{{item_reply.content}}</p>
                    <div class="reply_func">
                        <span class="replay_btn" ref="reply_btn" @click="reply_open">回复</span>
                        |
                        <span class="share_btn">分享</span>
                    </div>
                    <div class="reply_write">
                        <textarea name=""rows="3" class="reply_text"
                                  :discussion_id="discussion_id" :type="type" :parent_id="item[0].id"
                                  :reply_id="item_reply.id" :reply_user_id="item_reply.user_id"
                                  :reply_user_name="item_reply.uname" :index_key="key">
                        </textarea>
                        <div class="btns">
                            <button class="reply_post btn btn-success" v-on:click="reply_post" >回复评论</button>
                            <button class="cancel btn btn-info" v-on:click="reply_close">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const Swal = require('sweetalert2');
    const axios = require('axios');
    export default {
        name: "comment",
        data(){
            return {
                data_comment: null,
                user_cookie: null,
                vueHtmlData: null
            }
        },
        props:['discussion_id','type'],
        methods:{
            //获取评论
            comment_post() {
                const this_self = this;
                axios.post('/weixin/getComment', {
                    discussion_id: this.discussion_id,
                    type: this.type
                }).then(function (response) {
                    this_self.data_comment = response.data;
                }).catch(function (error) {
                    console.log(error);
                });
            },
            reply_close(e) {
                var reply_write = e.currentTarget.parentElement.parentElement;
                reply_write.previousElementSibling.style.display = 'block';
                reply_write.style.display = 'none';
            },
            reply_open(e) {
                var reply_btn = e.currentTarget.parentElement;
                reply_btn.nextElementSibling.style.display = 'block';
                reply_btn.style.display = 'none';
            },
            reply_post(e) {
                //获取评论框dom
                var textarea_dom = e.currentTarget.parentElement.previousElementSibling;
                if(textarea_dom.value.length >= 6){
                    var post_data = {
                        'body': textarea_dom.value,
                        'discussion_id': textarea_dom.getAttribute('discussion_id'),
                        'user_id': this.user_cookie.user_id,
                        'parent_id': textarea_dom.getAttribute('parent_id'),
                        'reply_id': textarea_dom.getAttribute('reply_id'),
                        'reply_user_id': textarea_dom.getAttribute('reply_user_id'),
                        'type': textarea_dom.getAttribute('type'),
                        'reply_user_name': textarea_dom.getAttribute('reply_user_name')
                    };
                    e.currentTarget.parentElement.parentElement.style.display="none";
                    e.currentTarget.parentElement.parentElement.previousElementSibling.style.display="block";
                    const this_self = this;
                    axios.post('/weixin/reply_store', {
                        reply_data: post_data
                    }).then(function (response) {
                        this_self.reply_html(textarea_dom,response.data)
                    }).catch(function (error) {
                        console.log(error);
                    });
                }else{
                    Swal.fire({
                        type: 'error',
                        title: '拒绝评论',
                        text: '评论字数要求大于6'
                    })
                }
            },
            get_cookie() {
                const axios = require('axios');
                axios.get('/weixin/get_cookie')
                    .then(response => (
                        this.user_cookie = response.data
                    )).catch(function (error) {
                    console.log(error);
                });
            },
            //回复后添加html片段
            reply_html(textarea_dom,push_data){
                var num = textarea_dom.getAttribute('index_key');
                this.data_comment[num].push({
                    content: push_data['reply_data']['body'],
                    discussion_id: push_data['reply_data']['discussion_id'],
                    imgUrl:this.user_cookie.imgUrl,
                    reply_uname: push_data['reply_data']['reply_user_name'],
                    str_gap: "不久",
                    uname: this.user_cookie.user_name
                });
                this.$set(this,"data_comment",this.data_comment);
            }
        },
        created() {
            this.comment_post();
            this.get_cookie();
        }
    }
</script>

<style scoped lang="stylus">
@import "../../common/stylus/comment.stylus"
</style>