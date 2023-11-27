/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {enabled: true},
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],
  plugins: ["~/plugins/preline.client.ts"],
});
