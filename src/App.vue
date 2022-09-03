<template>
  <div data-simplebar data-simplebar-auto-hide="false" class="flex flex-col h-screen relative overflow-y-auto overflow-x-hidden">
    <router-view/>
    <router-view name="footer"/>
  </div>
</template>
<script setup>
/* eslint-disable */
  import simplebar from 'simplebar-vue'
  import 'simplebar/dist/simplebar.min.css'
</script>
