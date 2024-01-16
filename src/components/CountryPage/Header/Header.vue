<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="text-link-water px-4">
    <div class="inline-block mx-auto mb-6">
      <Flag source="https://flagcdn.com/w320/in.png" altText="flag of india" size="large" />
    </div>
    <h1 class="text-3xl font-bold mb-[2px]">India</h1>
    <p>Republic of India</p>
    <div class="flex flex-row flex-wrap justify-center items-center gap-2 my-9">
      <Stat title="Population" value="1,380,004,385" />
      <Stat title="Area(km&sup2;)" value="3,287,590" />
    </div>
  </header>
</template>

<script setup>
import Stat from '@/components/Stat'
import Flag from '@/components/Flag'
</script>
