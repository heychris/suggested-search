import { Config } from './config';
import { requestData } from './requestData';
import { keyCodes } from './keyCodes';
import { incrementHighlightedItem } from './incrementHighlightedItem';
import { getResults } from './getResults';

export default class Application {
  public resultsContainer!: HTMLElement;
  public userValue!: string;
  public data!: object[];

  constructor(public el: HTMLElement, public config: Config) {
    requestData<object[]>(config.source)
      .then(data => {
        this.data = data;
        this.init();
      })
      .catch(error => console.log(error));
  }

  init(): void {
    this.constructHTML();
    this.setupEventListeners();
  }

  setupEventListeners(): void {
    this.el.addEventListener('keyup', e => this.handleKeyEvents(e));

    this.el.addEventListener('focus', e => this.handleFocusEvents(e));
    this.el.addEventListener('focusout', () => this.closeResultsList());
  }

  constructHTML(): void {
    const wrapper = document.createElement('div');
    wrapper.classList.add('suggested-search');

    this.resultsContainer = document.createElement('div');
    this.resultsContainer.classList.add('suggested-search__list');
    this.resultsContainer.classList.add('hide-list');

    this.el.insertAdjacentElement('beforebegin', wrapper);
    wrapper.appendChild(this.el);

    this.el.insertAdjacentElement('afterend', this.resultsContainer);
  }

  updateResults(): void {
    const searchTextClean = this.userValue.toLowerCase();
    const searchWords = searchTextClean.split(' ');

    const allMatchingItems = getResults(searchWords, this.data, this.config.filterBy);
    const matchingItems = allMatchingItems.slice(0, this.config.resultsToShow);

    const resultsHTML = matchingItems.map(this.config.item);

    if (!resultsHTML.length) {
      return this.closeResultsList();
    }

    this.resultsContainer.classList.remove('hide-list');
    this.resultsContainer.innerHTML = '';

    resultsHTML.forEach(item => (this.resultsContainer.innerHTML += item));
  }

  handleFocusEvents(e: FocusEvent): void {
    if (!e || !e.target) {
      return;
    }

    const target = <HTMLInputElement>e.target;

    if (target.value.length < this.config.charsBeforeResults) {
      return this.resultsContainer.classList.add('hide-list');
    }

    this.resultsContainer.classList.remove('hide-list');
  }

  handleKeyEvents(e: KeyboardEvent): void {
    if (!e || !e.target) {
      return;
    }

    const target = <HTMLInputElement>e.target;

    if (target.value.length < this.config.charsBeforeResults) {
      return this.resultsContainer.classList.add('hide-list');
    }

    const action = keyCodes[e.keyCode];
    const resultItems = <HTMLElement[]>Array.from(this.resultsContainer.children);
    const activeItem: HTMLElement | undefined = resultItems.find(item => item.classList.contains('highlight'));

    this.resultsContainer.classList.remove('hide-list');
    this.userValue = target.value;

    switch (action) {
      case 'TAB':
      case 'ARROW_UP':
      case 'ARROW_DOWN':
        if (!activeItem) {
          return resultItems[0].classList.add('highlight');
        }

        const activeIndex = resultItems.indexOf(activeItem);

        return incrementHighlightedItem(action, resultItems, activeItem, activeIndex);

      case 'ESC':
        this.closeResultsList();

        break;

      case 'ENTER':
        const itemToClick = activeItem ? activeItem : resultItems[0];
        const anchor = itemToClick.tagName == 'a' ? itemToClick : itemToClick.querySelector('a');

        if (anchor) {
          anchor.click();
        }

        break;

      default:
        this.updateResults();
    }
  }

  closeResultsList(): void {
    this.resultsContainer.innerHTML = '';
    this.resultsContainer.classList.add('hide-list');
  }
}
