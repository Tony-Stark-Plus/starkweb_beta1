<template>
    <div>
        <router-link to="/login"><div class="btn btn-login col-md-6 offset-md-3" v-if="this.user_cookie">登录并参与讨论</div></router-link>
        <div class="comment_wrapper col-md-8 offset-md-2 col-sm-12 offset-sm-0">
            <h5 v-if="comment_num">共 {{comment_num}} 条评论</h5>
            <div class="comment" v-for="(item,key) in data_comment">
                <commentItem :itemData="item" :indexKey="key" :discussion_id="discussion_id" :type="type" :user_cookie="user_cookie"></commentItem>
            </div>
        </div>
    </div>
</template>

<script>
    import commentItem from './commentItem/commentItem'
    export default {
        name: "comment",
        components:{
            commentItem
        },
        data(){
            return {
                data_comment: null,
                user_cookie: null,
                vueHtmlData: null,
                comment_num: null
            }
        },
        props:['discussion_id','type'],
        methods:{
            //获取评论
            comment_post() {
                const this_self = this;
                this.axios.post('/weixin/getComment', {
                    discussion_id: this.discussion_id,
                    type: this.type
                }).then(function (response) {
                    this_self.data_comment = response.data.comment_data;
                    this_self.comment_num = response.data.comment_num;
                }).catch(function (error) {
                    console.log(error);
                });
            },
            get_cookie() {
                this.axios.get('/weixin/get_cookie')
                    .then(response => (
                        this.user_cookie = response.data
                    )).catch(function (error) {
                    console.log(error);
                });
            },
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