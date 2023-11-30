/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {enabled: true},
  colorMode: {
    preference: "light",
  },
  modules: ["@nuxtjs/eslint-module", "@nuxt/ui", "@nuxtjs/google-fonts", "@sidebase/nuxt-auth"],
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
    public: {
      logo: "/img/logo.png",
      appName: "ClouDocker",
    },
  },
  build: {
    transpile: ["jsonwebtoken"],
  },
  auth: {
    provider: {
      type: "local",
      endpoints: {
        getSession: {path: "/user"},
      },
      pages: {
        login: "/login",
      },
      token: {
        signInResponseTokenPointer: "/token/accessToken",
      },
      sessionDataType: {
        id: "string",
        email: "string",
        name: "string",
        role: "admin | guest | account",
        subscriptions: "{ id: number, status: 'ACTIVE' | 'INACTIVE' }[]",
      },
    },
    session: {
      // Whether to refresh the session every time the browser window is refocused.
      enableRefreshOnWindowFocus: true,

      // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
      enableRefreshPeriodically: 5000,
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },
});
