<template>
  <div id="app" class="min-h-screen px-5 pb-5 md:px-20 sm:pb-20" :class="background">
    <navbar @toggle="navOpen = !navOpen" />
    <router-view />
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    navbar,
  },
  data() {
    return {
      navOpen: false,
    };
  },
  computed: {
    background() {
      return {
        "gradient-background": !this.navOpen,
        "gradient-background-extended": this.navOpen,
      };
    },
  },
};
</script>
