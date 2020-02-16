export const getResults = (searchWords: string[], data: object[], target: string) => {
  return data.filter((item: any) => {
    const searchKey = item[target];
    const itemValue = searchKey.toLowerCase();

    return searchWords.every(word => itemValue.includes(word));
  });
};
