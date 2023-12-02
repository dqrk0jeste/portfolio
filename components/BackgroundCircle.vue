<script setup lang="ts">
  import { type Page } from '../types'
  const pages: Ref<Page[]> = useState('pages')
  const count: Ref<number> = useState('scroll-count')
  const color: Ref<string> = useState('circle-color', () => pages.value[0]?.circle?.color || 'bg-blue-400')
  const position: Ref<{ top: string, left: string}> = useState('circle-position', () => pages.value[0]?.circle?.position || { top: '0', left: '90%'})
  const text: Ref<string | null> = useState('circle-text', () => pages.value[0]?.circle?.text || null)
  const size: Ref<string> = useState('circle-size', () => pages.value[0]?.circle?.size || '50%')

  watch(count, () => {
    color.value = pages.value[count.value]?.circle?.color || 'bg-blue-400'
    position.value = pages.value[count.value]?.circle?.position || { top: '0', left: '0'}
    size.value = pages.value[count.value]?.circle?.size || '50%'
    text.value = pages.value[count.value]?.circle?.text || null
  })
</script>

<template>
  <div class="hidden lg:flex items-center justify-center fixed -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full transition-all duration-1000 text-6xl text-white z-[2]"
  :class="color"
  :style="
  `top: ${ position.top };
  left: ${ position.left };
  width: ${ size };`">
    {{ text }}
  </div>
</template>