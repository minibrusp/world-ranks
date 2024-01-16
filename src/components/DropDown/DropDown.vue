<template>
  <div
    class="w-full relative after:content-arrowDownIcon after:absolute after:right-3 after:top-[10px]"
  >
    <select
      :name="name"
      class="border-bunker text-link-water text-xs font-bold border-2 bg-black-pearl px-3 py-[10px] rounded-xl w-full tracking-wider appearance-none cursor-pointer"
      :title="title"
      @change="changeHandler"
    >
      <slot></slot>
    </select>
  </div>
</template>

<script setup>
defineProps(['name', 'title', 'changeHandler'])
</script>
