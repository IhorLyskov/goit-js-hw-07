import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      `;
    })
    .join('');
}

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
const gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
