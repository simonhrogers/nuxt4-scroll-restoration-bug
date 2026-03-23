<template>
  <div class="layout-default">
    <nav>
      <NuxtLink to="/">Home (Default Layout)</NuxtLink>
      <NuxtLink to="/page-a">Page A (Default Layout)</NuxtLink>
      <NuxtLink to="/page-b">Page B (Default Layout)</NuxtLink>
      <NuxtLink to="/fixed-body">Fixed Body Class Page</NuxtLink>
      <NuxtLink to="/alt">Alt Layout Page</NuxtLink>
    </nav>
    <main>
      <h1>Default Layout</h1>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout-default {
  min-height: 100vh;
  padding: 2rem;
}

nav {
  position: fixed;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 8px;
  z-index: 1000;
}

nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 4px;
  display: inline-block;
}

nav a:hover {
  background: #e0e0e0;
}

main {
  max-width: 800px;
  margin: 0 auto;
}
</style>
