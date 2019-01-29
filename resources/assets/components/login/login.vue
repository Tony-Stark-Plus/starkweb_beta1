<template>
    <div class="login_wrapper">
        <page_title v-bind:page_title="page_title"></page_title>
        <div class="login_main col-md-4 offset-md-4">
            <form class="form">
                <div class="email"><span class="iconfont icon-email"></span><input type="text" class="email_input" placeholder="邮箱" ref="email_input"></div>
                <div class="password"><span class="iconfont icon-password"></span><input type="password" class="password_input" placeholder="密码" ref="password_input"></div>
                <div class="verification">
                    <span class="iconfont icon-verification"></span>
                    <input type="text" class="input_verification" placeholder="验证码" ref="verification_input">
                    <div class="img" v-on:click="get_rand_num"><img :src="'/weixin/captcha/'+this.rand_num" alt="" ></div>
                </div>
                <div class="btn col-md-10 offset-md-1" v-on:click="login">登录</div>
            </form>
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
                rand_num: 1,
                login_success: false
                // email_input: null,
                // password_input: null,
                // verification_input: null
            }
        },
        methods: {
            login() {
                const axios = require('axios');
                const this_self = this;
                axios.post('/weixin/login', {
                    email: this.$refs.email_input.value,
                    password: this.$refs.password_input.value,
                    verification: this.$refs.verification_input.value
                }).then(function (response) {
                        console.log(response);
                        this_self.login_success=true;
                        this_self.$router.push({
                            name: 'videoList',
                            params: {
                                login_success: true
                            }
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            get_rand_num() {
                this.rand_num = Math.floor(Math.random()*10);
            },

        },
        created() {

        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/login.stylus"
</style>