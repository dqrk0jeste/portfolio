<script setup lang="ts">
  const props = defineProps({
    entries: Array<{ name: string, icon: string}>
  })
</script>

<template>
  <div class="flex gap-x-10 gap-y-2 flex-wrap justify-center items-center p-5 lg:p-16 rounded-full border-solid border-white border-0 text-white bg-white/5 shadow-sm shadow-white">
    <div v-for="entry in props.entries" :key="entry.name" v-html="entry.icon"></div>
  </div>
</template>