import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
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
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          i18n: ["i18next", "react-i18next"],
          // Separate chunk for Three.js and related libraries
          'three-vendor': ['@react-three/fiber', '@react-three/drei', 'three'],
          // Separate chunk for animation libraries
          'animation-vendor': ['@react-spring/web', '@react-spring/three'],
          // Separate chunk for UI libraries
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-label', '@radix-ui/react-slot'],
        },
      },
    },
  },
});
