import 'whatwg-fetch';
import fillResults from './fill-in-result';

var searchForm = document.querySelector('.planet__submit');
var searchInput = document.querySelector('.planet__name');
var searchResult = document.querySelector('.results');

function searchForTitle (name) {
  fetch(`http://netflixroulette.net/api/api.php?title=${name}`)
    .then((res) => res.json())
    .then((data) => {
      fillResults(searchResult, data);
    });
}

searchForm.addEventListener('click', () => {
  searchForTitle(searchInput.value);
})

  // Listen for the searchBtn to be clicked
  searchBtn.addEventListener('click', () => {
    // Run "searchForPlanet" with the input value
    searchForPlanet(searchInput.value);
  });
