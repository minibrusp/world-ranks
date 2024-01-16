<template>
  <div
    class="text-[13px] font-medium flex flex-row justify-between items-center px-4 py-6 border-b border-bunker last-of-type:border-transparent"
  >
    <dt>{{ title }}</dt>
    <dd class="text-link-water">{{ detail }}</dd>
  </div>
</template>

<script setup>
defineProps(['title', 'detail'])
</script>
