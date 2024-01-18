/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {enabled: true},
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/google-fonts", "@pinia/nuxt"],
  plugins: ["~/plugins/preline.client.ts"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
    public: {
      logo: "/img/logo.png",
      appName: "ClouDocker",
    },
  },
});
