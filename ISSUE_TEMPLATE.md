# Scroll Restoration Bug with Layout Transitions

## Description

Scroll position restoration fails when navigating between pages that use different layouts, but works correctly when navigating between pages with the same layout.

## Steps to Reproduce

1. Start the dev server: `npm install && npm run dev`
2. Navigate to the home page (`/`)
3. Scroll down to section 30-40 (there's a yellow test marker)
4. Navigate to "Page A" or "Page B" (both use the same default layout)
   - ✅ Scroll position is restored (works correctly)
5. Navigate back to home and scroll down again to section 30-40
6. Navigate to "Alt Layout Page" (uses a different layout)
   - ❌ Scroll position is reset to 0 (BUG)

## Expected Behavior

Scroll position should be restored regardless of whether the target page uses the same layout or a different layout.

## Actual Behavior

- ✅ Scroll restoration works when navigating between pages with the same layout
- ❌ Scroll restoration fails (resets to 0) when navigating between pages with different layouts

## Environment

- Nuxt: 4.3.0
- Node: (any version)
- Browser: (tested in Chrome, Firefox, Safari)

## Configuration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page-fade', mode: 'out-in' },
    layoutTransition: { name: 'layout-fade', mode: 'out-in' },
  },
})
```

## Additional Context

The issue appears to be related to how Nuxt handles scroll restoration during layout transitions. When a layout transition occurs, the scroll position is not being saved/restored correctly.

## Debugging

To see scroll position logs in the console, uncomment `useScrollDebug()` in `app.vue`.
