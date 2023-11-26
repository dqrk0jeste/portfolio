<script setup lang="ts">
  import { type Page } from '../types'
  const pages : Ref<Page[]> = useState('pages')
  if(process.server) {
    pages.value.push({
      color: 'bg-slate-900'
    })
  }
  
  const image: Ref<HTMLElement> = useState()
  const mainText: Ref<HTMLElement> = useState()
  const secondaryText: Ref<HTMLElement> = useState()

  onMounted(() => {
    const observer = new IntersectionObserver((entries): void => {
      entries.forEach((entry): void => {
        if(entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '100%';
          (entry.target as HTMLElement).style.transform = 'translate(0)'
        } else {
          (entry.target as HTMLElement).style.opacity = '0';
          (entry.target as HTMLElement).style.transform = 'translateX(-50%)'
        }
      })
    })
    observer.observe(image.value)
    observer.observe(mainText.value)
    observer.observe(secondaryText.value)
  })

</script>

<template>
  <section id="about" class="w-screen h-[100dvh] flex flex-col gap-10 items-center justify-center p-5 md:p-20">
    <div ref="image" class="h-[30vh] aspect-square bg-white rounded-full transition-all duration-700"></div>
    <h1 ref="mainText" class="text-xl text-white font-bold text-center max-w-[1400px] md:text-2xl xm:text-3xl lg:text-5xl transition-all duration-700">MY NAME IS DARKO NIKOLIC AND I AM A SOFTWARE DEVELOPER CURRENTLY FOCUSED ON FULL-STACK WEB DEVELOPMENT.</h1>
    <p ref="secondaryText" class="text-md text-white text-center xm:text-lg lg:text-2xl transition-all duration-700">CONTINUE SCROLLING TO SEE MY JOURNEY SO FAR</p>
  </section>
</template>