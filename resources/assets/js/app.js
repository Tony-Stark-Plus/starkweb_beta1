import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router';
import App from '../components/App'
import VueVideoPlayer from 'vue-video-player';
import hljs from 'highlight.js'
import 'highlight.js/styles/agate.css'
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import 'sweetalert2/src/sweetalert2.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
// markdown编辑器
import mavonEditor from 'mavon-editor'
import vSelect from 'vue-select'

window.Vue = require('vue');
window.Swal = require('sweetalert2');
Vue.use(VueRouter);
Vue.use(VueAxios,axios);
Vue.use(VueVideoPlayer);
Vue.use(mavonEditor);
Vue.component('v-select', vSelect);
Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
});
// Tell Vue to use the plugin
new Vue({
    router,
    template: '<App/>',
    components: {App}
}).$mount('#app');