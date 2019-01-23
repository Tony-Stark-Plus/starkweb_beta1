<template>
    <div class="List-wrapper row">
        <ul class="aList col-md-8 offset-md-2">
            <li class="item" v-for="item in listData.articleList" v-if="listData['articleList']">
                <span class="number_icon">{{Math.floor(Math.random()*100)}}</span>
                <span class="main_mes">
                    <router-link :to="'article/'+item.id"><span class="article_name">{{item.aname}}</span></router-link>
                    <span class="date">发表于{{item.created_at.substr(0,10)}}</span>
                </span>
                <div class="a_kind"><span :class="'common_kind kind-'+item.kind_class">{{item.kind}}</span></div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "vList",
        data(){
            return {
                listData: null
            }
        },
        props:{
            listData: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.stylus";
    @import "../../common/stylus/list_kind.stylus";
    @import "../../common/stylus/aList.stylus";
</style>