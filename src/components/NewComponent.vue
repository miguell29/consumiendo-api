<template>
	v-for="elm in data"
</template>

<script setup lang="ts">
defineProps<{ 
	data: import("/home/migux/Escritorio/test/vue/consumiendo-api/src/interfaces/IPost").default[];
}>()
</script>
