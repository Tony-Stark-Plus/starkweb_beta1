<template>
    <div>
        <page_title v-bind:page_title="page_title"></page_title>
        <vList v-bind:listData="videoList"></vList>
        <pagination v-bind:paginationData="videoList" v-on:listenToPagination="changePage"></pagination>
    </div>
</template>
<style lang="stylus">

</style>
<script>
    import page_title from '../page_title/page_title';
    import vList from '../vList/vList';
    import pagination from '../pagination/pagination';
    const Swal = require('sweetalert2');
    export default {
        name :'videoList',
        components :{
            page_title,
            vList,
            pagination,
        },
        mounted() {
            console.log('Component mounted.')
        },
        data(){
            return{
                page_title:'web开发视频更新，All in here!',
                videoList: null,
                page_index: 1,
            }
        },
        created() {
            this.paginate()
        },
        mounted() {
            if(this.$route.params.login_success == true){
                Swal.fire({
                    position: 'center',
                    type: 'success',
                    title: 'welcome to Starkweb',
                    showConfirmButton: true,
                    timer: 2500
                });
                this.$route.params.login_success = false;
                this.setMesToApp();
            }
        },
        methods: {
            changePage(data) {
                this.page_index = data;
                this.paginate();
            },
            paginate() {
                const axios = require('axios');
                axios.get('/weixin/videoList/'+ this.page_index)
                    .then(response => (
                        this.videoList = response.data
                    )).catch(function (error) {
                    console.log(error);
                });
            },
            setMesToApp() {
                this.$emit('listenToVideoList',this.$route.params.refresh);
                this.$route.params.refresh = false
            }
        }
    }
</script>