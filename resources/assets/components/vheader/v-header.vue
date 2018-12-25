<template>
    <div class="header_wrapper">
        <div class="top-bar"></div>
        <div class="main_header">
            <div class="logo_wrapper">
                <div class="logo"></div>
            </div>
            <div class="searcher">
                <form class="searcher_form">
                    <div class="form-wrapper">
                        <input type="text" class="search-input" id="" placeholder="输入你想学习的">
                        <div class="search_go">
                            <div class="iconfont icon-search"></div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="user-profile">
                <a href="/user/login" class="button login">登录</a>
                <a href="/user/register" class="button register">注册</a>
            </div>
        </div>
    </div>
</template>
<style lang="stylus">

</style>
<script>
    export default {
        name:'vheader'
    }
</script>