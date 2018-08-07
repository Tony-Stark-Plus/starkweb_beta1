<template>
<div class="container">
    <div class="row">
        <div class="col-md-8 offset-md-2 mobile-adjust offset-1 main-content">

            <ul class="video-list-items">

                    <!-- content goes here -->
                    <li v-for="(item,index) in items" @click="onItemClick(index, item)" class="video-list-item">
                        <div class="row">
                            <div class="item-front col-md-1 un-watch">
                                <span class="select-like"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                            </div>
                            <div class="item-main col-md-9 item-main-mobile-adjust">
                                <a href="">
                                    <span class="camera"><i class="fa fa-video-camera" aria-hidden="true"></i></span>
                                    <span class="video-name">{{item}}</span>
                                    <span class="duihao"><i class="fa fa-check-square" aria-hidden="true"></i></span>
                                </a>
                            </div>
                            <div class="item-behind col-md-2 un-watch">
                                <span>July,23,2018</span>
                            </div>
                        </div>
                    </li>

            </ul>
        </div>
    </div>
</div>
</template>
<script>
    import Vue from 'vue'
    import VueScroller from 'vue-scroller'
    Vue.use(VueScroller)
    export default{
        data:function(){
            return {
                items:['1','2','3','4','5','1','2','3','4','5','1','2','3','4','5','1'
                    ,'2','3','4','5','1','2','3','4','5','1','2','3','4','5','1','2',
                    '3','4','5','1','2','3','4','5']
            }
        },
        mounted() {
            for (let i = 1; i <= 20; i++) {
                this.items.push(i + ' - keep walking, be 2 with you.')
            }
            this.top = 1;
            this.bottom = 20;
        },
        methods: {
            refresh(done) {
                setTimeout(() => {
                    let start = this.top - 1;
                    for (let i = start; i > start - 10; i--) {
                        this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
                    }
                    this.top = this.top - 10;
                    done()
                }, 1500)
            },
            infinite(done) {
                console.log('infinite called..');

                setTimeout(() => {
                    let start = this.bottom + 1;
                    for (let i = start; i < start + 10; i++) {
                        this.items.push(i + ' - keep walking, be 2 with you.')
                    }
                    this.bottom = this.bottom + 10;
                    done()
                }, 1500)
            },
            onItemClick(index, item) {
                console.log(index)
            }
        }
    }
</script>