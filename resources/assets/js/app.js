import './bootstrap';
import './video';
import './video-list';
import 'video.js/dist/video.min.js';
import './form';
import './main';
import './learn';
import './comments';
window.Vue = require('vue');
window.swal = require('sweetalert');

import vueRouter from 'vue-router'
Vue.use(vueRouter)

import router from './routes'


const app = new Vue({
    el: '#app',
    router:router
});