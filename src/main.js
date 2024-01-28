import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

const form = document.querySelector('.feedback-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.wrap-loader');

// loader.classList.add('.hiden');

let searchBar = '';

form.addEventListener('submit', event => {
  event.preventDefault();
  searchBar = event.currentTarget.elements.search.value.trim();
  loader.classList.remove('hiden');
  event.currentTarget.elements.search.value = '';
  fetchImages();
});

function fetchImages() {
  const Params = new URLSearchParams({
    key: '42046594-dc9dc59be7e95573d854c379a',
    q: `${searchBar}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 9,
  });

  return fetch(`https://pixabay.com/api/?${Params})`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FAFAFB',
          messageSize: '16px',
          backgroundColor: '#EF4040',
          position: 'topRight',
        });
      }

      function createGallery(arr) {
        return data.hits
          .map(
            ({
              webformatURL,
              largeImageURL,
              tags,
              likes,
              views,
              comments,
              downloads,
            }) => `<li class="gallery-item">
           <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />

            <ul class = "description-list">

              <li class = "description-item">
               <h3 class = "description-title">Likes</h3>
               <p class = "description-text">${likes}</p>
              </li>

              <li class = "description-item">
               <h3 class = "description-title">Views</h3>
               <p class = "description-text">${views}</p>
              </li>
          
              <li class = "description-item">
               <h3 class = "description-title">Comments</h3>
               <p class = "description-text">${comments}</p>
              </li>

              <li class = "description-item">
               <h3 class = "description-title">Downloads</h3>
               <p class = "description-text">${downloads}</p>
               </li>
          
             </ul>
           </a>

      </li>
      `
          )
          .join('');
      }

      console.log(Params.toString());

      gallery.innerHTML = createGallery(data);

      console.log(data.hits);
      console.log(data);

      let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      lightbox.refresh();
    })
    .catch(error => {
      // Error handling
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('hiden');
    });
}
