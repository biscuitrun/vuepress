<template>
  <div class="layout">
    <div class="nav">
      <About />
    </div>
    <router-view />
  </div>
</template>
<script>
import About from "../About";
export default {
  name: "layout",
  components: { About }
};
</script>
<style scoped>
.layout {
  position: relative;
}
.nav {
  width: 20%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
