<template>
    <div class="all_part">
        <div class="title_part">
            <div class="title">{{article_content.aname}}</div>
            <div class="sub_mes"><span class="avatar"></span>发布于{{article_content.created_at.substr(0,10)}}</div>
        </div>
        <div class="article_part">
            <div class="article_wrapper col-md-10 offset-md-1" v-html="article_content.content" v-highlight>

            </div>
        </div>
        <div class="skip_part">
            <div class="left_skip"  v-if="!article_content.previous_article">
                <span class="p_alert">已是最新章节</span>
            </div>
            <div class="left_skip" @click="previous" v-if="article_content.previous_article">
                    <i class="iconfont icon-leftArrow"></i>
                    <span class="nmsl">{{mes1}}</span>
                    <div class="title">{{article_content.previous_article.aname}}</div>
            </div>
            <div class="right_skip" @click="next" v-if="article_content.next_article">
                    <span class="nmsl">{{mes2}}</span>
                    <div class="title">{{article_content.next_article.aname}}</div>
                    <i class="iconfont icon-rightArrow"></i>
            </div>
            <div class="left_skip"  v-if="!article_content.next_article">
                <span class="p_alert">后面没有啦</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "article",
        data() {
            return{
                article_content: null,
                mes1: '上一章',
                mes2: '下一章',
                classA: 'not_loaded'
            }
        },
        created(){
           this.get_data(this.article_id);
        },
        props:['article_id'],
        methods: {
            get_data(id) {
                const axios = require('axios');
                axios.get('/weixin/articleContent/' + id)
                    .then(response => (
                        this.article_content = response.data
                    )).catch(function (error) {
                    console.log(error);
                }).finally(() => {

                })
            },
            previous(){
                this.$router.push({path: '/article/'+this.article_content.previous_article.id});
                this.$router.go(0);
            },
            next(){
                this.$router.push({path: '/article/'+this.article_content.next_article.id});
                this.$router.go(0);
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../common/stylus/mixin.stylus"
    @import "../../common/stylus/markdown.stylus"
    @import "../../common/stylus/article.stylus"
</style>