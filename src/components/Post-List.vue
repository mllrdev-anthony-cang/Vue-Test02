<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { fetchDummy } from '../composables/fetchDummy.js'

const router = useRouter()
const route = useRoute()

const pageNumber = ref(route.query.pageNumber)

const url = computed(() => {
  const skip = Number(pageNumber.value) * 10
  router.push({ name: 'posts', query: { pageNumber: pageNumber.value } })
  return `posts?skip=${skip}&limit=10`
})

const { data } = fetchDummy(url).get().json()
</script>

<template>
  <div class="c-main" v-if="data">
    Page: <input type="number" v-model="pageNumber" min="0" max="10" />
    <h1>Post List:</h1>
    <nav>
      <ul>
        <li v-for="post in data?.posts">
          <RouterLink :to="{ name: 'post-item', query: { postId: post.id } }">
            {{ post.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
  <div v-else>Loading...</div>
</template>
