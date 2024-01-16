<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <dl
    class="text-link-water text-[13px] font-medium bg-bunker inline-flex flex-row justify-start items-center px-5 py-2 rounded-xl"
  >
    <dt class="pr-4 py-1.5 border-r border-black-pearl">{{ title }}</dt>
    <dd class="pl-4 py-1.5 text-[15px]">{{ value }}</dd>
  </dl>
</template>

<script setup>
defineProps(['title', 'value'])
</script>
