import { createRouter, createWebHistory } from "vue-router";
import page_A from "./components/page_A.vue";
import page_B from "./components/page_B.vue";
export default (base = "/") => {
    return createRouter({
        history: createWebHistory(base),
        routes: [{
            path: "/page_A",
            component: page_A
        }, {
            path: "/page_B",
            component: page_B
        }]
    });
}
