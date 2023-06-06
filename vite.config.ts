import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    VitePWA({
      mode: "development",
      base: "/pwa_test/",
      srcDir: "src",
      filename: "sw.ts",
      includeAssets: ["./main.png"],
      strategies: "injectManifest",
      manifest: {
        name: "Test Project",
        short_name: "Test",
        theme_color: "#ffffff",
        start_url: "./index.html",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "./main.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "./main.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "./main.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
    }),
  ],
  base: "/pwa_test/",
})
