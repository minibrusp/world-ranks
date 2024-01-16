<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Header from '@/components/CountryPage/Header'
import DetailsList from '@/components/CountryPage/DetailsList'
import Neighbors from '@/components/CountryPage/Neighbors'
</script>

<template>
  <main class="bg-black-pearl text-raven py-6 text-center">
    <Header />
    <DetailsList />
    <Neighbors />
  </main>
</template>
