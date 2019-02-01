<template>
    <div class="article_wrapper">
        <pageTitle v-bind:pageTitle="pageTitle"></pageTitle>
        <aList v-if="list" :list-data="list"></aList>
        <pagination v-bind:paginationData="list" v-on:listenToPagination="changePage"></pagination>
    </div>
</template>

<script>
    import pageTitle from '../pageTitle/pageTitle'
    import aList from '../aList/aList'
    import pagination from '../pagination/pagination';
    export default {
        name: "articleList",
        data() {
            return{
                pageTitle: 'Laravel Vuejs 文章，教程，笔录',
                list: null,
                page_index: 1,
            }
        },
        components: {
            pageTitle,
            aList,
            pagination
        },
        created() {
            this.paginate()
        },
        methods: {
            paginate() {
                const axios = require('axios');
                axios.get('/weixin/articleListVue/'+ this.page_index)
                    .then(response => (
                        this.list = response.data
                    )).catch(function (error) {
                    console.log(error);
                });
            },
            changePage(data) {
                this.page_index = data;
                this.paginate();
            },
        }
    }
</script>

<style scoped lang="stylus">
@import "../../common/stylus/articleList.stylus"
</style>