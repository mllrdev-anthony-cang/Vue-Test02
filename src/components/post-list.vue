<script setup lang="ts">
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useGetPosts } from '../composables/useGetPost'

const router = useRouter()
const route = useRoute()

const { data, error, page, nextPage, previousPage } = useGetPosts(
  Number(route.query.pageNumber) || 1
)

function navigate(isNext = true) {
  if (isNext) {
    nextPage()
  } else {
    previousPage()
  }

  router.push({ query: { pageNumber: page.value } })
}
</script>

<template>
  <div class="c-main" v-if="data">
    Page: <button @click="navigate(false)">Previous</button>
    <input type="number" v-model="page" min="0" max="10" readonly />
    <button @click="navigate()">Next</button>
    <h1>Post List:</h1>
    <nav>
      <ul>
        <li v-for="post in data.posts">
          <RouterLink :to="{ name: 'post-item', query: { postId: post.id } }">
            {{ post.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
  <div v-else-if="error">
    <p>Oops! Error encountered: {{ error.message }}</p>
  </div>
  <div v-else>Loading...</div>
</template>
