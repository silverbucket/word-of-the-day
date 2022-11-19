import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function load({ params }) {
  if (!params.id) {
    throw error(404, "Not found");
  }
  return {
    id: params.id,
  };
}
