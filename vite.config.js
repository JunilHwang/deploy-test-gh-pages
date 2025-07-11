import { defineConfig } from "vite";

console.log(process.env.NODE_ENV)

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? "/deploy-test-gh-pages/": "/",
  build: {
    outDir: "dist",
    // 404.html도 빌드
    rollupOptions: {
      input: {
        main: "index.html",
        404: "404.html"
      }
    }
  }
});
