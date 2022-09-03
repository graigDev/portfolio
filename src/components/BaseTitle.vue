<template>
  <div class="flex w-full items-center space-x-4">
    <div class="flex space-x-4 items-end">
      <span class="font-sf font-semibold text-teal-600 text-lg">{{ number }}.</span>
      <h4 class="whitespace-nowrap font-semibold text-lg normal-case text-gray-800">{{ title }}</h4>
    </div>
    <div class="border-t-2 w-full"></div>
  </div>
</template>

<script setup>
  import {defineProps} from "vue";

  defineProps({
    title: String,
    number: String
  })
</script>
