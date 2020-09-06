import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../components/Landing.vue";
import Host from "../components/Host.vue";
import Join from "../components/Join.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/host/:room",
    name: "Host",
    component: Host,
    props: true
  },
  {
    path: "/join/:room",
    name: "Join",
    component: Join,
    props: true
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
