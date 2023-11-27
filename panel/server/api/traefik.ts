/* eslint-disable @typescript-eslint/no-unused-vars */
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const middlewares = await prisma.middlewares.findMany({
    select: {
      name: true,
      data: true,
    },
  });

  const services = await prisma.services.findMany({
    select: {
      name: true,
      data: true,
    },
  });

  const routers = await prisma.routers.findMany({
    select: {
      name: true,
      data: true,
    },
  });

  return {
    http: {
      middlewares: compileData(middlewares),
      services: compileData(services),
      routers: compileData(routers),
    },
  };
});

const compileData = (data: {name: string; data: string}[]) => {
  const result: {[key: string]: any} = {};
  data.forEach((element) => {
    console.log(element);
    result[element.name] = JSON.parse(element.data);
  });

  return result;
};
