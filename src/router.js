import Vue from "vue";
import VueRouter from "vue-router";
import Simulation from "./pages/simulation.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/simulation",
      name: "Simulation",
      component: Simulation,
      meta: {
        title: "Simulation",
      },
    },
  ],
  mode: "history",
});

router.replace({ path: "/simulation", redirect: "/" });

export default router;
