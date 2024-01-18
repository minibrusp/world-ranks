<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Header from '@/components/CountryPage/Header'
import DetailsList from '@/components/CountryPage/DetailsList'
import Neighbors from '@/components/CountryPage/Neighbors'
import { useCountryStore } from '@/stores/CountryStore'
import { useRoute } from 'vue-router'
import { onMounted, onBeforeUnmount } from 'vue'

const route = useRoute()
const countryStore = useCountryStore()

onMounted(() => {
  countryStore.getCountry(route.params.name)
})

onBeforeUnmount(() => {
  countryStore.$reset()
})
</script>

<template>
  <main
    class="bg-black-pearl text-raven py-6 text-center min-h-screen sm:max-w-[718px] sm:mx-auto sm:border sm:border-bunker lg:translate-y-[-45px] lg:rounded-xl xl:lg:translate-y-[-60px]"
  >
    <section class="sm:translate-y-[-73px] sm:max-w-[640px] sm:mx-auto">
      <Header />
      <DetailsList />
      <Neighbors v-if="countryStore.getBorders" />
    </section>
  </main>
</template>
