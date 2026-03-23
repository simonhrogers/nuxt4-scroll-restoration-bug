<script setup>
definePageMeta({
  layout: 'default',
})

// Apply a fixed body class via head.
// This is the minimal hook used to reproduce:
// page transitions applying the body class too soon.
useHead({
  bodyAttrs: {
    class: 'fixed-body',
  },
})
</script>

<template>
  <div>
    <h2>Fixed Body Class Page</h2>
    <p>
      This page sets <code>document.body</code> to class <code>fixed-body</code> via
      <code>useHead()</code>.
    </p>
    <p>
      Use the nav to switch pages. Watch the console for <code>[BodyClass]</code> logs.
    </p>

    <div v-for="i in 60" :key="i" class="spacer">
      <p>Section {{ i }}</p>
      <p>This content is here to match the other reproduction pages.</p>
    </div>
  </div>
</template>

<style scoped>
.spacer {
  min-height: 160px;
  padding: 2rem;
  margin: 1rem 0;
  background: #f3f7ff;
  border-left: 4px solid #3f6bff;
}
</style>

