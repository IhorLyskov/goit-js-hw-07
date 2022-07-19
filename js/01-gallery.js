import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img 
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `;
    })
    .join('');
}

let instance;
const body = document.querySelector('body');
const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  const img = event.target;
  if (!img.classList.contains('gallery__image')) {
    return;
  }
  event.preventDefault();

  instance = basicLightbox.create(`<img src="${img.dataset.source}">`);
  instance.show(onShow);
}

function onRemoveEscKeyPress(event) {
  window.removeEventListener('keydown', onEscKeyPress);
  body.style.overflow = '';
}

function onEscKeyPress(event) {
  console.log(event);
  if (event.code === 'Escape') {
    instance.close(onRemoveEscKeyPress);
  }
}

function onShow(instance) {
  instance.element().addEventListener('click', onRemoveEscKeyPress);
  window.addEventListener('keydown', onEscKeyPress);
  body.style.overflow = 'hidden';
}
