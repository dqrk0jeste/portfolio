<script setup lang="ts">
  const props = defineProps({
    entries: Array<{ name: string, icon: string}>
  })
</script>

<template>
  <div class="flex justify-around gap-x-2 md:gap-x-5 gap-y-2 flex-wrap items-center h-[100px] lg:h-[150px] px-5 md:px-10 rounded-full text-white bg-white/5 shadow-sm shadow-white transition-all duration-300 hover:shadow-md hover:shadow-white">
    <div v-for="entry in props.entries" :key="entry.name" v-html="entry.icon"></div>
  </div>
</template>