<script setup lang="ts">
  import { type Page } from '../types'

  const pages : Ref<Page[]> = useState('pages')
  if(process.server) {
    pages.value.push({
      dontShift: true
    })
  }

  const selectedSkill: Ref<number> = useState('selected-skill', () => 1)
  const direction: Ref<number> = useState('direction', () => -2)

  const skills = {
    backend: [
      {
        name: 'Node.js',
        icon: "/icons/node.png"
      },
      {
        name: 'Nuxt',
        icon: "/icons/nuxt.png"
      },
      {
        name: 'Java',
        icon: "/icons/java.png"
      },
      {
        name: 'C',
        icon: "/icons/c.png"
      }
    ],
    database: [
      {
        name: 'MongoDB',
        icon: "/icons/mongo.png"
      },
      {
        name: 'PostgreSQL',
        icon: "/icons/postgre.png"
      }
    ],
    frontend: [
      {
        name: 'HTML',
        icon: "/icons/html.png"
      },
      {
        name: 'CSS',
        icon:"/icons/css.png"
      },
      {
        name: 'JavaScript',
        icon: "/icons/javascript.png"
      },
      {
        name: 'TypeScript',
        icon: "/icons/typescript.png"
      },
      {
        name: 'Vue.js',
        icon: "/icons/vue.png"
      },
      {
        name: 'TailwindCSS',
        icon: "/icons/tailwind.png"
      },
    ]
  }

  watch(selectedSkill, (to, from) => {
    direction.value = to - from
  })
</script>

<template>
  <div class="custom-gradient w-100% h-[100dvh]">
    <h2 class="text-center text-6xl font-bold text-white py-5 md:py-10">MY STACK</h2>
    <div class="w-full flex justify-center items-center text-white text-3xl">
      <h3 class="px-5 border-solid border-pink-400 transition-[padding] duration-300 cursor-pointer" :class="selectedSkill === 1 ? 'border-b-2 pb-3' : ''" @click="selectedSkill = 1">Backend</h3>
      <h3 class="px-5 border-solid border-pink-400 transition-[padding] duration-300 cursor-pointer" :class="selectedSkill === 2 ? 'border-b-2 pb-3' : ''" @click="selectedSkill = 2">Databases</h3>
      <h3 class="px-5 border-solid border-pink-400 transition-[padding] duration-300 cursor-pointer" :class="selectedSkill === 3 ? 'border-b-2 pb-3' : ''" @click="selectedSkill = 3">Frontend</h3>
    </div>
    <div>
      <Transition :name="direction < 0 ? 'appearFromRight' : 'appearFromLeft'" mode="out-in">
        <SkillSet key="backend" v-if="selectedSkill === 1" :entries="skills.backend"/>
        <SkillSet key="databases" v-else-if="selectedSkill === 2" :entries="skills.database"/>
        <SkillSet key="frontend" v-else :entries="skills.frontend"/>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
  .custom-gradient {
    background: linear-gradient(179.4deg, rgb(12, 20, 69) -16.9%, rgb(71, 30, 84) 119.9%);
  }

  .appearFromRight-enter-active,
  .appearFromRight-leave-active {
    transition: all 0.3s;
}

  .appearFromRight-enter-from {
    opacity: 0;
    transform: translate(-50%);
  }

  .appearFromRight-enter-to {
    opacity: 1;
    transform: translate(0);
  }

  .appearFromRight-leave-from {
      opacity: 1;
      transform: translate(0);
  }

  .appearFromRight-leave-to {
      opacity: 0;
      transform: translate(50%);
  }

  
  .appearFromLeft-enter-active,
  .appearFromLeft-leave-active {
    transition: all 0.3s;
}

  .appearFromLeft-enter-from {
    opacity: 0;
    transform: translate(50%);
  }

  .appearFromLeft-enter-to {
    opacity: 1;
    transform: translate(0);
  }

  .appearFromLeft-leave-from {
      opacity: 1;
      transform: translate(0);
  }

  .appearFromLeft-leave-to {
      opacity: 0;
      transform: translate(-50%);
  }
</style>