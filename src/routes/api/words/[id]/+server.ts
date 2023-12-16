import { json } from '@sveltejs/kit';
import { PrismaClient } from "@prisma/client";
import { DefaultWord } from "$stores/words/WordStore";
const prisma = new PrismaClient();

const newWord = DefaultWord;

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
  let word;
  if (params.id === 'new') {
    word = newWord;
  } else {
    await prisma.$connect();
    word = await prisma.word.findUnique({
      where: {
        id: params.id
      }
    });
    await prisma.$disconnect();
  }
  console.log("WORD GET: ", word);
  return json({
    data: word,
  });
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const body = await request.json();
  console.log('POST BODY: ', body)
  let user;
  if (body.id) {
    const id = body.id;
    delete body.id;
    user = await prisma.word.update({
      where: {
        id: id
      },
      data: body
    })
  } else {
    user = await prisma.word.create({
      data: body
    });
  }
  console.log('SAVED ', user);
  return json({
    data: user
  });
}
