import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import legacy from "@vitejs/plugin-legacy";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Patrick Dutra Portfolio",
        short_name: "Portfolio",
        description: "Portfolio pessoal de Patrick Dutra",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    visualizer({
      filename: "dist/bundle-analysis.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: { port: 5173, open: true },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: "globalThis",
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          i18n: ["i18next", "react-i18next"],
          // Separate chunk for Three.js and related libraries
          "three-vendor": ["@react-three/fiber", "@react-three/drei", "three"],
          // Separate chunk for animation libraries
          "animation-vendor": ["@react-spring/web", "@react-spring/three"],
          // Separate chunk for UI libraries
          "ui-vendor": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-label",
            "@radix-ui/react-slot",
          ],
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
});
