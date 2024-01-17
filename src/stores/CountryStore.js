import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCountryStore = defineStore('countryStore', () => {
  const country = ref({})
  const loading = ref(false)
  const neighbor = ref([])

  const getLanguages = computed(() => {
    if (!country.value) return 'n/a'
    return Object.values(country.value.languages).toString().replaceAll(',', ', ')
  })

  const getCurrencies = computed(() => {
    return Object.values(country.value.currencies)
      .flatMap((arr) => arr.name)
      .toString()
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
    const result = await Promise.all(
      country.value?.borders?.map(async (border) => {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        const data = await res.json()
        return { ...data[0] }
      })
    )
    console.log(result)
    neighbor.value = result
    loading.value = false
  }

  return { country, getLanguages, getCountry, getCurrencies, getBorders, getNeighbors, neighbor }
})
