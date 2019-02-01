<template>
    <div class="login_wrapper">
        <pageTitle v-bind:pageTitle="pageTitle"></pageTitle>
        <div class="login_main col-md-4 offset-md-4">
            <div class="form">
                <div class="email">
                    <span class="iconfont icon-email"></span>
                    <input type="text" class="email_input" placeholder="邮箱" ref="email_input" v-model="email_input">
                    <p v-show="email_input_error" class="error">{{email_input_error}}</p>
                </div>
                <div class="password">
                    <span class="iconfont icon-password"></span>
                    <input type="password" class="password_input" placeholder="密码" ref="password_input" v-model="password_input">
                    <p v-show="password_input_error" class="error">{{password_input_error}}</p>
                </div>
                <div class="verification">
                    <span class="iconfont icon-verification"></span>
                    <input type="text" class="input_verification" placeholder="验证码" ref="verification_input" v-model="verification_input" @focus="verification_focus">
                    <div class="img" v-on:click="get_rand_num"><img :src="'/weixin/captcha/'+this.rand_num" alt="" ></div>
                    <p v-show="verification_input_error" class="error">{{verification_input_error}}</p>
                </div>
                <div class="btn col-md-10 offset-md-1" v-on:click="login">登录</div>
            </div>
        </div>
    </div>
</template>

<script>
    import pageTitle from '../pageTitle/pageTitle'
    const Swal = require('sweetalert2');
    export default {
        name: "login",
        components: {
            pageTitle,
        },
        data(){
            return {
                pageTitle: '登 录',
                rand_num: 1,
                login_success: false,
                email_input: '',
                password_input: '',
                verification_input: '',
                email_input_error: false,
                password_input_error: false,
                verification_input_error: false
            }
        },
        methods: {
            login() {
                if(!this.email_input_error && !this.password_input_error && !this.verification_input_error && this.email_input && this.password_input && this.verification_input){
                    this.form_post()
                }else {
                    this.login_error_animation('拒绝登录','请按要求填写表单')
                }
            },
            form_post() {
                const axios = require('axios');
                const this_self = this;
                axios.post('/weixin/login', {
                    email: this.$refs.email_input.value,
                    password: this.$refs.password_input.value,
                    verification: this.$refs.verification_input.value
                }).then(function (response) {
                   if(response.data.success){
                       this_self.login_success=true;
                       this_self.$router.push({
                           name: 'videoList',
                           params: {
                               login_success: true,
                               refresh: true
                           }
                       })
                   }else{
                       this_self.login_error_animation('拒绝登录',response.data.error);
                   }
                }).catch(function (error) {
                    console.log(error);
                });
            },
            get_rand_num() {
                this.rand_num = Math.floor(Math.random()*100);
            },
            verification_focus() {
                this.verification_input_error = '验证码不能为空'
            },
            login_error_animation(title,text) {
                Swal.fire({
                    type: 'error',
                    title: title,
                    text: text,
                    customClass: 'animated lightSpeedIn',
                    animation: false,
                }).then((result) => {
                    if (result.value) {
                        Swal.fire({
                            type: 'error',
                            title: title,
                            text: text,
                            customClass: 'animated lightSpeedOut',
                            animation: false,
                        });
                        $('.swal2-container').css('background-color','rgba(0, 0, 0, 0)')
                    }

                })
            }
        },
        created() {
            this.get_rand_num();
        },
        watch: {
            email_input() {
                var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                if(reg.test(this.email_input)) {
                    this.email_input_error = false
                }else{
                    this.email_input_error = '邮箱格式不正确'
                }
            },
            password_input() {
                if(this.password_input.length >= 6 && this.password_input.length <= 18){
                    this.password_input_error = false
                }else{
                    this.password_input_error = '密码6~18个字符'
                }
            },
            verification_input() {
                if(this.verification_input ==''){
                    this.verification_input_error = '验证码不能为空'
                }else{
                    this.verification_input_error = false
                }
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../common/stylus/login.stylus"
</style>