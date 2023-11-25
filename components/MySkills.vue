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
        icon: "<i class='bx bxl-nodejs bx-lg relative group'><div class='absolute -top-6 -right-8 text-sm text-black p-1 bg-white rounded-lg opacity-0 transition-all duration-200 group-hover:opacity-100'>Node.js</div></i>"
      },
      {
        name: 'express',
        icon: `
          <div class="relative group">
            <svg class="w-[48px] h-[48px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="white" d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"></path><path fill="white" d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"></path></svg>
            <div class='absolute -top-6 -right-8 text-sm text-black p-1 bg-white rounded-lg opacity-0 transition-all duration-200 group-hover:opacity-100'>Express</div>
          </div>
        `
      },
      {
        name: 'Nuxt',
        icon: `
          <div class="relative group">
            <svg class="w-[48px] h-[48px]" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 92.73"><defs><style>.cls-1{fill:white}.cls-2{fill:white}.cls-3{fill:white;}</style></defs><title>nuxt-js</title><path class="cls-1" d="M70.15,25.38,65.94,32.8,51.53,7.42,7.29,85.31h30a7.36,7.36,0,0,0,7.3,7.42H7.29A7.26,7.26,0,0,1,1,89,7.5,7.5,0,0,1,1,81.6L45.21,3.71a7.24,7.24,0,0,1,12.64,0l12.3,21.67Z"/><path class="cls-2" d="M102.08,81.6,74.37,32.8l-4.22-7.42L65.94,32.8,38.22,81.6a7.55,7.55,0,0,0,0,7.42,7.27,7.27,0,0,0,6.32,3.71H95.76A7.27,7.27,0,0,0,102.08,89a7.55,7.55,0,0,0,0-7.42ZM44.54,85.31l25.61-45.1,25.61,45.1Z"/><path class="cls-3" d="M121.9,89a7.26,7.26,0,0,1-6.31,3.71H95.76a7.35,7.35,0,0,0,7.29-7.42h12.52L80.06,22.77l-5.69,10-4.22-7.42,3.59-6.32a7.24,7.24,0,0,1,12.64,0L121.9,81.6a7.5,7.5,0,0,1,0,7.42Z"/></svg>
            <div class='absolute -top-6 -right-4 text-sm text-black p-1 bg-white rounded-lg opacity-0 transition-all duration-200 group-hover:opacity-100'>Nuxt</div>
          </div>
        `
      },
      {
        name: 'Java',
        icon: "<i class='bx bxl-java bx-lg relative group'><div class='absolute -top-6 -right-6 text-sm text-black p-1 bg-white rounded-lg opacity-0 transition-all duration-200 group-hover:opacity-100'>Java</div></i>"
      },
      {
        name: 'C',
        icon: "<i class='bx bxs-copyright bx-lg relative group'><div class='absolute -top-6 right-0 text-sm text-black p-1 bg-white rounded-lg opacity-0 transition-all duration-200 group-hover:opacity-100'>C</div></i>"
      }
    ],
    database: [
      {
        name: 'MongoDB',
        icon: "<i class='bx bxl-mongodb bx-lg relative group'><div class='absolute -top-6 -right-12 text-sm text-black p-1 bg-white rounded-lg opacity-0 transition-all duration-200 group-hover:opacity-100'>MongoDB</div></i>"
      },
      {
        name: 'SQL',
        icon: "<i class='bx bxl-postgresql bx-lg relative group'><div class='absolute -top-6 -right-8 text-sm text-black p-1 bg-white rounded-lg opacity-0 transition-all duration-200 group-hover:opacity-100'>SQL</div></i>"
      }
    ],
    frontend: [
      {
        name: 'HTML',
        icon: "<i class='bx bxl-html5 bx-lg relative group'><div class='absolute -top-6 -right-8 text-sm text-black p-1 bg-white rounded-lg opacity-0 transition-all duration-200 group-hover:opacity-100'>HTML</div></i>"
      },
      {
        name: 'CSS',
        icon: "<i class='bx bxl-css3 bx-lg relative group'><div class='absolute -top-6 -right-5 text-sm text-black p-1 bg-white rounded-lg opacity-0 transition-all duration-200 group-hover:opacity-100'>CSS</div></i>"
      },
      {
        name: 'JavaScript',
        icon: "<i class='bx bxl-javascript bx-lg relative group'><div class='absolute -top-6 -right-16 text-sm text-black p-1 bg-white rounded-lg opacity-0 transition-all duration-200 group-hover:opacity-100'>JavaScript</div></i>"
      },
      {
        name: 'Vue.js',
        icon: "<i class='bx bxl-vuejs bx-lg relative group'><div class='absolute -top-6 -right-8 text-sm text-black p-1 bg-white rounded-lg opacity-0 transition-all duration-200 group-hover:opacity-100'>Vue.js</div></i>"
      },
      {
        name: 'TailwindCSS',
        icon: "<i class='bx bxl-tailwind-css bx-lg relative group'><div class='absolute -top-6 -right-16 text-sm text-black p-1 bg-white rounded-lg opacity-0 transition-all duration-200 group-hover:opacity-100'>TailwindCSS</div></i>"
      },
    ]
  }
</script>

<template>
  <div class="custom-gradient w-screen h-[100dvh] flex flex-col justify-center gap-5 items-center">
    <h2 class="text-center text-6xl font-bold text-white py-10">MY STACK</h2>
    <SkillSet :entries="skills.database" color="bg-blue-500"/>
    <SkillSet :entries="skills.backend" color="bg-red-500"/>
    <SkillSet :entries="skills.frontend" color="bg-yellow-300"/>
  </div>
</template>

<style scoped>
  .custom-gradient {
    background: linear-gradient(179.4deg, rgb(12, 20, 69) -16.9%, rgb(71, 30, 84) 119.9%);
  }
</style>