<template>
    <div class="discussion">
        <div class="discussion_content col-md-10 offset-md-1">
            <div class="discussion_title">
                <div class="offset_title"></div>
                <h5 class="title">{{this.discussion_content.title}}</h5>
            </div>
            <div class="discussion_main">
                <div class="img"><img :src="this.discussion_content.publish_user_info.imgUrl" alt=""></div>
                <div class="text_part">
                    <div class="sub_title"><span class="person">{{this.discussion_content.publish_user_info.uname}}</span><span class="date">{{this.discussion_content.publish_time}}前</span></div>
                    <div class="text">
                        {{this.discussion_content.content}}
                    </div>
                </div>
            </div>
        </div>
        <comment :discussion_id="discussion_id" :type="type"></comment>
    </div>
</template>

<script>
    import comment from "../comment/comment"
    export default {
        name: "discussion",
        data() {
            return {
                discussion_content: null,
                type: 'd',
                discussion_id: this.discussion_id
            }
        },
        props:['discussion_id'],
        created(){
            const axios = require('axios');
            axios.get('/weixin/discussion_content/' + this.discussion_id)
                .then(response => (
                    this.discussion_content = response.data
                )).catch(function (error) {
                console.log(error);
            }).finally(() => {

            })
        },
        components: {
            comment
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../common/stylus/discussion.stylus'
</style>