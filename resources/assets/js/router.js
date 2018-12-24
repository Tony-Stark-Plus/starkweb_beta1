import VueRouter from 'vue-router'


const routes = [
    {
        path:'/home',
        component: require('./components/test.vue')
    }
];

export default new VueRouter({
    routes
});