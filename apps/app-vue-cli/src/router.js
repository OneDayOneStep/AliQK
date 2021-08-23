import { createRouter, createWebHistory } from "vue-router";
export default (base = "/") => {
    return createRouter({
        history: createWebHistory(base),
        routes: [{
            path: "/page_A",
            component: () => import('@/components/page_A')
        }, {
            path: "/page_B",
            component: () => import('@/components/page_B')
        }]
    });
}
