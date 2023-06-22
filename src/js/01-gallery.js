import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(
    ({
        preview,
        original,
        description
    }) => `<li class="gallery__item js-target">
            <a class="gallery__link js-target" href ="${original}">
                <img
                    class="gallery__image js-target"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
            </li>`
)
    .join('');

gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});
