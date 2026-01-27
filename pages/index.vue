<template>
  <div>
    <h2>Home Page (Default Layout)</h2>
    <p>Scroll down on this page, then navigate to another page with the same layout (Page A or Page B).</p>
    <p>The scroll position should be restored when you come back.</p>
    <div v-for="i in 50" :key="i" class="spacer">
      <p>Section {{ i }}</p>
      <p>This is content to make the page scrollable. Scroll down to section 30 or 40, then navigate away and come back.</p>
    </div>
    <div class="test-marker" id="test-marker">
      <h3>Test Marker - Scroll to here (around section 30-40)</h3>
      <p>After scrolling to this section, navigate to Page A or Page B (same layout) - scroll should be restored.</p>
      <p>Then navigate to Alt Layout page - scroll will be reset to 0 (BUG).</p>
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
  border-left: 4px solid #007bff;
}

.test-marker {
  min-height: 300px;
  padding: 2rem;
  margin: 2rem 0;
  background: #fff3cd;
  border: 4px solid #ffc107;
  border-radius: 8px;
}

h2 {
  color: #007bff;
  margin-bottom: 1rem;
}

h3 {
  color: #856404;
  margin-bottom: 1rem;
}
</style>
