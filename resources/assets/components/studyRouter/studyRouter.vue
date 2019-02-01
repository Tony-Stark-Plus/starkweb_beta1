<template>
    <div class="all_study">
        <pageTitle v-bind:pageTitle="pageTitle"></pageTitle>
        <div class="study_wrapper col-md-10 offset-md-1 row">
            <div class="study_part col-md-6 laravel">
                <div class="main_part">
                    <i class="iconfont icon-laravel"></i>
                    <p class="study_title">Laravel 工程师之路</p>
                </div>
            </div>
            <div class="study_part col-md-6 vue">
                <div class="main_part">
                    <i class="iconfont icon-vue"></i>
                    <p class="study_title">Vue.js 渐进式框架</p>
                </div>
            </div>
            <div class="study_part col-md-6 tools">
                <div class="main_part">
                    <i class="iconfont icon-tools"></i>
                    <p class="study_title">开发工具大杂烩</p>
                </div>
            </div>
            <div class="study_part col-md-6 life">
                <div class="main_part">
                    <i class="iconfont icon-life"></i>
                    <p class="study_title">代码禅意人生</p>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
    import pageTitle from '../pageTitle/pageTitle'
    export default {
        name: "studyRouter",
        data() {
            return{
                pageTitle: '选择适合自己的学习路径'
            }
        },
        components: {
            pageTitle
        },
        created() {

        },
        methods: {
        }
    }
</script>

<style scoped lang="stylus">
 @import "../../common/stylus/studyRouter.stylus"
</style>