/* eslint-disable no-undef */
import { defineConfig } from 'vite'
// import { resolve } from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, "index.html"),
  //       about: resolve(__dirname, "about/index.html"),
  //     },
  //   },
  // },
  plugins: [react()],
});
