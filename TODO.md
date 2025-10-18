# Performance Optimization TODO

## 1. Optimize 3D Rendering
- [x] Modify SceneCanvas.tsx to detect mobile and reduce DPR to 1, disable shadows/antialias, conditionally disable auto-rotation on mobile.

## 2. Reduce Particle Count
- [x] Update FloatingParticles.tsx to reduce particle count to 500 on mobile, 1000 on desktop.

## 3. Update Hero Component
- [x] Add mobile detection in Hero.tsx, reduce floating particles to 10-15 on mobile, memoize particle generation.

## 4. Lazy Load Heavy Components
- [x] Wrap 3D components in React.lazy in App.tsx or relevant files.

## 5. Respect Reduced Motion
- [x] Add prefers-reduced-motion support to disable animations in Hero.tsx and other components.

## 6. Optimize Animations
- [x] Use will-change CSS, reduce complexity, use intersection observer for viewport animations.

## 7. Add Performance Monitoring
- [x] Integrate simple FPS counter or use React DevTools Profiler in dev mode.

## 8. Optimize Images and Assets
- [x] Implement service worker for caching static assets.
- [x] Add web app manifest for PWA features.

## 9. Implement Code Splitting
- [x] Configure Vite build to split vendor chunks (Three.js, animations, UI libs).

## 10. Add Service Worker for Caching
- [x] Create service worker to cache assets and improve load times.
