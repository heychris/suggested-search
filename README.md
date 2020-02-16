# Suggested Search

Simple search results suggestions.

## Usage

```js
new SuggestedSearch({
  elements: document.querySelectorAll('input'),
  source: '/posts',
  filterBy: 'title',
  resultsToShow: 3,
  charsBeforeResults: 3,
  resultContainerEl: 'ul',
  item: post =>
    `<li class="list-item">
        <a href="${post.url}">${post.title}</a>
    </li>`
});
```

| Option             | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| elements           | HTML elements to initalize SuggestedSearch on                             |
| source             | URL to data source. JSON format.                                          |
| filterBy           | Object key upon which the search input will compare against               |
| resultsToShow      | Maximum results to show at one time                                       |
| charsBeforeResults | Minimum number of characthers user must type before results start to show |
| item               | Function that gets mapped over the data item                              |
