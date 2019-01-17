// import './bootstrap'
import './video';
import './video-list';
import 'video.js/dist/video.min.js';
import './form';
import './main';
import './learn';
import './comments';
import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router';
import App from '../components/App'
import VueVideoPlayer from 'vue-video-player';

require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');

window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(VueVideoPlayer);

new Vue({
    router,
    template: '<App/>',
    components: {App}
}).$mount('#app');