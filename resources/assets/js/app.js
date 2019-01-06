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

window.Vue = require('vue');
Vue.use(VueRouter);

new Vue({
    router,
    template: '<App/>',
    components: {App}
}).$mount('#app');