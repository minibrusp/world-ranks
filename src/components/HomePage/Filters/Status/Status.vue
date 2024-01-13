<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FilterField>
    <template #header>
      <h2 class="text-xs font-medium">Status</h2>
    </template>
    <template #filter>
      <div class="flex flex-col gap-4 mt-2">
        <Checkbox label="Member of the United Nations" value="UN" />
        <Checkbox label="Independent" value="independent" />
      </div>
    </template>
  </FilterField>
</template>

<script setup>
import FilterField from '@/components/FilterField'
import Checkbox from '@/components/Checkbox'
</script>
