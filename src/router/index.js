import Vue from "vue";
import VueRouter from "vue-router";
import Form from "../views/Form.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Form",
        component: Form,
        meta: {
            requiresAuth: true
        },
    },
    {
        path: "/transaction/succes",
        name: "Succes",
        meta: {
            requiresAuth: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Succes.vue")
    },
    {
        path: "/transaction/fail",
        name: "Fail",
        meta: {
            requiresAuth: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Fail.vue")
    },
    {
        path: '*',
        redirect: '/'
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    let isLogin = true;
    // if(to.path == '/login'&&localStorage.getItem('access_token') != null){
    //   next('/')
    // }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLogin) {

            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            next()


        }
    } else {
        next()
    }



})
export default router;