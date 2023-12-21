import {responseJSON} from "~/utils";

export default eventHandler(async (event) => {
  try {
    setCookie(event, "ACCESS_TOKEN", "", {maxAge: 0});
    // return await sendRedirect(event, "/login", 302);
    return responseJSON(event, 200, {message: "Logout Success"});
  } catch (error: any) {
    return responseJSON(event, 500, {error: error.message});
  }
});
