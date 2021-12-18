import Vue from "vue";
import Router from "vue-router";
import CardsMainWrapper from "@/components/CardsMainWrapper";
import CartWrapper from "@/components/CartWrapper";
import ProfileComponent from "@/components/ProfileComponent";
import OrdersComponent from "../components/OrdersComponent";

Vue.use(Router);
let router = new Router({
    routes: [
        {
            path: "/",
            name: "catalog",
            component: CardsMainWrapper,
        },
        {
            path: "/profile",
            name: "profile",
            component: ProfileComponent,
        },
        {
            path: "/cart",
            name: "cart",
            component: CartWrapper,
            props: true,
        },
        {
            path: "/orders",
            name: "orders",
            component: OrdersComponent,
        },

    ],
});
export default router;
