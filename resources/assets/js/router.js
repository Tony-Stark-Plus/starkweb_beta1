import VueRouter from 'vue-router'

const routes = [
    {
        path:'/',
        component: require('../components/App.vue')
    }
];

export default new VueRouter({
    routes
});