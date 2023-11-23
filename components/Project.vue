<script setup lang="ts">
  import { type Page } from '../types'

  const props = defineProps({
    skills: Array<string>
  })

  const pages : Ref<Page[]> = useState('pages')
  if(process.server) {
    pages.value.push({
      color: 'bg-slate-900'
    })
  }
</script>

box-shadow: 4px 4px 0 black;

<template>
  <div class="w-screen h-screen text-white flex flex-col gap-10 items-center justify-center p-5 lg:p-20">
    <div class="flex flex-col gap-5 items-center p-5 max-w-[1400px] lg:flex-row">
      <img src="../assets/images/privatni-casovi-img.jpg" alt="project image" class="w-full rounded-xl border-solid border-black border-0 shadow-[10px,10px,0,white] lg:w-1/2">
      <div class="flex flex-col gap-5 w-full justify-evenly items-center h-full">
          <h2 class="text-4xl text-yellow-300 font-bold text-center">PRIVATE TUTORING</h2>
          <div class="flex flex-row flex-wrap gap-x-3 gap-y-2">
            <div v-for="skill in props.skills" :key="skill" class="px-5 py-2 border-solid border-white border-2 rounded-full transition-colors hover:bg-white/5">{{ skill }}</div>
        </div>
        <div class="flex flex-row justify-evenly w-full">
          <button class="px-10 py-3 border-solid border-white border-2 rounded-xl flex items-center justify-center  transition-colors hover:bg-white/5">
            <i class='bx bx-link-external text-2xl'></i>
          </button>
          <button class="px-10 py-3 border-solid border-white border-2 rounded-xl flex items-center justify-center  transition-colors hover:bg-white/5">
            <i class='bx bxl-github text-2xl'></i>
          </button>
        </div>
      </div>
    </div>
    <p class="max-w-[1400px] text-center lg:text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sunt fuga in veritatis nesciunt excepturi. Aliquid necessitatibus voluptatem sint laborum, amet commodi aut placeat deserunt, itaque sapiente fugit, quos hic optio quia maxime repudiandae dolorem tempore nemo ad unde molestiae!</p>
  </div>
</template>