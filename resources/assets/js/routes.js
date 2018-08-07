import vueRouter from 'vue-router'


let routes=[
    {
    path:'/video-list',
    component:require('./components/pages/video/video-list')
    }
    // ,
    // {
    //     path:'/register',
    //     component:require('./components/form/registerForm')
    // }
]

export default new vueRouter({
    routes
})