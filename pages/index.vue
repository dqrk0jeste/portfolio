<script setup lang="ts">

  let allowedScroll = true
  const numberOfPages = 2

  const count = useState('scroll-count', () => 0)

  watch(count, () => {
    document.body.style.transform = `translateY(-${count.value * 100}vh)`
  })

  onMounted(() => {
    document.onwheel = (e: any) => {
      if(!allowedScroll) return
      if(e.wheelDeltaY < 0) {
        if(count.value === numberOfPages - 1) return
        count.value++
      } else {
        if(count.value === 0) return
        count.value--
      }
      console.log(count.value)
      allowedScroll = false
      setTimeout(() => {
        allowedScroll = true
      }, 300)
    }
  })
</script>


<template>
    <Landing />
    <Summary />
    <About />
</template>
