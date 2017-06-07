// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import About from './components/About'
import Login from './components/Login'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
Vue.config.productionTip = false
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueRouter)
const routes = [
    { path: '/', component: Hello },
    { path: '/about', meta: { RequireAuth: true }, component: About },
    { path: '/login', component: Login },
]


const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (to.meta.RequireAuth == true) {

        if (localStorage.getItem("user_token") != null) {
            next();
        } else {
            router.push('/login');
        }
    } else {
        next();
    }

})
Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
}).$mount("#app")