<template>
    <div>
        <page_title v-bind:page_title="page_title"></page_title>
    </div>
</template>
<style lang="stylus">

</style>
<script>
    import page_title from '../page_title/page_title'
    export default {
        name :'videoList',
        components :{
            page_title
        },
        mounted() {
            console.log('Component mounted.')
        },
        data(){
            return{
                page_title:'web开发视频更新，All in here!',
                videoList: null
            }
        },
        created() {
            const axios = require('axios');
            axios.get('/weixin/videoList/1')
                .then(response => (
                    this.videoList = response.data
                )).catch(function (error) {
                console.log(error);
            });

        }
    }
</script>