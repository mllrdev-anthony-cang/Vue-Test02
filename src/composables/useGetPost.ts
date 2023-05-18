import { useFetch } from '@vueuse/core'
import { computed, ref } from 'vue'

interface post {
  id: number
  body: string
  title: string
}

interface postsRequest {
  limit: number
  skip: number
  total: number
  posts: post[]
}

export function useGetPosts(pageNumber: number = 0) {
  const api = 'https://dummyjson.com/posts'
  const postPerPage = 10
  const page = ref(pageNumber)
  const pageLimit = 10

  const url = computed(() => {
    return encodeURI(`${api}?limit=${postPerPage}&skip=${(page.value - 1) * postPerPage}`)
  })

  const { data, error } = useFetch(url, { refetch: true }).json<postsRequest>()

  function nextPage() {
    if (page.value < pageLimit) {
      page.value++
    }
  }

  function previousPage() {
    if (page.value > 1) {
      page.value--
    }
  }

  return { data, error, page, nextPage, previousPage }
}
