import Vue from 'vue'
import VueRouter from 'vue-router'
import Simulation from "./pages/simulation.vue";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/simulation',
            name: 'Simulation',
            component: Simulation,
            meta: {
                title: 'Simulation',
              }
        }
    ],
    mode: 'history'
})