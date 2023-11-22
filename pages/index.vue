<script setup lang="ts">

  let allowedScroll = true
  const numberOfPages = 2

  let touchstart = 0
  let touchend = 0

  const count = useState('scroll-count', () => 0)

  watch(count, () => {
    document.body.style.transform = `translateY(-${count.value * 100}vh)`
  })

  function swipedUp() {
    const diff = touchend - touchstart
    return diff < - window.innerHeight / 10
  }

  function swipedDown() {
    const diff = touchend - touchstart
    return diff > window.innerHeight / 10
  }

  onMounted(() => {
    document.onwheel = (e: any) : void => {
      if(!allowedScroll) return
      if(e.wheelDeltaY < 0) {
        if(count.value === numberOfPages - 1) return
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
      } else if(swipedUp() && count.value !== numberOfPages - 1) {
        count.value++
      }
    }
  })
</script>


<template>
    <Landing />
    <About />
</template>
