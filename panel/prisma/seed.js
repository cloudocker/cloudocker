/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

import userSeeder from "./seeder/user.js";
import middlewareSeeder from "./seeder/middleware.js";

async function main() {
  await userSeeder(prisma);
  await middlewareSeeder(prisma);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
