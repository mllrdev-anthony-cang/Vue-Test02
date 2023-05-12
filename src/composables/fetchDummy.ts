import { createFetch } from '@vueuse/core'
import type { ComputedRef } from 'vue'

export function fetchDummy(resource: ComputedRef<string> | string) {
  const useMyFetch = createFetch({
    baseUrl: 'https://dummyjson.com/'
  })

  return useMyFetch(resource)
}
