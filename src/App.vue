<template>
  <div id="app">
    <catag-tory />
    <new-list />
  </div>
</template>

<script>
import CatagTory from './components/catag-tory.vue'
import NewList from './components/new-list.vue'

export default {
  name: 'App',
  components: {
    CatagTory,
    NewList
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
