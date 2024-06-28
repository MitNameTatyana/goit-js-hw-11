import { getImages } from './js/pixabay-api';
import { createGalleryMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  refs.gallery.innerHTML = '';

  const searchQuery = e.target.elements['search-input'].value
    .trim()
    .toLowerCase();

  if (!searchQuery) {
    iziToast.info({
      message: 'Please enter a search query',
      position: 'topRight',
      timeout: 2000,
      progressBar: false,
    });
    return;
  }

  showLoader();
  getImages(searchQuery)
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          maxWidth: 432,
          theme: 'dark',
          backgroundColor: 'red',
          position: 'topRight',
          timeout: 2000,
          progressBar: false,
        });
      } else {
        const markup = createGalleryMarkup(data.hits);
        refs.gallery.innerHTML = markup;

        const lightbox = new SimpleLightbox('.gallery a', {
          captions: true,
          captionsData: 'alt',
          captionDelay: 250,
        });
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });

  e.target.reset();
}

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}
