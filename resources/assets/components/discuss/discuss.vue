<template>
    <div class="discuss_wrapper">
        <div class="discuss_title">
            <h2 class="t1">Starkweb 社区</h2>
            <p class="t2">more share，more gain</p>
            <button class="btn-info btn">created your own idea >></button>
        </div>
        <discuss_list></discuss_list>
    </div>
</template>

<script>
    import discuss_list from './discuss_list/discuss_list'
    export default {
        name: "discuss",
        components: {
            discuss_list
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/discuss.stylus"
</style>