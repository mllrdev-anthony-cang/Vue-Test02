<script setup lang="ts">
import PostList from '../components/post-lists.vue'
import { useRoute } from 'vue-router'
import PostItem from '../components/post-items.vue'
const route = useRoute()

</script>
<template>
    <PostList v-if="route.name === 'posts'"/>
    <PostItem v-else />
</template>