import VueRouter from 'vue-router'

const routes = [
    {
        path:'/videoList',
        component: require('../components/videoList/videoList.vue')
    }
];

export default new VueRouter({
    routes
});