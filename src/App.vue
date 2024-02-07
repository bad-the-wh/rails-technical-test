<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/pokemon">Pokemon List</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Add your global styles here */
</style>
