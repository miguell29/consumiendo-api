<template>
  <PostList/>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostList from './components/PostList.vue';

export default defineComponent({
  name: 'App',
  components: {
    PostList
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
}
</style>
