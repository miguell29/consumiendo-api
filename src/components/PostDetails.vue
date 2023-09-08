<template>
    <section class="card">
        <h4>{{ props.title }}</h4>
        <p class="id">userId: {{ props.user }}</p>
        <p>{{ props.body }}</p>
    </section>
</template>

<script lang="ts" setup >

import { defineProps } from 'vue';

const props = defineProps<{
    title: string,
    user: number,
    body: string,
}>();

</script>

<style scoped>
    .card{
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        width: 200px;
        margin: 0.5rem;
        color: beige;
        height: 400px;
    }
    .card .id{
        font-size: 12px;
        color: #999;
    }
    h4{
        color: burlywood;
    }
    .card p{
        padding: 1rem;
        text-align: center;
    }
</style>