<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FilterField>
    <template #header>
      <h2 class="text-xs font-medium">Status</h2>
    </template>
    <template #filter>
      <div class="flex flex-col gap-4 mt-2">
        <Checkbox
          label="Member of the United Nations"
          name="unMember"
          :changeHandler="changeHandler"
        />
        <Checkbox label="Independent" name="independent" :changeHandler="changeHandler" />
      </div>
    </template>
  </FilterField>
</template>

<script setup>
import FilterField from '@/components/FilterField'
import Checkbox from '@/components/Checkbox'
import { useCountriesStore } from '@/stores/CountriesStore'

const countriesStore = useCountriesStore()

const changeHandler = (e) => {
  console.log(e.target.name)
  console.log(e.target.checked)
  switch (e.target.name) {
    case 'unMember':
      countriesStore.unMember = e.target.checked
      break
    case 'independent':
      countriesStore.independent = e.target.checked
      break
  }
}
</script>
