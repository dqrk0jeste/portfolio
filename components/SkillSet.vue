<script setup lang="ts">
  const props = defineProps({
    groupName: String,
    entries: Array<{ name: string, icon: string}>
  })
</script>

<template>
  <div class="max-w-[800px] mx-auto">
    <h3 class="text-3xl text-white ml-3 mb-3">{{ props.groupName }}</h3>
    <div class="text-white grid grid-cols-2 lg:grid-cols-3">
      <div v-for="entry in props.entries" :key="entry.name" class="flex items-center">
        <div v-html="entry.icon"></div>
        <p>{{ entry.name }}</p>
      </div>
    </div>
  </div>
</template>
