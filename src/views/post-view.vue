<script setup lang="ts">
import PostList from '../components/post-list.vue'
import { useRoute } from 'vue-router'
import PostItem from '../components/post-item.vue'
const route = useRoute()

</script>
<template>
    <PostList v-if="route.name === 'posts'"/>
    <PostItem v-else />
</template>