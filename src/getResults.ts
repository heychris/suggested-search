interface IncompleteItem {
    [key: string]: string;
}

export const getResults = (searchWords: string[], data: object[], target: string) => {
    return data.filter((item: Partial<IncompleteItem>) => {
        const searchKey = item[target];

        if (searchKey) {
            const itemValue = searchKey.toLowerCase();

            return searchWords.every(word => itemValue.includes(word));
        }

        return false;
    });
};
