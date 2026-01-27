<template>
  <div>
    <h2>Page B (Default Layout)</h2>
    <p>This page also uses the default layout.</p>
    <p>Scroll restoration should work when navigating between pages with the same layout.</p>
    <div v-for="i in 50" :key="i" class="spacer">
      <p>Section {{ i }}</p>
      <p>Scroll down, then navigate back to home or to Page A.</p>
    </div>
    <div class="test-marker" id="test-marker">
      <h3>Test Marker - Scroll to here</h3>
      <p>After scrolling here, navigate back to home or to Page A (same layout) - scroll should be restored.</p>
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
  background: #f9f9f9;
  border-left: 4px solid #dc3545;
}

.test-marker {
  min-height: 300px;
  padding: 2rem;
  margin: 2rem 0;
  background: #f8d7da;
  border: 4px solid #dc3545;
  border-radius: 8px;
}

h2 {
  color: #dc3545;
  margin-bottom: 1rem;
}

h3 {
  color: #721c24;
  margin-bottom: 1rem;
}
</style>
