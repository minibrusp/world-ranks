<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <label class="flex justify-start items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      name="status"
      :value="props.value"
      class="peer appearance-none relative w-[22px] h-[22px] border-raven border-2 bg-black-pearl rounded-[4px] cursor-pointer shrink-0 checked:border-royal-blue checked:bg-royal-blue"
    />
    <span class="text-link-water text-[13px] font-medium">{{ props.label }}</span>
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute w-[22px] h-[22px] hidden peer-checked:block"
    >
      <path
        d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6"
        stroke="#D2D5DA"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </label>
</template>

<script setup>
const props = defineProps(['label', 'value'])
</script>
