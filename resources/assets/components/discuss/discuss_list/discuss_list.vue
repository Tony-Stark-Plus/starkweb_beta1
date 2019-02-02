<template>
    <div class="discuss_list col-md-8 offset-md-2">
        <router-link :to="'/discussion/'+item.id" class="discuss_item media" v-for="item in discuss_list" :key="item.id">
                <div class="media-left">
                    <img :src="item.user_info.imgUrl" class="media-object">
                </div>
                <div class="media-body">
                    <p class="discussion_title">{{item.title}}</p>
                    <p class="sub_mes">由 <span class="discuss_person">{{item.user_info.uname}} 发表于 {{item.str_gap}}前</span></p>
                    <p class="discussion_content">{{item.content}}</p>
                </div>
                <div class="media-right">
                    <span class="state" v-for="state in item.states">{{state}}</span>
                </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "discuss_list",
        data(){
            return{
                discuss_list: null
            }
        },
        created(){
            const axios = require('axios');
            axios.get('/weixin/discuss_list')
                .then(response => (
                    this.discuss_list = response.data
                )).catch(function (error) {
                console.log(error);
            });
        }
    }
</script>

<style scoped lang="stylus">
    @import "./discuss_list.stylus"
</style>