<template>
  <div class="my-10">
    <div>
      <div class="flex flex-wrap justify-start sm:flex-row w-full -mx-4 ">

        <!-- Languages -->
        <div v-for="(lang, index) in languages" :key="index" class="flex justify-between items-center flex-col px-4 mb-5 sm:mb-0 flex-shrink-0 w-1/4 sm:w-1/6 lg:w-1/10">
          <div class="w-full cursor-pointer">
            <img :src="lang.src" :class="[index === 0 ? 'scale-110 -translate-y-1 hover:scale-100' : 'grayscale']" class="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 w-full hover:grayscale-0"  alt=""/>
          </div>
          <p class="mt-3 text-xs sm:text-sm lowercase capitalize font-sf">{{lang.name}}</p>
        </div>


        <!-- Frameworks -->
        <div v-for="(framework, index) in frameworks" :key="index" class="flex justify-between items-center px-4 mb-5 sm:mb-0 flex-col flex-shrink-0 w-1/4 sm:w-1/6 lg:w-1/10">
          <div class="w-full cursor-pointer">
            <img :src="framework.src" class="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 w-full grayscale hover:grayscale-0"  alt=""/>
          </div>
          <p class="mt-3 text-xs sm:text-sm capitalize font-sf">{{framework.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  import {defineProps} from "vue"

  defineProps({
    languages: {
      type: Array,
      default: () => {}
    },

    frameworks: {
      type: Array,
      default: () => {}
    }
  })
</script>
