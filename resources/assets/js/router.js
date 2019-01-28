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
    {
        path:'/studyRouter',
        component: require('../components/studyRouter/studyRouter.vue')
    },
    {
        path:'/discuss',
        component: require('../components/discuss/discuss.vue')
    },
    {
        path:'/login',
        component: require('../components/login/login.vue')
    },
    {
        path:'/register',
        component: require('../components/register/register.vue')
    }
];

export default new VueRouter({
    routes,
});