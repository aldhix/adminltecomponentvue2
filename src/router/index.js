import Vue from "vue";
import VueRouter from "vue-router";
import LayoutAdmin from "../layouts/LayoutAdmin.vue";
import Dashboard from "../views/Dashboard.vue";
import ExampleForm from "../views/ExampleForm.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: LayoutAdmin,
        children: [
            {
                path: "",
                name: "dashboard",
                component: Dashboard,
            },
            {
                path: "example",
                name: "example",
                component: ExampleForm,
            },
            {
                path: "example/other",
                name: "example.other",
                component: Dashboard,
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: BASE_PATH,
    linkExactActiveClass: "active",
    linkActiveClass: "active",
    routes,
});

export default router;
