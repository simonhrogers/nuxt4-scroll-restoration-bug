# Nuxt 4 Scroll Restoration Bug Reproduction

This is a minimal reproduction case demonstrating a bug in Nuxt 4 where scroll position restoration fails when transitioning between pages with different layouts, but works correctly when transitioning between pages with the same layout.

## Bug Description

**Issue:** Scroll position behaviour is INCONSISTENT across installations of Nuxt 4, depending on project complexity. In this simple repro, scroll position IS restored, but a flash of "top of screen" occurs on the layout-out transition (i.e. exiting layout flashes to top). On another repro with a more complex working project, it is not restored when navigating between pages that use different layouts, even though scroll restoration works correctly when navigating between pages with the same layout.

## Steps to Reproduce

1. Start the dev server:
   ```bash
   npm install
   npm run dev
   ```

2. Navigate to the home page (`/`)

3. Scroll down the page.

4. Navigate to "Page A" or "Page B" (both use the same default layout)
   - ✅ **Expected:** Scroll position is restored
   - ✅ **Actual:** Scroll position is restored (works correctly)

5. Navigate back to home and scroll down again to section 30-40

6. Navigate to "Alt Layout Page" (uses a different layout)
   - ✅ **Expected:** Scroll position should be restored
   - ❌ **Actual:** Scroll position is reset to 0 (BUG)

## Configuration

The bug occurs when both page and layout transitions are enabled in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page-fade', mode: 'out-in' },
    layoutTransition: { name: 'layout-fade', mode: 'out-in' },
  },
})
```

## Expected Behavior

Scroll position should be restored regardless of whether the target page uses the same layout or a different layout.

## Actual Behavior

- ✅ Scroll restoration works when navigating between pages with the same layout
- ❌ Scroll restoration fails (resets to 0) when navigating between pages with different layouts

## Environment

- Nuxt: 4.3.0
- Node: (any version)
- Browser: (tested in Chrome, Firefox, Safari)

## Additional Notes

The issue appears to be related to how Nuxt handles scroll restoration during layout transitions. When a layout transition occurs, the scroll position is not being saved/restored correctly.