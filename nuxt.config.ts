// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],
  css: ["~/assets/css/main.css", "~/assets/css/responsive.css"],
  pages: true,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Orkut",
      htmlAttrs: {
        lang: "pt-BR",
      },
    },
  },
});
