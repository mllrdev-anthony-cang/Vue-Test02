<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useFetch } from '../composables/useFetch.js'

const router = useRouter()
const route = useRoute()

const pageNumber = ref(Number(route.query.pageNumber))

const url = computed(() => {
  const skip = Number(pageNumber.value) * 10
  router.push({ name: 'posts', query: { pageNumber: pageNumber.value } })
  return `https://dummyjson.com/posts?skip=${skip}&limit=10`
})

const { data, error } = useFetch(url)
</script>

<template>
  <div class="c-main" v-if="data">
    Page: <button @click="pageNumber > 1 ? pageNumber-- : (pageNumber = 1)">Previous</button>
    <input type="number" v-model="pageNumber" min="0" max="10" readonly />
    <button n @click="pageNumber < 10 ? pageNumber++ : (pageNumber = 10)">next</button>
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
