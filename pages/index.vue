<script setup lang="ts">

  import { type Page } from '../types'

  const pages : Ref<Page[]> = useState('pages', () : Array<Page> => [])
  const count : Ref<number> = useState('scroll-count', () => 0)
  const currentColor: Ref<string> = useState('current-color', () => 'bg-blue-300')

  let allowedScroll = true
  let touchstart = 0
  let touchend = 0

  function swipedUp() : boolean {
    const diff = touchend - touchstart
    return diff < - window.innerHeight / 10
  }

  function swipedDown() : boolean {
    const diff = touchend - touchstart
    return diff > window.innerHeight / 10
  }

  onMounted(() => {
    document.onwheel = (e: any) : void => {
      if(!allowedScroll) return
      if(e.wheelDeltaY < 0) {
        if(count.value === pages.value.length - 1) return
        count.value++
      } else {
        if(count.value === 0) return
        count.value--
      }
      allowedScroll = false
      setTimeout(() => {
        allowedScroll = true
      }, 300)
    }
    document.ontouchstart = (e) : void => {
      touchstart = e.changedTouches[0].screenY
    }
    document.ontouchend = (e) : void => {
      touchend = e.changedTouches[0].screenY
      if(swipedDown() && count.value !== 0) {
        count.value--
      } else if(swipedUp() && count.value !== pages.value.length - 1) {
        count.value++
      }
    }
  })

  watch(count, () => {
    currentColor.value = pages.value[count.value].color
  })
</script>


<template>
  <div id="background" class="transition-color duration-700" :class="currentColor">
    <div class="transition-all duration-700" :style="`transform: translateY(-${count * 100}vh)`">
      <Landing />
      <About />
      <Project 
        :skills="['Nuxt', 'Vue.js', 'PostgreSQL', 'TailwindCSS', 'Vercel', 'SEO']"
      />
    </div>
  </div>
</template>
