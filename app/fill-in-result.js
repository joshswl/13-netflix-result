export default function fillResults(element, data) {
  element.querySelector('.result-item__title').innerText = data.show_title;
  element.querySelector('.result-item__category').innerText = data.category;
  element.querySelector('.result-item__rating--number').innerText = data.rating;
  element.querySelector('.result-item__img').src = data.poster;
  element.querySelector('.results__bottom--summary__description').innerText = data.summary;
  element.querySelector('.results__bottom--actors__description').innerText = data.show_cast;
}
