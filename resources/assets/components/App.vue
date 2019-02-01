<template>
   <div>
       <v-header v-bind:refresh="refresh"></v-header>
       <navigation></navigation>
       <div class="back">
           <router-view v-on:listenToVideoList="refreshVheader"></router-view>
       </div>
       <vfoot></vfoot>
   </div>
</template>
<style lang="stylus">
@import "../common/stylus/mixin.stylus"
@import '../common/stylus/main.stylus'
</style>
<script>
    import header from './vheader/v-header'
    import navigation from './navigation/navigation'
    import vfoot from './vfoot/vfoot'
    export default {
        name:'App',
        components :{
            'v-header': header,
            navigation,
            vfoot,
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods:{
            refreshVheader(data) {
                this.refresh = data
            }
        },
        data(){
            return {
                refresh: false
            }
        }
    }
</script>
