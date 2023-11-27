<script setup lang="ts">
  const props = defineProps({
    entries: Array<{ name: string, icon: string}>
  })
</script>

<template>
  <div class="w-full text-white flex justify-around flex-wrap" :style="`max-width: ${ props.entries!.length * 70 }px`">
    <div v-for="entry in props.entries" :key="entry.name" v-html="entry.icon" class="inline-block"></div>
  </div>
</template>
