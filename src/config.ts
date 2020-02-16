export type Config = {
  elements: HTMLElement[];
  source: string;
  filterBy: string;
  resultsToShow: number;
  charsBeforeResults: number;
  resultContainerEl: string;
  item: (item: object) => string;
};

export const DefaultConfig: Config = {
  elements: [],
  source: '',
  filterBy: 'title',
  resultsToShow: 3,
  charsBeforeResults: 3,
  resultContainerEl: 'ul',
  item: () =>
    `<li class="list-item">
            <a href="javascript:;"></a>
        </li>`
};
