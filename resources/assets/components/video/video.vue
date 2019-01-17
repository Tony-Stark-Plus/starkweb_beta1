<template>
    <div class="video_wrapper">
        <div class="video_player">
            <div class="col-md-10 offset-md-1">
                <div class="video-wrapper">
                    <video-player class="vjs-custom-skin" :options="playerOptions"></video-player>
                </div>
            </div>
        </div>
        <div class="video_mes"></div>
    </div>
</template>

<script>
    export default {
        name: "video",
        data() {
            return{
                playerOptions: {
                    // videojs options
                    muted: true,
                    language: 'zh-CN',
                    playbackRates: [0.5, 1.0, 1.5, 2.0],
                    preload: 'auto',
                    sources: [{
                        type: "video/mp4",
                        src: ''
                    }],
                    poster: "",
                    muted: false,
                    controls: true,
                    fluid: true
                },
                video_mes: null
            }
        },
        props:['video_id'],
        created() {
            this.get_video_mes();
        },
        methods:{
            get_video_mes() {
                const axios = require('axios');
                axios.get('/weixin/find_video_mes/'+ this.video_id)
                    .then(response => (
                        this.video_mes = response.data
                    )).catch(function (error) {
                    console.log(error);
                }).finally(() => this.playerOptions.sources[0].src = this.video_mes.videoUrl);
            }
        }
    }
</script>

<style scoped lang="stylus">
@import "../../common/stylus/video.stylus"

</style>