import { error, json } from '@sveltejs/kit';
import { Language, PrismaClient } from "@prisma/client";

/** @type {import('./$types').RequestHandler} */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function GET({ url }) {
  const offset = Number(url.searchParams.get('offset')) || 0;
  const size = Number(url.searchParams.get('size')) || 20;
  const fragment = url.searchParams.get('fragment');
  const lang = url.searchParams.get('lang') ?? 'cz';
  let langEnum: Language = Language.CZECH;

  if (lang === "en") {
    langEnum = Language.ENGLISH
  } else if (lang !== 'cz') {
    error(400, "Invalid language specified");
  }

  const filter: any = [
    { lang: langEnum }
  ];
  if (fragment) {
    filter.push({
      name: {
        contains: fragment,
        mode: 'insensitive'
      }
    });
  }

  const prisma = new PrismaClient();
  await prisma.$connect();
  const words = await prisma.word.findMany({
    skip: offset,
    take: size,
    where: {
      AND: filter
    }
  });
  await prisma.$disconnect();

  return json({
    words: words
  });
}


/** @type {import('./$types').RequestHandler} */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function POST({ request }) {
  const body = await request.json();
  console.log('POST ', body);
  return json(body);
}
