<template>
   <div>
       <v-header v-bind:refresh="refresh"></v-header>
       <navigation></navigation>
       <div class="back">
           <router-view v-on:listenToVideoList="refreshVheader"></router-view>
       </div>
       <v-foot></v-foot>
   </div>
</template>
<style lang="stylus">
@import "../common/stylus/mixin.stylus"
@import '../common/stylus/main.stylus'
</style>
<script>
    import header from './vheader/v-header'
    import navigation from './navigation/navigation'
    import foot from './vfoot/v-foot'
    export default {
        name:'App',
        components :{
            'v-header': header,
            navigation,
            'v-foot' : foot
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
