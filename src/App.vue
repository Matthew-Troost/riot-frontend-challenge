<template>
  <div class="px-20 pb-20 min-h-screen gradient-background"> 
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from './components/navbar.vue'


export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>