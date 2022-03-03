import VueRouter from "vue-router";
import UserDescription from "../components/UserDescription";


export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/info",
            component: UserDescription,
            name: "info",
        },

    ],
    // scrollBehavior(to, from, savedPosition) {
    //     console.log(savedPosition);
    //     if (savedPosition) {
    //         return savedPosition;
    //     } else if (to.hash) {
    //         return {
    //             selector: to.hash,
    //             behavior: "smooth",
    //         };
    //     } else {
    //         return { x: 0, y: 400, behavior: "smooth" };
    //     }
    // },
});
