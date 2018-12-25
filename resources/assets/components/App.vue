<template>
    <vheader v-bind:seller="seller"></vheader>
</template>
<style lang="stylus">
@import "../common/stylus/mixin.stylus"
@import '../common/stylus/main.stylus'
</style>
<script>
    import vheader from './vheader/v-header'
    export default {
        components :{
            vheader
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
