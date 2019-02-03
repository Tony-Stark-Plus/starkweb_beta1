<template>
    <div class="comment_wrapper col-md-8 offset-md-2 col-sm-12 offset-sm-0">
        <div class="comment" v-for="item in data_comment">
            <div class="media comment_item">
                <div class="media-left media-top img_wrapper">
                    <img :src="item[0].imgUrl">
                </div>
                <div class="media-body comment_body">
                    <div class="sub_mes"><span class="comment_user_name">{{item[0].uname}}</span><span class="date">{{item[0].str_gap}}前</span></div>
                    <p class="comment_content">{{item[0].content}}</p>
                    <div class="reply_func" :test="test">
                        <span class="replay_btn" ref="reply_btn" @click="">回复</span>
                        |
                        <span class="share_btn">分享</span>
                    </div>
                    <div class="reply_write">
                        <textarea name=""rows="3" class="reply_text"></textarea>
                        <div class="btns">
                            <button class="reply_post btn btn-success">回复评论</button>
                            <button class="cancel btn btn-info">取消</button>
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
                        <span class="replay_btn" ref="reply_btn" @click="">回复</span>
                        |
                        <span class="share_btn">分享</span>
                    </div>
                    <div class="reply_write">
                        <textarea name="" id=""  rows="3" class="reply_text"></textarea>
                        <div class="btns">
                            <button class="reply_post btn btn-success">回复评论</button>
                            <button class="cancel btn btn-info">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comment",
        data(){
            return {
                data_comment: null,
                test: 'tt'
            }
        },
        props:['discussion_id','type'],
        methods:{
            comment_post() {
                const axios = require('axios');
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
            reply_open() {

            }
        },
        created() {
            this.comment_post();
            $(document).on('click','.replay_btn',function(){
                var dom = $(this).parent();
                dom.css('display','none');
                dom.next().css('display','block');
            })
            $(document).on('click','.cancel',function(){
                var dom = $(this).parents('.reply_write')
                dom.css('display','none');
                dom.prev().css('display','block');
            })
        }
    }
</script>

<style scoped lang="stylus">
@import "../../common/stylus/comment.stylus"
</style>