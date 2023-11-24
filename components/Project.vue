<script setup lang="ts">
  import { type Page } from '../types'

  const props = defineProps({
    color: String,
    title: String,
    desc: String,
    image: String,
    skills: Array<string>,
    sourceLink: String,
    visitLink: String
  })

  const pages : Ref<Page[]> = useState('pages')
  if(process.server) {
    pages.value.push({
      color: props.color || 'white'
    })
  }

</script>

<template>
  <div class="w-screen h-[100dvh] text-white flex flex-col gap-10 items-center justify-center p-5 lg:p-20">
    <div class="flex flex-col gap-5 items-center p-5 max-w-[1400px] lg:flex-row">
      <div class="flex-1">
        <a :href="props.visitLink" target="_blank">
          <img :src="props.image" alt="project image" class="w-full rounded-xl">
        </a>
        <div class="flex flex-row justify-evenly w-full mt-5 lg:mt-10">
          <a :href="props.sourceLink" target="_blank">
            <button class="px-10 py-3 border-solid border-white border-2 rounded-xl flex items-center justify-center  transition-colors hover:bg-white/10">
              <i class='bx bxl-github text-2xl'></i>
            </button>
          </a>
          <a :href="props.visitLink" target="_blank">
            <button class="px-10 py-3 border-solid border-white border-2 rounded-xl flex items-center justify-center  transition-colors hover:bg-white/10">
              <i class='bx bx-link-external text-2xl'></i>
            </button>
          </a>
        </div>
      </div>
      <div class="flex-1 flex flex-col gap-5 w-full justify-evenly items-center h-full">
        <h2 class="text-4xl text-yellow-300 font-bold text-center">{{ props.title }}</h2>
        <p class="text-center text-lg">{{ props.desc }}</p>
        <div class="flex flex-row flex-wrap gap-x-3 gap-y-2 items-center justify-center">
          <div v-for="skill in props.skills" :key="skill" class="px-5 py-2 border-solid border-white border-2 rounded-full transition-colors hover:bg-white/5">{{ skill }}</div>
        </div>
        
      </div>
    </div>
  </div>
</template>