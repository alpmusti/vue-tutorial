<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Search from './components/Search';
import Preview from './components/Preview';

export default {
  name: 'App',
  components: { Search, Preview },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
body{
  background-color: #eee;
}
#app {
  background-color: white;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Avenir', -apple-system, BlinkMacSystemFont,
   'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
   'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 5%;
  margin-right: 5%;
  padding: 10px 8% 10px 8%;
}
</style>
