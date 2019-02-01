<template>
    <div class="List-wrapper row">
        <ul class="List col-md-8 offset-md-2" v-if="this.listData">
            <li v-for="item in listData.videoList" class="item" v-if="listData['videoList']">
                <router-link :to="'/video/'+item.id">
                <span class="video_name"><span class="iconfont icon-video"></span>{{item.vname}}</span>
                <span class="date">{{item.date_en}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "vList",
        data(){
            return {
            }
        },
        props:{
            listData: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.stylus";
    @import "../../common/stylus/vList.stylus";
</style>