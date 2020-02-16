type HighlightedItem = [string, HTMLElement[], HTMLElement, number];

export const incrementHighlightedItem = (...args: HighlightedItem): void => {
  const [action, resultItems, activeItem, activeIndex] = args;

  // Check if we are trying to exceed the bounds of the results list
  const bounds = !!(
    (activeIndex === 0 && action === 'ARROW_UP') ||
    (resultItems.length - 1 === activeIndex && action === 'ARROW_DOWN')
  );

  if (bounds) {
    return;
  }

  const newIndex = action === 'ARROW_UP' ? activeIndex - 1 : activeIndex + 1;

  activeItem.classList.remove('highlight');
  resultItems[newIndex].classList.add('highlight');
};
