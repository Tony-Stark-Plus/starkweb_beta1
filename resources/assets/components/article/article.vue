<template>
    <div class="all_part">
        <div class="article_part">
            <div class="article_wrapper col-md-10 offset-md-1" v-html="article_content.content" v-highlight>

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
            }
        },
        created(){
            const axios = require('axios');
            axios.get('/weixin/articleContent/'+ this.article_id)
                .then(response => (
                    this.article_content = response.data
                )).catch(function (error) {
                console.log(error);
            });
        },
        props:['article_id']
    }
</script>

<style lang="stylus">
    @import "../../common/stylus/mixin.stylus"
    @import "../../common/stylus/markdown.stylus"
    @import "../../common/stylus/article.stylus"
</style>