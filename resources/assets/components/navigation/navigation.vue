<template>
    <div class="navigation">
        <div class="nav-items">
            <div class="nav-item">
                <router-link to="/videoList">全部视频</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/studyRouter">学习路径</router-link></div>
            <div class="nav-item"><router-link to="/videoList">问答社区</router-link></div>
            <div class="nav-item"><router-link to="/articleList">文章教程</router-link></div>
            <div class="nav-item"><span class="iconfont icon-hot">&nbsp;</span><router-link to="/videoList">订阅本站</router-link></div>
            <div class="nav-item"><router-link to="/videoList">签到优惠</router-link></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.stylus"
    @import "../../common/stylus/nav.stylus"
</style>