import 'whatwg-fetch';
import fillResults from './fill-in-result';

const searchForm = document.querySelector('.planet__submit');
const searchInput = document.querySelector('.planet__name');
const searchResult = document.querySelector('.results');

function searchForTitle(name) {
  fetch(`http://netflixroulette.net/api/api.php?title=${name}`)
    .then(res => res.json())
    .then((data) => {
      fillResults(searchResult, data);
    });
}

searchForTitle('scrubs');

searchForm.addEventListener('click', () => {
  searchForTitle(searchInput.value);
});
