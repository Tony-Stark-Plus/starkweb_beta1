<template>
    <div>
        <div class="media comment_item">
            <div class="media-left media-top img_wrapper">
                <img :src="itemData[0].imgUrl">
            </div>
            <div class="media-body comment_body">
                <div class="sub_mes"><span class="comment_user_name">{{itemData[0].uname}}</span><span class="date">{{itemData[0].str_gap}}前</span>
                </div>
                <p class="comment_content">{{itemData[0].content}}</p>
                <div class="reply_func">
                    <span class="replay_btn" ref="reply_btn" @click="reply_open">回复</span>
                    |
                    <span class="share_btn" @click="">分享</span>
                </div>
                <div class="reply_write">
                        <textarea name="" rows="3" class="reply_text"
                                  :discussion_id="discussion_id" :type="type" :parent_id="itemData[0].id"
                                  :reply_id="itemData[0].id" :reply_user_id="itemData[0].user_id"
                                  :reply_user_name="itemData[0].uname" :index_key="indexKey">
                        </textarea>
                    <div class="btns">
                        <button class="reply_post btn btn-success" @click="reply_post">回复评论</button>
                        <button class="cancel btn btn-info" v-on:click="reply_close">取消</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="media comment_item type_reply" v-for="item_reply in itemData" v-if="item_reply.parent_id">
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
                <div class="reply_write" v-if="item_reply.id">
                        <textarea name="" rows="3" class="reply_text"
                                  :discussion_id="discussion_id" :type="type" :parent_id="itemData[0].id"
                                  :reply_id="item_reply.id" :reply_user_id="item_reply.user_id"
                                  :reply_user_name="item_reply.uname" :index_key="indexKey">
                        </textarea>
                    <div class="btns">
                        <button class="reply_post btn btn-success" v-on:click="reply_post">回复评论</button>
                        <button class="cancel btn btn-info" v-on:click="reply_close">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const Swal = require('sweetalert2');
    export default {
        name: "commentItem",
        props: ['itemData', 'indexKey','discussion_id','type','user_cookie'],
        methods:{
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
                        this.axios.post('/weixin/reply_store', {
                            reply_data: post_data
                        }).then(function (response) {
                            this_self.reply_html(textarea_dom,response.data['reply_data'])
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
                //回复后添加html片段
                reply_html(textarea_dom,push_data){
                    var length = this.itemData.length;
                    var obj = {
                        content: push_data['body'],
                        discussion_id: push_data['discussion_id'],
                        imgUrl: this.user_cookie.imgUrl,
                        reply_uname: push_data['reply_user_name'],
                        str_gap: "不久",
                        uname: this.user_cookie.user_name,
                        parent_id: 100000,
                        id: 0,
                        user_id: push_data['user_id']
                    };
                    this.$set(this.itemData,length,obj);
                }
            }
    }
</script>

<style lang="stylus">
    @import "./commentItem.stylus"
</style>