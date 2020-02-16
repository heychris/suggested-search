new SuggestedSearch({
  elements: document.querySelectorAll('.suggested-search__input'),
  source: 'data.json',
  filterBy: 'name',
  resultsToShow: 2,
  item: item =>
    `<li class="list-item">
                <a href="javascript:;" class="cf">
                    <img src="${item.image}" />
                    <span class="name">${item.name}</span>
                    <span class="title">${item.title}</span>
                </a>
            </li>`
});
