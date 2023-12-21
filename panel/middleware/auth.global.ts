export default defineNuxtRouteMiddleware(async (to) => {
  if (useSettingsStore().isFirstLoad) await useAuthStore().init();

  const isAuth = useAuthStore().isAuth;
  if (to.path === "/login" && isAuth) {
    return navigateTo("/");
  } else if (to.path !== "/login" && !isAuth) {
    return navigateTo("/login");
  }
});
