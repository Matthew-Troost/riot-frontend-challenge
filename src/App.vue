<template>
  <div class="px-20 min-h-screen gradient-background"> 
    <navbar />
    <h1 class="text-3xl font-bold text-white my-10">Attacks</h1>
    <grid />
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import grid from './components/grid'

export default {
  name: 'App',
  components: {
    navbar,
    grid
  }
}
</script>