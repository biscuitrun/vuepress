<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "app"
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
