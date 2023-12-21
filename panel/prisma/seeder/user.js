export const userSeeder = async (prisma) => {
  console.info("Running seeder for users");
  await prisma.users.upsert({
    where: {id: 1},
    update: {},
    create: {
      name: "Administrator",
      email: "admin@mail.com",
      password: "$2a$10$tVkStDGescczPwEkjlG5DeDkHmQj.SESJKxLqvYYjva2pnPAOm8oy",
    },
  });
};

export default userSeeder;
