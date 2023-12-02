<script setup lang="ts">
  import emailjs from '@emailjs/browser'

  import { type Page } from '../types'

  const pages : Ref<Page[]> = useState('pages')
  if(process.server) {
    pages.value.push({
      id: pages.value.length,
    })
  }

  const name: Ref<string> = useState('name')
  const email: Ref<string> = useState('email')
  const message: Ref<string> = useState('message')

  const goodUX = useState('goodUX')
  const sent = useState('sent', () => false)

  function sendEmail() {
    sent.value = true
    emailjs.send('service_7qz0wjj', 'template_hf2747b', {
      name: name.value,
      email: email.value,
      message: message.value
    }, 'L0-NCbualAjZlm8B1')
      .then((result) => {
        name.value = ''
        email.value = ''
        message.value = ''
        goodUX.value = 'Thank you!'
        setTimeout(() => goodUX.value = null , 3000)
        sent.value = false
      }, (error) => {
        goodUX.value = 'There has been an error'
        setTimeout(() => goodUX.value = null , 3000)
        sent.value = false
      })
  }

</script>

<template>
  <footer class="custom-gradient w-screen h-[100dvh] px-5 lg:gap-5 flex items-center justify-center flex-col lg:flex-row">
    <div>
      <h3 class="text-white font-bold text-4xl p-5 max-w-[800px] text-center lg:text-left lg:text-6xl">
        You have reached the end of my portfolio - but let that be a <span class="text-pink-400">new beginning.</span>
      </h3>
      <div class="hidden justify-center gap-5 lg:ml-[10%] lg:justify-normal lg:flex">
        <a href="https://github.com/dqrk0jeste" target="_blank"><button class="p-3 text-white border-solid border-white border-[1px] rounded-2xl flex items-center justify-center  hover:bg-white/10"><i class='bx bxl-github bx-md'></i></button></a>
        <a href="https://www.linkedin.com/in/darko-nikolic-99816b296/" target="_blank"><button class="p-3 text-white border-solid border-white border-[1px] rounded-2xl flex items-center justify-center  hover:bg-white/10"><i class='bx bxl-linkedin bx-md'></i></button></a>
        <a href="mailto:darkonikoloc@gmail.com" target="_blank"><button class="p-3 text-white border-solid border-white border-[1px] rounded-2xl flex items-center justify-center hover:bg-white/10"><i class='bx bx-envelope bx-md'></i></button></a>
      </div>
    </div>
    <form @submit.prevent="sendEmail" class="w-full max-w-[500px] p-5 lg:basis-2/5 flex flex-col gap-5 items-center lg:items-start">
      <h4 class="text-3xl text-white lg:ml-3">Contact me</h4>
      <input v-model="name" name="name" id="name" type="text" placeholder="Your name" class="w-full lg:w-fit px-5 py-3 bg-white/5 border-solid border-white border-[1px] shadow-white rounded-2xl text-white text-md lg:text-lg placeholder:text-gray-200 focus:border-pink-400" required>
      <input v-model="email" name="email" id="email" type="text" placeholder="Your email" class="w-full lg:w-fit px-5 py-3 bg-white/5 border-solid border-white border-[1px] shadow-white rounded-2xl text-white text-md lg:text-lg placeholder:text-gray-200 focus:border-pink-400" required>
      <textarea v-model="message" name="message" id="message" rows="3" placeholder="Your message" class="w-full resize-y h-[3lh] lg:h-[10lh] px-5 py-2 bg-white/5 border-solid border-white border-[1px] shadow-white rounded-2xl text-white text-md lg:text-lg placeholder:text-gray-200 focus:border-pink-400" @wheel.stop="" @touchstart.stop="" @touchend.stop="" required></textarea>
      <div class="flex flex-col items-center gap-2 lg:flex-row">
        <button type="submit" class="px-12 py-3 text-lg lg:text-xl text-white font-bold border-solid border-white border-[1px] rounded-full cursor-pointer transition-colors hover:border-white hover:bg-white hover:text-pink-400">Send</button>
        <p v-if="goodUX" class="text-md text-pink-400 text-center lg:text-left">{{ goodUX }}</p>
        <div v-else-if="sent" class="loadingio-spinner-spinner-n7vj5np4mw9"><div class="ldio-senigg4yhhr">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div>
      </div>
    </form>
  </footer>
</template>

<style scoped>
  .custom-gradient {
    background: linear-gradient(179.4deg, rgb(71, 30, 84) -16.9%, rgb(12, 20, 69) 119.9%);
  }

  input, textarea {
    outline: none;
  }
  
  @keyframes ldio-senigg4yhhr {
    0% { opacity: 1 }
    100% { opacity: 0 }
  }
  .ldio-senigg4yhhr div {
    left: 47px;
    top: 24px;
    position: absolute;
    animation: ldio-senigg4yhhr linear 1s infinite;
    background: #fff;
    width: 6px;
    height: 12px;
    border-radius: 3px / 6px;
    transform-origin: 3px 26px;
  }.ldio-senigg4yhhr div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.9166666666666666s;
    background: #fff;
  }.ldio-senigg4yhhr div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -0.8333333333333334s;
    background: #fff;
  }.ldio-senigg4yhhr div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.75s;
    background: #fff;
  }.ldio-senigg4yhhr div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.6666666666666666s;
    background: #fff;
  }.ldio-senigg4yhhr div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.5833333333333334s;
    background: #fff;
  }.ldio-senigg4yhhr div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.5s;
    background: #fff;
  }.ldio-senigg4yhhr div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.4166666666666667s;
    background: #fff;
  }.ldio-senigg4yhhr div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.3333333333333333s;
    background: #fff;
  }.ldio-senigg4yhhr div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.25s;
    background: #fff;
  }.ldio-senigg4yhhr div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.16666666666666666s;
    background: #fff;
  }.ldio-senigg4yhhr div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.08333333333333333s;
    background: #fff;
  }.ldio-senigg4yhhr div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
    background: #fff;
  }
  .loadingio-spinner-spinner-n7vj5np4mw9 {
    width: 51px;
    height: 51px;
    display: inline-block;
    overflow: hidden;
    background: transparent;
  }
  .ldio-senigg4yhhr {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.51);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .ldio-senigg4yhhr div { box-sizing: content-box; }
</style>