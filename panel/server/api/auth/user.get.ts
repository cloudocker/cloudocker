import jwt from "jsonwebtoken";
import {SECRET} from "./login.post";
import {responseJSON} from "~/utils";
const {verify} = jwt;

export default eventHandler((event) => {
  try {
    const accessToken = getCookie(event, "ACCESS_TOKEN") || "";
    if (!accessToken) return responseJSON(event, 401, {message: "No Authorization"});
    return verify(accessToken, SECRET);
  } catch (error: any) {
    return responseJSON(event, 403, {error: error.message});
  }
});
