<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/ui/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style>
* {
  font-family: "Manrope", sans-serif;
}

#app {
  display: flex;
  width: 100%;
}
</style>
