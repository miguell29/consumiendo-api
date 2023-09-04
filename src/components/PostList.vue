<template>
    <section class="container">
        <PostDetails v-for="elm in data" :key="elm.id" :title="elm.title" :user="elm.userId" :body="elm.body"/>
    </section>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import PostDetails from './PostDetails.vue';
let data = ref();
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        data.value = json;
      }); 

      

      
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: darkcyan;
}
</style>