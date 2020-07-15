<template>
  <div class="min-h-screen gradient-background px-5 pb-5 md:px-20 sm:pb-20"> 
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