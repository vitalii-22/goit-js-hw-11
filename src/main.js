// API: 42046594 - dc9dc59be7e95573d854c379a;

const form = document.querySelector('.feedback-form');

let searchBar = '';

form.addEventListener('submit', event => {
  event.preventDefault();
  searchBar = event.currentTarget.elements.search.value;
  searchImages();
});

const options = {
  key: '42046594 - dc9dc59be7e95573d854c379a',
  q: `${searchBar}`,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

function searchImages() {
  fetch('https://pixabay.com/api/', options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      // Data handling
      console.log(data);
    })
    .catch(error => {
      // Error handling
      console.log(error);
    });
}
