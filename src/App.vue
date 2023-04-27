<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  name: "App",
};
</script>

<template>
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./style/NavBar.scss";
@import "./style/Filter.scss";
</style>
