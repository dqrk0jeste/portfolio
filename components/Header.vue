<script setup lang="ts">
  const open : Ref<boolean> = useState('nav-open', () => false)
</script>

<template>
  <div class="fixed top-0 right-0 text-white z-[100]">
    <button @click="open = !open" class="flex items-center justify-center m-2">
      <i v-if="open" class='bx bx-x bx-lg text-red-700'></i>
      <i v-else class='bx bx-menu bx-lg'></i>
    </button>
  </div>
</template>