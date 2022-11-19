import { performFetch, performPost } from "$lib/request";
import { get, writable } from "svelte/store";
import type { SingleRecordData, SingleRecord } from "$stores/base/SingleRecord";
import type { Prisma } from "@prisma/client";
import { Language } from "@prisma/client";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type Word = Prisma.Word;

const DefaultWord: Word = {
    id: "",
    lang: Language.CZECH,
    name: "",
    image: "",
    translatesTo: [],
    translatesToId: [],
    translatesFrom: [],
    translatesFromId: [],
    definition: "",
    sentence: "",
}

const WordStoreDefaults: SingleRecordData<Word> = {
    loading: true,
    data: DefaultWord,
};
const { subscribe, set } = writable(WordStoreDefaults);

export const WordStore: SingleRecord<string, Word> = {
    subscribe,
    load: async (id: string) => {
        if (!id) {
            return set({
                loading: false,
                detail: "No rollout feature name provided",
                data: {},
            });
        }
        const resp = (await performFetch(`/api/words/${id}`)) as {data: Word};
        set({
            loading: false,
            data: resp.data,
        });
    },
    post: async () => {
        const data = get(WordStore);
        let id = 'new';
        if (data.data.id) {
            id = data.data.id;
        }
        await performPost(`/api/words/${id}`, data.data);
    }
};
