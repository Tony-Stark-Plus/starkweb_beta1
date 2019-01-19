import VueRouter from 'vue-router'

const routes = [
    {
        path:'/videoList',
        component: require('../components/videoList/videoList.vue')
    },
    {
        path:'/video/:video_id',
        component: require('../components/video/video.vue'),
        props: true
    },
    {
        path:'/articleList',
        component: require('../components/articleList/articleList.vue')
    },
];

export default new VueRouter({
    routes
});