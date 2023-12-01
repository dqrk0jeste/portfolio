<script setup lang="ts">
  import { type Page } from '../types'
  const pages : Ref<Page[]> = useState('pages')
  if(process.server) {
    pages.value.push({
      color: 'bg-blue-300',
      circle: {
        color: 'bg-blue-400',
        position: {
          top: '0',
          left: '90%'
        },
        size: '50%'
      }
    })
  }

  const landingText: Ref<string> = useState('landing-text', () => '')
  const wholeLandingText = 'SOFTWARE DEVELOPER'

  onMounted(() => {
    const interval = setInterval(() => {
      if(landingText.value.length === wholeLandingText.length) {
        clearInterval(interval)
        return
      }
      landingText.value += wholeLandingText.charAt(landingText.value.length)
    }, 75)
  })
</script>

<template>
  <section id="landing" class="relative flex flex-col justify-center w-full h-[100dvh] md:pl-10 xm:pl-20">
    <div class="absolute top-3 right-3 flex justify-center gap-5">
      <a href="https://github.com/dqrk0jeste" target="_blank"><button class="p-2 md:p-3 text-black border-solid border-black border-2 rounded-2xl flex items-center justify-center  hover:bg-white/10"><i class='bx bxl-github bx-md'></i></button></a>
      <a href="https://www.linkedin.com/in/darko-nikolic-99816b296/" target="_blank"><button class="p-2 md:p-3 text-black border-solid border-black border-2 rounded-2xl flex items-center justify-center  hover:bg-white/10"><i class='bx bxl-linkedin bx-md'></i></button></a>
      <a href="mailto:darkonikoloc@gmail.com" target="_blank"><button class="p-2 md:p-3 text-black border-solid border-black border-2 rounded-2xl flex items-center justify-center hover:bg-white/10"><i class='bx bx-envelope bx-md'></i></button></a>
    </div>
    <div class="text-center w-full border-solid border-black md:pl-10 xm:pl-20 md:text-left md:border-l-4">
      <p class="title font-bold whitespace-nowrap text-3xl sm:text-4xl md:text-5xl xm:text-6xl lg:text-8xl xl:text-9xl">DARKO NIKOLIC</p>
      <p class="title font-bold whitespace-nowrap text-2xl sm:text-3xl md:text-4xl xm:text-5xl lg:text-7xl xl:text-8xl">{{ landingText }}<span v-if="landingText.length !== wholeLandingText.length">_</span></p>
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