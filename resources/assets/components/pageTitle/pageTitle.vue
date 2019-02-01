<template>
    <div class="title_wrapper">
        <div class="col-md-10 offset-md-1 pageTitle">{{pageTitle}}</div>
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