import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "@/stores/index";

const routes: Array<RouteRecordRaw> = [
    {path: '/', name: 'Home', component: Home, meta: {authorizedOnly: true}},
    {path: '/login', name: 'Login', component: Login, meta: {guestOnly: true}},
    {path: "/:pathMatch(.*)*", redirect: {name: 'Home'}}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.authorizedOnly && store.getters.isGuest) {
        router.push({name: 'Login'});
        return;
    }

    if (to.meta) {
        if (to.meta.guestOnly && !store.getters.isGuest) {
            router.push({name: 'Home'});
            return;
        }
    }

    next();
});

export  default router;