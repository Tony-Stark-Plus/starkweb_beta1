<template>
    <div class="login_wrapper">
        <page_title v-bind:page_title="page_title"></page_title>
        <div class="login_main col-md-4 offset-md-4">
            <div class="form">
                <div class="email"><span class="iconfont icon-email"></span><input type="text" class="email_input" placeholder="邮箱"></div>
                <div class="password"><span class="iconfont icon-password"></span><input type="password" class="password_input" placeholder="密码"></div>
                <div class="verification"><span class="iconfont icon-verification"></span> <input type="text" class="input_verification" placeholder="验证码"><img src="" alt=""></div>
                <button class="btn col-md-10 offset-md-1">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    import page_title from '../page_title/page_title'
    export default {
        name: "login",
        components: {
            page_title,
        },
        data(){
            return {
                page_title: '登 录',
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/login.stylus"
</style>