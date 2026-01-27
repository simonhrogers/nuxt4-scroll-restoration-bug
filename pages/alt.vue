<script setup>
definePageMeta({
  layout: 'alt'
})
</script>

<template>
  <div>
    <h2>Alt Layout Page</h2>
    <p class="warning">⚠️ This page uses a DIFFERENT layout (alt layout).</p>
    <p>When navigating from a page with the default layout to this page, the scroll position gets reset to 0.</p>
    <p>This is the bug - scroll should be restored even when changing layouts.</p>
    <div v-for="i in 50" :key="i" class="spacer">
      <p>Section {{ i }}</p>
      <p>Scroll down on the home page, then navigate here. Notice the scroll is reset to 0.</p>
    </div>
    <div class="test-marker" id="test-marker">
      <h3>🐛 BUG REPRODUCTION</h3>
      <p><strong>Steps to reproduce:</strong></p>
      <ol>
        <li>Go to home page (default layout)</li>
        <li>Scroll down to section 30-40</li>
        <li>Navigate to Page A or Page B (same layout) - scroll is restored ✅</li>
        <li>Navigate back to home - scroll is restored ✅</li>
        <li>Scroll down again to section 30-40</li>
        <li>Navigate to this page (alt layout) - scroll resets to 0 ❌</li>
      </ol>
      <p><strong>Expected:</strong> Scroll position should be restored even when changing layouts.</p>
      <p><strong>Actual:</strong> Scroll position is reset to 0 when changing layouts.</p>
    </div>
    <div v-for="i in 20" :key="i + 50" class="spacer">
      <p>Section {{ i + 50 }}</p>
    </div>
  </div>
</template>

<style scoped>
.spacer {
  min-height: 200px;
  padding: 2rem;
  margin: 1rem 0;
  background: #fff5e6;
  border-left: 4px solid #ff9800;
}

.test-marker {
  min-height: 400px;
  padding: 2rem;
  margin: 2rem 0;
  background: #ffe6e6;
  border: 4px solid #f44336;
  border-radius: 8px;
}

.warning {
  background: #fff3cd;
  padding: 1rem;
  border-radius: 4px;
  border-left: 4px solid #ffc107;
  font-weight: bold;
}

h2 {
  color: #ff9800;
  margin-bottom: 1rem;
}

h3 {
  color: #c62828;
  margin-bottom: 1rem;
}

ol {
  text-align: left;
  max-width: 600px;
  margin: 1rem auto;
}

ol li {
  margin: 0.5rem 0;
}
</style>
