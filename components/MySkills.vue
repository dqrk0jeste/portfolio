<script setup lang="ts">
  import { type Page } from '../types'

  const pages : Ref<Page[]> = useState('pages')
  if(process.server) {
    pages.value.push({
      dontShift: true
    })
  }

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
</script>

<template>
  <div class="custom-gradient w-100% h-[100dvh] flex flex-col px-5 justify-center">
    <h2 class="text-center text-6xl font-bold text-white py-5 md:py-10">MY STACK</h2>
    <div>
      <SkillSet groupName="BACKEND" :entries="skills.backend"/>
      <SkillSet groupName="DATABASES" :entries="skills.database"/>
      <SkillSet groupName="FRONTEND" :entries="skills.frontend"/>
    </div>
  </div>
</template>

<style scoped>
  .custom-gradient {
    background: linear-gradient(179.4deg, rgb(12, 20, 69) -16.9%, rgb(71, 30, 84) 119.9%);
  }
</style>