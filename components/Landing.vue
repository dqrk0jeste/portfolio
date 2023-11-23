<script setup lang="ts">
  import { type Page } from '../types'
  const pages : Ref<Page[]> = useState('pages')
  if(process.server) {
    pages.value.push({
      color: 'bg-blue-300'
    })
  }
</script>

<template>
  <section id="landing" class="relative flex flex-col justify-center w-full h-screen md:pl-10 xm:pl-20">
    <div class="text-center w-full border-solid border-black md:pl-10 xm:pl-20 md:text-left md:border-l-4">
      <p class="title font-bold whitespace-nowrap text-3xl sm:text-4xl md:text-5xl xm:text-6xl lg:text-8xl xl:text-9xl">DARKO NIKOLIC</p>
      <p class="title font-bold whitespace-nowrap text-2xl sm:text-3xl md:text-4xl xm:text-5xl lg:text-7xl xl:text-8xl">SOFTWARE DEVELOPER</p>
    </div>
    <div class="hidden w-1 h-1/2 absolute left:20 top-1/2 bg-black md:block">
      <div class="absolute top-3/4 -left-8 rotate-90 text-xl flex items-center">
        <i class='bx bx-chevron-left font-bold'></i>
        <span class="font-bold">SCROLL</span>
        <i class='bx bx-chevron-right font-bold'></i>
      </div>
    </div>
    <p class="absolute bottom-0 left-1/2 translate-x-[-50%] font-bold text-lg md:hidden">SWIPE</p>
  </section>
</template>