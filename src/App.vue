<template>
  <div id="app">
    <NavBar :navHide="navHide" />
    <router-view @navHide="navHide = !navHide" />
  </div>
</template>

<script>
import NavBar from "./components/ui/NavBar.vue";

export default {
  components: { NavBar },
  data() {
    return {
      navHide: false,
    };
  },
};
</script>

<style>
* {
  font-family: "Manrope", sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  width: 100%;
}
</style>
