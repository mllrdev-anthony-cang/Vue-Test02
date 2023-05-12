import { createFetch } from '@vueuse/core'

export function fetchDummy(resource:string) {
  const useMyFetch = createFetch({
    baseUrl: 'https://dummyjson.com/'
  })

  return useMyFetch(resource)
}
