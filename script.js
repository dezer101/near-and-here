const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }
});

const searchForm = document.querySelector('#neighbourhood-search');
const searchInput = document.querySelector('#search-input');
const placeCards = [...document.querySelectorAll('.place-card')];
const resultsMessage = document.querySelector('#results-message');
const noResults = document.querySelector('#no-results');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLocaleLowerCase('en-AU');
  let matchCount = 0;

  for (const card of placeCards) {
    const searchableText = `${card.dataset.searchable} ${card.textContent}`.toLocaleLowerCase('en-AU');
    const matches = query === '' || searchableText.includes(query);
    card.hidden = !matches;
    if (matches) matchCount += 1;
  }

  noResults.hidden = matchCount !== 0;
  if (query === '') {
    resultsMessage.textContent = 'A few places to get you started.';
  } else if (matchCount === 1) {
    resultsMessage.textContent = `One idea for “${searchInput.value.trim()}”.`;
  } else if (matchCount > 1) {
    resultsMessage.textContent = `${matchCount} ideas for “${searchInput.value.trim()}”.`;
  } else {
    resultsMessage.textContent = `No matches for “${searchInput.value.trim()}”.`;
  }

  document.querySelector('#neighbourhoods').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
