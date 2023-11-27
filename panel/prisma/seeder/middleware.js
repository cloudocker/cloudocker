export const middlewareSeeder = async (prisma) => {
  console.info("Running seeder for middlewares");
  await prisma.middlewares.upsert({
    where: {name: "traefikAuth"},
    update: {},
    create: {
      name: "traefikAuth",
      data: JSON.stringify({
        basicAuth: {
          users: ["admin:YWRtaW46YWRtaW4="],
        },
      }),
    },
  });

  await prisma.middlewares.upsert({
    where: {name: "default"},
    update: {},
    create: {
      name: "default",
      data: JSON.stringify({
        chain: {
          middlewares: ["default-security-headers", "error-pages", "gzip"],
        },
      }),
    },
  });

  await prisma.middlewares.upsert({
    where: {name: "default-security-headers"},
    update: {},
    create: {
      name: "default-security-headers",
      data: JSON.stringify({
        headers: {
          browserXssFilter: true,
          contentTypeNosniff: true,
          forceSTSHeader: true,
          frameDeny: true,
          referrerPolicy: "strict-origin-when-cross-origin",
          sslRedirect: true,
          stsIncludeSubdomains: true,
          stsPreload: true,
          stsSeconds: 63072000,
        },
      }),
    },
  });

  await prisma.middlewares.upsert({
    where: {name: "error-pages"},
    update: {},
    create: {
      name: "error-pages",
      data: JSON.stringify({
        errors: {
          query: "erreur{status}/",
          service: "traefik-error-pages",
          status: ["403-404", "500", "503"],
        },
      }),
    },
  });

  await prisma.middlewares.upsert({
    where: {name: "gzip"},
    update: {},
    create: {
      name: "gzip",
      data: JSON.stringify({
        compress: {},
      }),
    },
  });
};

export default middlewareSeeder;
