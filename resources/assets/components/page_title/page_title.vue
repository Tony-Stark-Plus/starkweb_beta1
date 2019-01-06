<template>
    <div class="container">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10 page_title">{{page_title}}</div>
            <div class="col-md-1"></div>
        </div>
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