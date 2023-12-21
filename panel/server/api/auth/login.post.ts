import jwt from "jsonwebtoken";
import {PrismaClient} from "@prisma/client";
import {compare} from "bcrypt";
import {responseJSON} from "~/utils";

const {sign} = jwt;
const prisma = new PrismaClient();

export const accessTokenExpiry = 86400; // 24 hours
export const SECRET = useRuntimeConfig().jwtSecret;

export default eventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const email = body.email;
    const password = body.password;
    if (!email || !password) return responseJSON(event, 400, {error: "Missing email or password"});

    const user = await prisma.users.findFirst({
      where: {email: email},
    });
    if (!user) return responseJSON(event, 404, {error: "User not found"});

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) return responseJSON(event, 401, {error: "Invalid password"});

    const data = {
      email: email,
      name: user.name,
    };

    const accessToken = sign({...data}, SECRET, {expiresIn: accessTokenExpiry});

    setCookie(event, "ACCESS_TOKEN", accessToken, {httpOnly: true, sameSite: "lax", maxAge: accessTokenExpiry});

    return {
      access_token: accessToken,
    };
  } catch (error: any) {
    return responseJSON(event, 500, {error: error.message});
  }
});
