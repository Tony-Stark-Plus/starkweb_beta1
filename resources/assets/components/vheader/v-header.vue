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
            <div class="user-profile" v-if="!user_cookie.imgUrl" >
                <router-link to="/login" class="button login">登录</router-link>
                <router-link to="/register" class="button register">注册</router-link>
            </div>
            <div class="user-avator" v-if="user_cookie.imgUrl">
                <img class="avator" :src="this.user_cookie.imgUrl" alt="" @mouseenter="enter" @mouseleave="leave">
                <ul class="dropDown_menu" @mouseenter="enter" @mouseleave="leave" v-show="menu_show">
                    <li class="item"><a href="/weixin/exit"><span class="iconfont icon-exit">&nbsp;退出登录</span></a></li>
                </ul>
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
                user_cookie: {
                    imgUrl: null
                },
                menu_show: false
            }
        },
        created() {
            this.get_cookie();
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
            },
            leave() {
                this.menu_show = false
            },
            enter() {
                this.menu_show = true
            }
        },
        props: ['refresh'],
        watch:{
            //刷新cookie
            refresh: function(){
                this.get_cookie();
            }
        }
    }
</script>