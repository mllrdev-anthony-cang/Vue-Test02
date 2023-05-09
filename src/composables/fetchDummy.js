import { createFetch } from '@vueuse/core'

export function fetchDummy(resource) {
  const useMyFetch = createFetch({
    baseUrl: 'https://dummyjson.com/'
  })

  return useMyFetch(resource)
}
