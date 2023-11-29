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

  watch(count, (): void => {
    if(pages.value[count.value].dontShift) return
    currentColor.value = pages.value[count.value].color || 'white'
  })
</script>


<template>
  <div id="background" class="transition-colors duration-700" :class="currentColor">
    <BackgroundCircle />
    <div class="transition-all duration-700" :style="`transform: translateY(-${ pages[count]?.dontShift ? (count - 1) * 100 : count * 100 }dvh)`">
      <Landing />
      <About />
      <section id="projects">
        <Project
          color="bg-blue-900"
          title="PRIVATE LESSONS"
          desc="Website I have made for personal business I am doing with some of my friends. It's written in Serbian. On the other end, I have made a dashboard for my friends and myself where we can view and manage the aplications."
          image="/images/privatni-casovi-img.jpg"
          :skills="['Nuxt', 'Vue.js', 'PostgreSQL', 'TailwindCSS', 'Vercel', 'SEO']"
          sourceLink="https://github.com/dqrk0jeste/privatni-casovi"
          visitLink="https://privatni-casovi.vercel.app"
        />
        <Project
          color="bg-blue-700"
          title="CUBE W/ FRIENDS"
          desc="Full-stack web aplication that makes solving Rubik's cubes with your friends easy. You can set up a room in just a few clicks and start solving. Rooms are round-based, everyone solves on the same scrambles and all the updates are in real-time!"
          image="/images/cube-w-friends-img.jpg"
          :skills="['Node.js', 'Express', 'Web Sockets', 'Socket.io', 'MongoDB']"
          sourceLink="https://github.com/dqrk0jeste/cube-w-friends"
          visitLink="https://cube-w-friends.onrender.com"
        />
        <Project
        color="bg-black"
        title="BLOG."
        desc="Website where anyone can start their own blog. I never really finished it as I didn't really like the idea. It mainly served two purposes - 1) to look pretty and 2) for me to learn Vue.js."
        image="/images/blog-img.jpg"
        :skills="['Vue.js', 'Node.js', 'Express', 'MongoDB', 'Design']"
        sourceLink="https://github.com/dqrk0jeste/blog"
        visitLink="https://dqrk0jeste.github.io/blog"
      />
      </section>
      <div class="transition-all duration-700" :style="`transform: translateY(-${pages[count]?.dontShift ? 100 : 0}dvh)`">
        <MySkills />
        <Footer />
      </div>
    </div>
  </div>
</template>
