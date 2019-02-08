<template>
    <div>
        <pageTitle v-bind:pageTitle="pageTitle"></pageTitle>
        <vList v-bind:listData="videoList"></vList>
        <pagination v-bind:paginationData="videoList" v-on:listenToPagination="changePage"></pagination>
    </div>
</template>
<style lang="stylus">

</style>
<script>
    import pageTitle from '../pageTitle/pageTitle';
    import vList from '../vList/vList';
    import pagination from '../pagination/pagination';
    const Swal = require('sweetalert2');
    export default {
        name :'videoList',
        components :{
            pageTitle,
            vList,
            pagination,
        },
        mounted() {
            console.log('Component mounted.')
        },
        data(){
            return{
                pageTitle:'web开发视频更新，All in here!',
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
                    showConfirmButton: false,
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
                this.axios.get('/weixin/videoList/'+ this.page_index)
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