import { defineStore } from 'pinia'
import _ from 'lodash'

export const useCountriesStore = defineStore('countriesStore', {
  state: () => ({
    countries: [],
    loading: false,
    sortBy: 'population',
    region: [],
    independent: false,
    unMember: false,
    search: ''
  }),
  getters: {
    searchedCountry() {
      if (!this.search) return
      return this.countries.filter((country) => {
        return (
          country.name.common.toLowerCase() == this.search.toLowerCase() ||
          country.region.toLowerCase() == this.search.toLowerCase() ||
          country.subregion.toLowerCase() == this.search.toLowerCase()
        )
      })
    },
    sortedCountries() {
      this.loading = true
      let clonedCountry = _.cloneDeep(this.countries)
      switch (this.sortBy) {
        case 'name':
          clonedCountry.sort()
          break
        case 'population':
          clonedCountry.sort((a, b) => b.population - a.population)
          break
        case 'area':
          clonedCountry.sort((a, b) => b.area - a.area)
          break
      }
      this.loading = false
      return clonedCountry
    },
    filteredRegionCountries() {
      if (this.region.length === 0) return this.sortedCountries
      return this.sortedCountries.filter((country) => this.region.includes(country.region) == true)
    },
    filteredCountries() {
      if (!this.independent && !this.unMember) return this.filteredRegionCountries
      if (this.independent && this.unMember)
        return this.filteredRegionCountries.filter(
          (country) => country.independent == true && country.unMember == true
        )
      if (this.independent)
        return this.filteredRegionCountries.filter((country) => country.independent == true)
      if (this.unMember)
        return this.filteredRegionCountries.filter((country) => country.unMember == true)
    },
    getTotalCountries() {
      return this.filteredCountries.length
    }
  },
  actions: {
    async getCountries() {
      this.loading = true
      const res = await fetch('https://restcountries.com/v3.1/all')
      const data = await res.json()

      this.countries = data
      this.loading = false
    }
  }
})
