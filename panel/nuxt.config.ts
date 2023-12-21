/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {enabled: true},
  colorMode: {
    preference: "light",
  },
  modules: ["@nuxtjs/eslint-module", "@nuxt/ui", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "DM+Sans": [400, 500, 700],
    },
    display: "swap",
  },
  app: {
    head: {
      title: "ClouDocker",
    },
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
    public: {
      logo: "/img/logo.png",
      appName: "ClouDocker",
    },
  },
});
