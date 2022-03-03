import VueRouter from "vue-router";
import UserDescription from "../components/UserDescription";
import allUsers from "../components/allUsers";



export default new VueRouter({
    routes:[
        {
            path: '/',
            component: allUsers
        },
        // {
        //     path:'user',
        //     component:UserDescription
        // }
    ]
})
