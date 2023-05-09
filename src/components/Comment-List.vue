<script setup lang="ts">
import { useRoute } from 'vue-router'
import { fetchDummy } from '../composables/fetchDummy.js'

const route = useRoute()
const { data } = fetchDummy(`comments/post/${route.query.postId}`).get().json()
</script>

<template>
  <div class="main" v-if="data">
    <h4>Comments:</h4>
    <ul>
      <li v-for="comment in data.comments">{{ `${comment.user.username} : ${comment.body}` }}</li>
    </ul>
  </div>
</template>
