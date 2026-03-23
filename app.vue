<script setup>
// Enable scroll debugging (optional - uncomment to see scroll position logs in console)
// useScrollDebug()

const route = useRoute()

if (process.client) {
  onMounted(() => {
    const body = document.body
    const start = performance.now()
    let lastClass = body.className

    const observer = new MutationObserver(() => {
      if (body.className === lastClass) return
      lastClass = body.className
      // Logs help correlate "too soon" body class changes with page transitions.
      console.log(
        `[BodyClass] changed after ${Math.round(performance.now() - start)}ms: "${body.className}" route="${route.fullPath}"`
      )
    })

    observer.observe(body, {
      attributes: true,
      attributeFilter: ['class'],
    })

    onBeforeUnmount(() => observer.disconnect())
  })
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
