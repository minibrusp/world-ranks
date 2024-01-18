<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <img
    v-if="size === 'small'"
    class="max-w-[50px] min-h-[38px] rounded"
    :src="source"
    :alt="altText"
  />
  <img
    v-if="size === 'medium'"
    class="max-w-[80px] min-h-[60px] max-h-[60px] rounded"
    :src="source"
    :alt="altText"
  />
  <img
    v-if="size === 'large' && source"
    class="max-w-[260px] min-h-[196px] rounded-xl"
    :src="source"
    :alt="altText"
  />
</template>

<script setup>
defineProps(['source', 'altText', 'size'])
</script>
