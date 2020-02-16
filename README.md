# Suggested Search

Simple search results suggestions. The plugin fetches the JSON data given in the `source` and renders results based on user input.

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
| resultContainerEl  | The HTML element that wraps the search results                            |
| item               | Function that gets mapped over the data item                              |

## Browser Support

This plugin supports IE11 and all evergreen browsers. The code base makes use of ES6 features and uses [core-js](https://github.com/zloirock/core-js) to polyfill.

If you are not supporting IE11 (I'm jealous), then create a custom build for yourself and remove `import './polyfills'` from `src/index.ts`.

## Contributing

Clone this reposity and install the development packages.

```
# Clone the repo
git clone https://github.com/heychris/suggested-search.git

# Install packages
yarn install

# Start coding
yarn watch
```

| Command | Description                                                                                                                      |
| ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| watch   | `yarn watch` will watch for file changes and rebuild the package. It also launches a local server accesible at `localhost:10001` |
| build   | Builds the package. Entry is `src/index.ts`.                                                                                     |
| test    | Runs [Jest](https://jestjs.io/) tests found in `src/tests`                                                                       |
