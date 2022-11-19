export async function performFetch<T>(
    path: string
): Promise<T> {
    const fetchCfg: RequestInit = {
        mode: "cors",
        method: "get",
    };
    const headers: HeadersInit = {
        "Content-Type": "application/json",
    };

    fetchCfg.headers = new Headers(headers);

    const response = await fetch(path, fetchCfg);
    const json = await response.json();
    return response.ok ? json : Promise.reject(json);
}

export async function performPost<T>(
  path: string,
  body: unknown
): Promise<T> {
    const fetchCfg: RequestInit = {
        mode: "cors",
        method: "post",
        body: JSON.stringify(body)
    };
    const headers: HeadersInit = {
        "Content-Type": "application/json",
    };

    fetchCfg.headers = new Headers(headers);

    const response = await fetch(path, fetchCfg);
    const json = await response.json();
    return response.ok ? json : Promise.reject(json);
}
