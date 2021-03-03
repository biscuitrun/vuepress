<template>
  <div class="layout">
    <div class="nav">
      侧边导航栏
      <!-- <About /> -->
    </div>
    <router-view />
  </div>
</template>
<script>
// import About from "../About";
export default {
  name: "layout",
  // components: { About }
};
</script>
<style scoped>
.layout {
  position: relative;
  height:100%;
}
.nav {
  width: 10%;
  height: 850px;
  background:rgb(155, 152, 152);
  position: absolute;
  top: 0;
  left: 0;
}
</style>
