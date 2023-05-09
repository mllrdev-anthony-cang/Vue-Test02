<script setup lang="ts">
import { useRoute } from 'vue-router'
import { fetchDummy } from '../composables/fetchDummy.js'
import CommentList from './Comment-List.vue'

const route = useRoute()
const { data } = fetchDummy(`post/${route.query.postId}`).get().json()
</script>
<template>
  <div class="c-main" v-if="data">
    <h1>Post: {{ data.title }}</h1>
    <div>{{ data.body }}</div>
    <br />
    <CommentList />
  </div>
</template>
