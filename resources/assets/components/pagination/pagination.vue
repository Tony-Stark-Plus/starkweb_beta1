<template>
    <div class="pagination">
        <input type="text" v-model="page_index">
        <button v-on:click="changePage">跳转</button>
    </div>
</template>

<script>
    export default {
        name: "pagination",
        data(){
            return{
                page_index: null
            }
        },
        props:{
            paginationData: {
                type: Object
            }
        },
        methods: {
            changePage() {
                this.$emit('listenToPagination',this.page_index)
            }
        }
    }
</script>

<style scoped lang="stylus">

</style>