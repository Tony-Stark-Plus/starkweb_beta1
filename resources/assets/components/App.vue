<template>
   <div>
       <v-header></v-header>
       <navigation></navigation>
       <router-view></router-view>
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
        }
    }
</script>
