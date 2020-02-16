export function requestData<T>(source: string): Promise<T> {
  return fetch(source).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json() as Promise<T>;
  });
}
