<template>
  <div id="app">
    <CHeader />
    <router-view></router-view>
  </div>
</template>

<script>
  import CHeader from './components/header/'
export default {
  name: 'app',
  components: {
    CHeader
  }
}
</script>

<style>
#app {
  
}
</style>
