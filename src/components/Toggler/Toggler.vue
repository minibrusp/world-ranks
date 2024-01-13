<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <label class="inline-block cursor-pointer">
    <input type="checkbox" name="region" :value="props.value" class="peer hidden" />
    <span
      class="peer-checked:text-link-water peer-checked:bg-bunker text-[13px] font-semibold inline-block px-3 py-[7px] rounded-xl tracking-wide"
      ><slot></slot
    ></span>
  </label>
</template>

<script setup>
const props = defineProps(['value'])
</script>
