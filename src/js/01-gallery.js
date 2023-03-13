// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const markupString = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', markupString);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
   
};

galleryEl.addEventListener('click', openImage);

function openImage(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return; 
    };

     const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionSelector: 'img',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });

}
