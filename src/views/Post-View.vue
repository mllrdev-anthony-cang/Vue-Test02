<script setup lang="ts">
import PostList from '../components/Post-list.vue'
import { useRoute } from 'vue-router'
import PostItem from '../components/Post-Item.vue'
const route = useRoute()

</script>
<template>
    <PostList v-if="route.name === 'posts'"/>
    <PostItem v-else />
</template>