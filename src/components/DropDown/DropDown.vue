<template>
  <div
    class="w-full relative after:content-arrowDownIcon after:absolute after:right-3 after:top-[10px]"
  >
    <select
      name="sortby"
      class="border-bunker text-link-water text-xs font-bold border-2 bg-black-pearl px-3 py-[10px] rounded-xl w-full tracking-wider appearance-none"
      title="sort by"
    >
      <option value="population">Population</option>
      <option value="name">Name</option>
      <option value="area">area(km&sup2;)</option>
    </select>
  </div>
</template>

<script setup></script>
