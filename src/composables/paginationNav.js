import { reactive, ref } from 'vue'

export const paginationNav = reactive({
  pageNumber: 1,
  data: ref(),
  error: ref(),
  domain: 'https://dummyjson.com/posts',
  limit: 10,
  getData() {
    const data = ref(null)
    const error = ref(null)
    const url = `${this.domain}?skip=${this.pageNumber * this.limit}&limit=${this.limit}`

    async function doFetch() {
      data.value = null
      error.value = null

      try {
        const res = await fetch(url)
        data.value = await res.json()
      } catch (e) {
        error.value = e
      }
    }

    doFetch()

    this.data = data
    this.error = error
  },
  nextPageNumber() {
    if (this.pageNumber < 10) {
      this.pageNumber++
    }
  },
  previousPageNumber() {
    if (this.pageNumber > 1) {
      this.pageNumber--
    }
  }
})
