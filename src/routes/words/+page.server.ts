import { Prisma, PrismaClient, Language } from "@prisma/client";
const prisma = new PrismaClient();

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  console.log("connecting to prisma");
  await prisma.$connect();
  console.log("connected");
  const words = await prisma.word.findMany();
  console.log("findmany: ", words);
  // await prisma.word.create({
  //   data: {
  //     lang: Language.ENGLISH,
  //     name: "Foo",
  //     image: "",
  //     sentence: "A little bit of foo goes a long way",
  //     definition: "A word used as a placeholder in programming"
  //   }
  // })
  console.log("disconnect");
  await prisma.$disconnect();
  return {
    words: words,
  };
}
