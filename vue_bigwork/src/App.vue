<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
  </div>
</template>

<script>
import top from './components/top.vue'
export default {
  components: { top },
  name: 'App'
}
</script>

<style>

</style>
