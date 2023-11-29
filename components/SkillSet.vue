<script setup lang="ts">
  const props = defineProps({
    groupName: String,
    entries: Array<{ name: string, icon: string}>
  })
</script>

<template>
  <div class="max-w-[800px] mx-auto p-5 my-5 border-solid border-white border-2 rounded-[40px]">
    <h3 class="text-3xl text-white ml-3 mb-3">{{ props.groupName }}</h3>
    <div class="text-white grid grid-cols-2 lg:grid-cols-3">
      <div v-for="entry in props.entries" :key="entry.name" class="flex items-center gap-2">
        <img :src="entry.icon" alt="icon">
        <p>{{ entry.name }}</p>
      </div>
    </div>
  </div>
</template>
