<template>
    <h2>Consumiendo la api de <a href="https://jsonplaceholder.typicode.com/posts">jsonplaceholder</a></h2>
    <section class="container">
        <PostDetails v-for="post in posts" :key="post.id" :title="post.title" :user="post.userId" :body="post.body"/>
    </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import PostDetails from './PostDetails.vue';
import PostService from '@/services/PostService';

let service = new PostService();
let posts = ref()

onMounted(async () => {
    await service.fetchAll();
    let data = service.getPost();
    posts.value = data.value;
});
</script>

<style scoped>
h2{
    padding: 4rem;
}
a{
    color: white;
    text-decoration: none;
}
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