<script setup>
  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Darko Nikolic | Portfolio',
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    charset: "utf-8",
    meta: [
      { name: "description", content: "Personal portofolio of Darko Nikolic, a software developer." }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' }
    ]
  })
</script>

<template>
  <div>
    <Header />
    <NuxtPage />
    <!-- <Footer /> -->
  </div>
</template>
