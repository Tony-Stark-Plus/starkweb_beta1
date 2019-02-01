<template>
    <div class="login_wrapper">
        <pageTitle v-bind:pageTitle="pageTitle"></pageTitle>
        <div class="login_main col-md-4 offset-md-4">
            <div class="form">
                <div class="user_name">
                    <span class="iconfont icon-user_name"></span>
                    <input type="text" class="user_name_input" placeholder="用户名" v-model="user_name_input">
                    <p v-show="user_name_input_error" class="error">{{user_name_input_error}}</p>
                </div>
                <div class="email">
                    <span class="iconfont icon-email"></span>
                    <input type="text" class="email_input" placeholder="邮箱" v-model="email_input">
                    <p v-show="email_input_error" class="error">{{email_input_error}}</p>
                </div>
                <div class="password">
                    <span class="iconfont icon-password"></span>
                    <input type="password" class="password_input" placeholder="密码" v-model="password_input">
                    <p v-show="password_input_error" class="error">{{password_input_error}}</p>
                </div>
                <div class="password_sure">
                    <span class="iconfont icon-password_sure"></span>
                    <input type="password" class="password_sure_input" placeholder="确认密码" v-model="password_sure_input">
                </div>
                <button class="btn col-md-10 offset-md-1" @click="register">注 册</button>
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
                pageTitle: '注 册',
                user_name_input: '',
                email_input: '',
                password_input: '',
                password_sure_input: '',
                user_name_input_error: false,
                email_input_error: false,
                password_input_error: false,
                password_sure_input_error: false
            }
        },
        watch: {
            user_name_input() {
                var str = this.user_name_input;
                if(!(str.length >= 3 && str.length <= 10)){
                    this.user_name_input_error = '用户名必须为3 ~ 10个字符'
                }
                else if(str){
                    this.user_name_input_error = '';
                    this.check_special_char(str)
                }
                else{
                    this.user_name_input_error = '';
                }
            },
            email_input() {
                var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                if(reg.test(this.email_input)) {
                    this.email_input_error = false
                }else{
                    this.email_input_error = '邮箱格式不正确'
                }
            },
            password_input() {
                var len = this.password_input.length;
                if(len >=6 && len <=18){
                    this.password_input_error = '';
                }else{
                    this.password_input_error = '密码为6~16位'
                }
            }
        },
        methods: {
            check_special_char(str) {
                var reg = /^[\u4e00-\u9fa5_a-zA-Z0-9]{3,10}$/;
                if(!reg.test(str)){
                    this.user_name_input_error = '不允许除 _ 以外的特殊字符';
                }
            },
            register() {
                if(!this.email_input_error && !this.password_input_error && !this.user_name_input_error && this.email_input && this.password_input && this.user_name_input){
                    if(!(this.password_input == this.password_sure_input)){
                        this.register_error_animation('拒绝注册','两次输入密码不一致');
                        this.password_sure_input = '';
                    }else{
                        this.register_post();
                    }
                }else {
                    this.register_error_animation('拒绝注册','请按要求填写表单')
                }
            },
            register_error_animation(title,text) {
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
            },
            //注册表单提交
            register_post() {
                const axios = require('axios');
                const this_self = this;
                axios.post('/weixin/register', {
                    uname: this_self.user_name_input,
                    email: this_self.email_input,
                    password: this_self.password_input,
                }).then(function (response) {
                    console.log(response.data);
                    if(response.data.success){
                        Swal.fire({
                            title: '欢迎加入Starkweb' ,
                        }).then((result) => {
                            if (result.value) {
                                this_self.login_success = true;
                                this_self.$router.push({
                                    name: 'videoList',
                                    params: {
                                        login_success: true,
                                        refresh: true
                                    }
                                })
                            }
                        })
                    }else{
                        this_self.register_error_animation('注册失败',response.data.error);
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/register.stylus"
</style>