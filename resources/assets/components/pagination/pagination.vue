<template>
    <div class="pagination col-md-8 offset-md-2">
        <div class="wrapper_page" v-if="this.paginationData.page_index">
            <div class="btn btn-primary previous_page" v-on:click="previous_page" v-show="this.paginationData.page_index > 1">上一页</div>
            <div class="btn btn-primary previous_page" v-show="this.paginationData.page_index <= 1">{{mes1}}</div>
        </div>
        <div class="skip_page">
            <div class="skip_wrapper">
                <input type="text" v-model="page_index" class="skip_input" @blur="tt"><span>&nbsp;/&nbsp;{{this.paginationData.page_num}}</span>
                <button v-on:click="changePage" class="skip_button btn btn-info" ref="my_button">跳转</button>
            </div>
        </div>
        <div class="wrapper_page">
            <div class="btn btn-primary next_page" v-on:click="next_page" v-show="page_index < this.paginationData.page_num">下一页</div>
            <div class="btn btn-primary next_page" v-show="page_index >= this.paginationData.page_num">{{mes2}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pagination",
        data(){
            return{
                page_index: 1,
                mes1: '已是首页',
                mes2: '已是尾页',
                page_num : null
            }
        },
        props:{
            paginationData: {
                type: Object
            }
        },
        methods: {
            changePage() {
                this.$emit('listenToPagination',this.page_index);
            },
            previous_page() {
                if(this.page_index <= 1){
                    this.page_index = 1;
                }else{
                    this.page_index = this.paginationData.page_index - 1;
                    this.changePage();
                }
            },
            next_page() {
                if(this.page_index >= this.paginationData.page_num){
                    this.page_index = this.paginationData.page_num;
                }else{
                    this.page_index = this.paginationData.page_index + 1;
                    this.changePage();
                }
            },
            tt() {
                this.page_index = this.paginationData.page_index;
            }
        },
        created() {
            setTimeout(() => {
                document.querySelector('.skip_button').onmousedown = function(event){
                    event.preventDefault();
                };
            },500)
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/pagination.stylus"
</style>