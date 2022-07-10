import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Cart from '../views/Cart.vue'
import My from '../views/My.vue'


Vue.use(VueRouter);
const routes=[
    {
        path:"/",
        name:'Home',
        component:'Home'

    },
    {
        path:"/List",
        name:'List',
        component:()=>import("../views/List.vue")
    },
    {
        path:"/Cart",
        name:'Cart',
        component:()=>import("../views/About.vue")
    },
    {
        path:"/My",
        name:'My',
        component:()=>import("../views/My.vue")
    },
];
export default new VueRouter({
    mode:"history",
    base:process.env.BASE_URL,
    routes,
});
