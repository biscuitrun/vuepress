<template>
  <div id="app">
    <div class="nav">
      <About />
    </div>
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import About from "@/views/About.vue";
export default {
  name: "app",
  components: { About }
};
</script>
<style lang="scss">
html {
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  margin: 0px;
  float: left;
  // background: rgb(244, 245, 244);
  width: 20%;
  height: 100%;
}
</style>
