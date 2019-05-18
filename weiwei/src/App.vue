<template>
  <div id="app">
    <CHeader v-if="path!='/home'"/>
    <transition name="slide-fade">
        <router-view></router-view>
    </transition>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
  import CHeader from './components/header/'
    export default {
        name: 'app',
        data() {
            return {
                
            }
        },
        computed: {
            path() {
                return this.$route.path;
            }
        },
        components: {
            CHeader
        },
        mounted() {
            console.log('this: ',this.$route)
        },
    }
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
html,body,#app{
    height: 100%;
    width: 100%;
}
#app {
  
}
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.5s ease;
}
.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>
