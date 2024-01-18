<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="relative sm:overflow-x-hidden sm:min-h-60 lg:min-h-[300px]">
    <img
      class="w-full sm:max-w-[200%] sm:w-[160%] sm:relative sm:left-[-200px] sm:h-60 lg:h-[300px] lg:left-0 lg:max-w-full lg:w-full"
      src="../../assets/hero-image-wr.jpg"
      alt="hero image"
    />
    <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <router-link to="/">
        <Logo />
      </router-link>
    </div>
  </header>
</template>

<script setup>
import Logo from '@/components/Logo'
</script>
