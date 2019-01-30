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
            <div class="user-profile" v-if="!user_cookie.imgUrl">
                <router-link to="/login" class="button login">登录</router-link>
                <router-link to="/register" class="button register">注册</router-link>
            </div>
            <div class="user-avator" v-if="user_cookie.imgUrl">
                <img class="avator" :src="this.user_cookie.imgUrl" alt="">
            </div>
        </div>
    </div>
</template>
<style lang="stylus">

</style>
<script>
    export default {
        name:'vheader',
        data(){
            return {
                user_cookie: null
            }
        },
        created() {
           this.get_cookie()
        },
        watch:{
            user_cookie
        },
        methods:{
            get_cookie() {
                const axios = require('axios');
                axios.get('/weixin/get_cookie')
                    .then(response => (
                        this.user_cookie = response.data
                    )).catch(function (error) {
                    console.log(error);
                });
            }
        }

    }
</script>