<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFetch } from '../composables/useFetch.js'

const route = useRoute()
const { data, error } = useFetch(`https://dummyjson.com/comments/post/${route.query.postId}`)
</script>

<template>
  <div class="main" v-if="data">
    <h4>Comments:</h4>
    <ul>
      <li v-for="comment in data.comments">{{ `${comment.user.username} : ${comment.body}` }}</li>
    </ul>
  </div>
  <div v-else-if="error">
    <p>Oops! Error encountered: {{ error.message }}</p>
  </div>
  <div v-else>Loading...</div>
</template>
