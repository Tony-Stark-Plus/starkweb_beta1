<template>
    <div class="title_wrapper">
            <div class="col-md-10 offset-md-1 page_title">{{page_title}}</div>
    </div>
</template>

<script>
    export default {
        name: "page_title.vue",
        data(){
            return {
                content:''
            }
        },
        props:{
            page_title: {
                type: String
            }
        }
    }
</script>

<style scoped lang="stylus">
@import "../../common/stylus/page_title.stylus";
</style>