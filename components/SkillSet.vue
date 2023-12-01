<script setup lang="ts">
  const props = defineProps({
    groupName: String,
    entries: Array<{ name: string, icon: string}>
  })
</script>

<template>
  <div class="max-w-[800px] mx-auto p-5 my-5">
    <div class="text-white text-xl flex justify-center">
      <div>
        <div v-for="entry in props.entries" :key="entry.name" class="flex items-center gap-2 w-fit mb-3">
          <img :src="entry.icon" alt="icon" class="w-16">
          <p>{{ entry.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
