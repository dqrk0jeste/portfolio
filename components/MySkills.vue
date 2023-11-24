<script setup lang="ts">
  import { type Page } from '../types'

  const pages : Ref<Page[]> = useState('pages')
  pages.value.push({
    color: 'bg-violet-800'
  })

  const skills = [
    'Node.js',
    'Express',
    'Nuxt',
    'Vue.js',
    'Git',
    'TailwindCSS',
    'SQL',
    'MongoDB',
    'C',
    'Java'
  ]
</script>

<template>
  <div class="w-screen h-[100dvh]">
    <div class="w-fit p-5 aspect-square bg-yellow-300 rounded-full flex justify-center items-center">
      <span class="font-bold whitespace-nowrap text-lg md:text-xl lg:text-2xl">MY SKILLS</span>
    </div>
  </div>
</template>