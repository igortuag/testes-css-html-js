<template>
  <div id="app">
    <FlowCards msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import FlowCards from "./components/FlowCards.vue";

export default {
  name: "App",
  components: {
    FlowCards,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
