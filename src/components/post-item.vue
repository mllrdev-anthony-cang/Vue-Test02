<script setup lang="ts">
import { useRoute } from 'vue-router'
import CommentList from './comment-list.vue'
import { useFetch } from '../composables/useFetch.js'

const route = useRoute()
const { data, error } = useFetch(`https://dummyjson.com/post/${route.query.postId}`)
</script>
<template>
  <div class="c-main" v-if="data">
    <h1>Post: {{ data.title }}</h1>
    <div>{{ data.body }}</div>
    <br />
    <CommentList />
  </div>
  <div v-else-if="error">
    <p>Oops! Error encountered: {{ error.message }}</p>
  </div>
  <div v-else>Loading...</div>
</template>
