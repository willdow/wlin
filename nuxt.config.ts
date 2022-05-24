import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app
  app: {
    head: {
      title: "Willyan",
      titleTemplate: "%s - Blog",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "Willyan",
          name: "Willyan",
          content: "Blog"
        }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  css: ["@/assets/css/main.css"]
});
