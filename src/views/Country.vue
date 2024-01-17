<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Header from '@/components/CountryPage/Header'
import DetailsList from '@/components/CountryPage/DetailsList'
import Neighbors from '@/components/CountryPage/Neighbors'
</script>

<template>
  <main
    class="bg-black-pearl text-raven py-6 text-center sm:max-w-[718px] sm:mx-auto sm:border sm:border-bunker lg:translate-y-[-45px] lg:rounded-xl xl:lg:translate-y-[-60px]"
  >
    <section class="sm:translate-y-[-73px] sm:max-w-[640px] sm:mx-auto">
      <Header />
      <DetailsList />
      <Neighbors />
    </section>
  </main>
</template>
