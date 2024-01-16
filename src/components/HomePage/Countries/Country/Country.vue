<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <tr class="text-link-water">
    <td class="py-2">
      <img
        :src="country.flags.png"
        :alt="country.flags.alt"
        class="max-w-[50px] min-h-[38px] rounded"
      />
    </td>
    <td>{{ country.cca3 }}</td>
    <td>{{ numeral(country.population).format('0.000a') }}</td>
    <td>{{ numeral(country.area).format('0.000a') }}</td>
  </tr>
</template>

<script setup>
import numeral from 'numeral'
defineProps(['country'])
</script>
