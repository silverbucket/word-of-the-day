import { Prisma, PrismaClient, Language } from "@prisma/client";
const prisma = new PrismaClient();

/** @type {import('./$types').PageServerLoad} */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function load({ params }) {
  console.log("connecting to prisma ", params);
  await prisma.$connect();
  console.log("connected");
  const word = await prisma.word.findFirst(params.id);
  console.log("find: ", word);
  console.log("disconnect");
  await prisma.$disconnect();
  return {
    word: word,
  };
}
