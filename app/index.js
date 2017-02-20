import 'whatwg-fetch';
import fillResults from './fill-in-result';

// var searchForm = ;
// var searchInput = ;
var searchResult = document.querySelector('.results');

fetch(`http://netflixroulette.net/api/api.php?title=Attack%20on%20titan`)
  .then((res) => res.json())
  .then((data) => {
    fillResults(searchResult, data);
  });
