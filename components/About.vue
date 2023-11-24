<script setup lang="ts">
  import { type Page } from '../types'
  const pages : Ref<Page[]> = useState('pages')
  if(process.server) {
    pages.value.push({
      color: 'bg-slate-900'
    })
  }
</script>

<template>
  <section id="about" class="w-screen h-[100dvh] flex flex-col gap-10 items-center justify-center p-5 md:p-20">
    <div class="h-[30vh] aspect-square bg-white rounded-full"></div>
    <h1 class="text-xl text-white font-bold text-center max-w-[1400px] md:text-2xl xm:text-3xl lg:text-5xl">MY NAME IS DARKO NIKOLIC AND I AM A SOFTWARE DEVELOPER CURRENTLY FOCUSED ON FULL-STACK WEB DEVELOPMENT.</h1>
    <p class="text-md text-white text-center xm:text-lg lg:text-2xl">CONTINUE SCROLLING TO SEE MY JOURNEY SO FAR</p>
  </section>
</template>