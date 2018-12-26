<template>
    <div class="footer">
        <div class="container">
            <div class="row footer-border">
                <div class="col-md-4">
                    <div class="footer-logo">
                        <p class="logo_font">{{this.description}}</p>
                    </div>
                    <p class="footer__site-description">
                        <em>S</em>tark <em>Web</em><br>
                        <strong>为 Web 爱好者而生</strong>,<strong>stark</strong> 的愿景是做最好的 web前后端
                        中文视频教程和问答社区, 有任何跟 web开发 相关的问题，
                        都可以在这里得到解决。<br>Today We Hack!
                    </p>
                    <ul class="footer_connect">
                        <li class="qq"><a href=""><i class="fa fa-qq" aria-hidden="true"></i></a></li>
                        <li class="weixin"><a href=""><i class="fa fa-weixin" aria-hidden="true"></i></a></li>
                        <li class="weibo"><a href=""><i class="fa fa-weibo" aria-hidden="true"></i></a></li>
                        <li class="github"><a href="https://github.com/Tony-Stark-Plus/starkweb_beta1"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div class="col-md-2 mobile pad">
                    <h5 class="posControl">学习资料</h5>
                    <li><a href="">文章教程</a></li>
                    <li><a href="">个人博客</a></li>
                    <li><a href="">推荐书目</a></li>
                    <li><a href="">QQ群</a></li>
                </div>
                <div class="col-md-2 mobile pad">
                    <h5 class="posControl">laravel讨论</h5>
                    <li><a href="">学习路径</a></li>
                    <li><a href="">版本声明</a></li>
                    <li><a href="">社区规则</a></li>
                    <li><a href="">EsayWechat</a></li>
                </div>
                <div class="col-md-2 mobile pad">
                    <h5 class="posControl">友情相关</h5>
                    <li><a href="">vip会员</a></li>
                    <li><a href="">友情链接</a></li>
                    <li><a href="">电子货币购买</a></li>
                    <li><a href="">Stark IT Github</a></li>
                </div>
                <div class="col-md-2 mobile pad">
                    <h5 class="posControl">服务提供商</h5>
                    <a href="https://www.aliyun.com/" class="ali-logo" target="_blank">
                        <img src="https://gw.alicdn.com/tps/TB1xno8OFXXXXXNaFXXXXXXXXXX-338-80.png" alt="" class="">
                    </a>
                    <a href="https://www.qiniu.com/" class="qiniu-logo" target="_blank">
                        <img src="http://xsy-cdn.xyz/qiniu.png" alt="" class="">
                    </a>
                </div>
            </div>
            <div class="footer-bottom mobile pad">
                <div class="footer-bottom-left">Developed By stark,Powered By Laravel</div>
                <div class="footer-bottom-right">© Stark Web 2018. All rights reserved. 皖ICP备18007296号-1</div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer",
        data(){
            return {
                description : 'Starkweb',
                letter1 : 'Starkweb',
                letter2 : 'For web fans'
            }
        },
        created(){
            this.logo_animation()
        },
        methods:{
            logo_animation(){
                const array1= this.letter1.split('');
                const array2= this.letter2.split('');
                let length1 = array1.length;
                let length2 = array2.length;
                var i = 0;
                var self = this;
                var timer = setInterval(function(){
                    i++;
                    if(i<=length1){
                        var str_arr=array1;
                        var str_new = str_arr.slice(0,length1-i);
                        self.description = str_new.join('');
                    }
                    else{
                        var str_arr=array2;
                        var str_new = str_arr.slice(0,i-length1);
                        self.description = str_new.join('');
                    }
                    if(i>length1+length2){
                        clearInterval(timer)
                    }
                },300)
            }
        }
    }
</script>

<style scoped>
@import "../../common/stylus/footer.stylus";
</style>