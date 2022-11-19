import { get, writable } from "svelte/store";
import { performFetch } from "$lib/request";
import type { PaginatedData, PaginatedStore } from "../base/Pagination";
import type { Word } from "./WordStore";

const WordsStoreDefaults: PaginatedData<Word[]> = {
  loading: true,
  offset: 1,
  size: 20,
  data: [],
};
const { subscribe, set } = writable(WordsStoreDefaults);

export type WordsStoreLoadParams = {
  offset?: number;
  size?: number;
  lang?: string;
  fragment?: string;
};

export const WordsStore: PaginatedStore<WordsStoreLoadParams, Word[]> = {
  subscribe,
  load: async (params: WordsStoreLoadParams = {}) => {
    const { offset, size, lang, fragment } = params;
    const store = get(WordsStore);
    store.loading = true;
    set(store);

    let apiParams = "";
    if (offset) {
      apiParams += `offset=${offset}&`;
    }
    if (size) {
      apiParams += `size=${size}&`;
    }
    if (lang) {
      apiParams += `lang=${lang}&`;
    }
    if (fragment) {
      apiParams += `fragment=${fragment}&`;
    }
    if (apiParams) {
      apiParams = apiParams.replace(/&$/, '' );
      apiParams = "?" + apiParams;
    }

    const resp = (await performFetch(
      `/api/words${apiParams}`
    )) as {words:Word[]}
    set({
      loading: false,
      offset: offset || WordsStoreDefaults.offset,
      size: size || WordsStoreDefaults.size,
      data: resp.words
    });
  },
};
