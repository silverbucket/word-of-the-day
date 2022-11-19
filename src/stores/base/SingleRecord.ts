import type { Writable } from "svelte/store";

type SingleRecordError = {
    detail?: string;
};

export interface SingleRecordData<S> extends SingleRecordError {
    loading: boolean;
    data: S | Record<string, never>;
}

export interface SingleRecord<P, S> {
    subscribe: Writable<SingleRecordData<S>>["subscribe"];
    load(params: P): Promise<void>;
    post(): Promise<void>;
}
