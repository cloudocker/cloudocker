import axios from "axios";

export default defineNuxtRouteMiddleware(async (to) => {
  const isAuth = await axios.get("/api/auth/user").then((response) => response.status === 200);
  if (to.path === "/login" && isAuth) {
    return navigateTo("/");
  } else if (to.path !== "/login" && !isAuth) {
    return navigateTo("/login");
  }
});
