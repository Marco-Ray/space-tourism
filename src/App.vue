<template>
  <nav-bar />
  <router-view></router-view>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    NavBar,
    RouterView,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  background-color: black;
}
</style>
