import {createRouter, createWebHashHistory} from "vue-router";
import Layout from "@/layout/Layout";

const routes = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        children: [
            {
                path: "/xtest",
                name: "Xtest",
                component: () => import("../components/Xtest"),
            },
            {
                path: "/hello",
                name: "Hello",
                component: () => import("../components/HelloWorld"),
            },
        ]
    },
    {
        path: "/login",
        name: "Logins",
        component: () => import("@/views/Login"),
    },

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})