// Debug composable to track scroll position
export const useScrollDebug = () => {
  if (process.client) {
    const route = useRoute()
    
    onMounted(() => {
      console.log(`[Scroll Debug] Page mounted: ${route.path}`)
      console.log(`[Scroll Debug] Initial scroll position: ${window.scrollY}`)
      
      // Log scroll position changes
      let lastScrollY = window.scrollY
      const handleScroll = () => {
        if (Math.abs(window.scrollY - lastScrollY) > 100) {
          console.log(`[Scroll Debug] Scroll position changed: ${window.scrollY}`)
          lastScrollY = window.scrollY
        }
      }
      
      window.addEventListener('scroll', handleScroll, { passive: true })
      
      // Log when page is about to unmount
      onBeforeUnmount(() => {
        console.log(`[Scroll Debug] Page unmounting: ${route.path}, scroll position: ${window.scrollY}`)
        window.removeEventListener('scroll', handleScroll)
      })
    })
    
    // Watch for route changes
    watch(() => route.path, (newPath, oldPath) => {
      console.log(`[Scroll Debug] Route changed from ${oldPath} to ${newPath}`)
      console.log(`[Scroll Debug] Scroll position at route change: ${window.scrollY}`)
    })
  }
}
