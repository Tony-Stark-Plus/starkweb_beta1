<template>
    <div class="createArticleWrapper col-md-12">
        <page-title v-bind:pageTitle="pageTitle"></page-title>
        <div class="main">
            <mavon-editor v-model="article_content" :ishljs="true" :codeStyle="code_style"></mavon-editor>
            <div class="article_mes col-md-10 offset-md-1">
                <input type="text" placeholder="请输入文章标题" class="article_title" v-model="article_title">
                <v-select :options="article_kinds" v-model="article_kind" class="article_kind"></v-select>
            </div>
            <button class="btn btn-success" @click="submit_article">提交文章</button>
        </div>

    </div>
</template>

<script>
    import "mavon-editor/dist/css/index.css"
    import PageTitle from '../pageTitle/pageTitle'

    export default {
        name: "createArticle",
        data() {
            return {
                pageTitle: "创作文章",
                article_content: null,
                code_style: 'tomorrow-night',
                article_kind: '请选择文章类别',
                article_title: null,
                article_kinds: ['vue', 'plugins', 'python', 'Wechat', 'laravel', 'regex', 'middleware', 'git', 'provider', 'nginx', 'css'
                    , 'tool', 'markdown', 'javascript'],
                toolbars: {
                    bold: true, // 粗体
                    italic: true,// 斜体
                    header: true,// 标题
                    underline: true,// 下划线
                    strikethrough: true,// 中划线
                    mark: true,// 标记
                    superscript: true,// 上角标
                    subscript: true,// 下角标
                    quote: true,// 引用
                    ol: true,// 有序列表
                    ul: true,// 无序列表
                    link: true,// 链接
                    imagelink: true,// 图片链接
                    code: true,// code
                    table: true,// 表格
                    subfield: true,// 是否需要分栏
                    fullscreen: true,// 全屏编辑
                    readmodel: true,// 沉浸式阅读
                    htmlcode: true,// 展示html源码
                    help: true// 帮助
                }
            }
        },
        components: {
            PageTitle
        },
        methods: {
            submit_article() {
                var error_arr = ['文章内容要至少50个字符', '标题不少于6个字符', '请选择文章类别'];
                var error_exist = [];
                if (!this.article_content || this.article_content.length < 50 ) {
                    error_exist.push(error_arr[0])
                }
                if (!this.article_title || this.article_title.length < 6  ) {
                    error_exist.push(error_arr[1])
                }
                if (this.article_kind == null || this.article_kind == "请选择文章类别") {
                    error_exist.push(error_arr[2])
                }
                if(error_exist.length){
                    var error_text = error_exist.join("<br/>");
                    Swal.fire({
                        type: 'error',
                        title: '拒绝提交',
                        html: error_text
                    })
                }else{
                    this.post_data();
                    Swal.fire({
                        type: 'success',
                        title: 'Your Article has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            },
            post_data() {
                var post_article_data = {
                    article_title: this.article_title,
                    article_content: this.article_content,
                    article_kind: this.article_kind
                };
                this.axios.post('/weixin/store_article', post_article_data).then(function (response) {
                    console.log(response)
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../common/stylus/createArticle.stylus"
</style>