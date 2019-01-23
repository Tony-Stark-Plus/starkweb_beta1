import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/videoList'
    },
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
    {
        path:'/article/:article_id',
        component: require('../components/article/article.vue'),
        props: true,
        name: 'article'
    },
];

export default new VueRouter({
    routes,
});