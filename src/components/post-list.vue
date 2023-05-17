<script setup lang="ts">
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { paginationNav } from '../composables/paginationNav.js'

const router = useRouter()
const route = useRoute()
paginationNav.pageNumber = Number(route.query.pageNumber)
paginationNav.getData()
</script>

<template>
  <div class="c-main" v-if="paginationNav.data">
    Page: <button @click="paginationNav.previousPageNumber();router.push({query: {pageNumber: paginationNav.pageNumber}})">Previous</button>
    <input type="number" v-model="paginationNav.pageNumber" min="0" max="10" readonly />
    <button @click="paginationNav.nextPageNumber();router.push({query: {pageNumber: paginationNav.pageNumber}})">Next</button>
    <h1>Post List:</h1>
    <nav>
      <ul>
        <li v-for="post in paginationNav.data.posts">
          <RouterLink :to="{ name: 'post-item', query: { postId: post.id } }">
            {{ post.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
  <div v-else-if="paginationNav.error">
    <p>Oops! Error encountered: {{ paginationNav.error.message }}</p>
  </div>
  <div v-else>Loading...</div>
</template>
