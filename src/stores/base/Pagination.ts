import type { Writable } from "svelte/store";

export type PaginatedData<S> = {
    loading: boolean;
    offset: number;
    size: number;
    data: Array<S>;
};

export interface PaginatedStore<P, S> {
    subscribe: Writable<PaginatedData<S>>["subscribe"];
    load(params: P): Promise<void>;
}
