import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUserWithTodos() {
  await client.user.create({
    data: {
      username: "arnav",
      password: "234",
      firstName: "Arnav",
      lastName: "Singh",
      todos: {
        create: [
          {
            title: "Finish Prisma setup",
            description: "Complete the migration and test relation.",
          },
          {
            title: "Build API",
            description: "Implement Express route using Prisma.",
          },
        ],
      },
    },
  });

  console.log("✅ User with todos created successfully!");
}

createUserWithTodos()
  .catch((e) => console.error(e))
  .finally(async () => {
    await client.$disconnect();
  });
