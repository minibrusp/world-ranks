import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCountryStore = defineStore('countryStore', () => {
  const country = ref({})
  const loading = ref(false)
  const neighbor = ref([])

  const getLanguages = computed(() => {
    return country.value.languages
      ? Object.values(country.value.languages).toString().replaceAll(',', ', ')
      : null
  })

  const getCurrencies = computed(() => {
    return country.value.currencies
      ? Object.values(country.value.currencies)
          .flatMap((arr) => arr.name)
          .toString()
      : null
  })

  const getBorders = computed(() => {
    return country.value.borders
  })

  async function getCountry(name) {
    loading.value = true
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    const data = await res.json()

    country.value = { ...data[0] }
    loading.value = false
  }

  async function getNeighbors() {
    loading.value = true

    if (!country.value.borders) {
      neighbor.value = []
      loading.value = false
      return
    }

    const result = await Promise.all(
      getBorders.value?.map(async (border) => {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        const data = await res.json()
        return { ...data[0] }
      })
    )
    neighbor.value = result
    loading.value = false
  }

  function $reset() {
    country.value = {}
    loading.value = false
    neighbor.value = []
  }

  return {
    country,
    getLanguages,
    getCountry,
    getCurrencies,
    getBorders,
    getNeighbors,
    neighbor,
    $reset,
    loading
  }
})
