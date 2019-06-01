<template>
    <div class="title_wrapper col-sm-10 offset-sm-1 col-md-10 offset-md-1 ">
        <div class="pageTitle">{{pageTitle}}</div>
    </div>
</template>

<script>
    export default {
        name: "pageTitle.vue",
        data(){
            return {
                content:''
            }
        },
        props:{
            pageTitle: {
                type: String
            }
        }
    }
</script>

<style scoped lang="stylus">
@import "../../common/stylus/pageTitle.stylus";
</style>