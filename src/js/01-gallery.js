import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this linenp

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

galleryItems.forEach(element => {
  const li = document.createElement('li');
  li.innerHTML = `<a class='gallery__link'>
                        <img
                            class="gallery__image"
                            src="${element.preview}"
                            data-source="${element.original}"
                            alt="${element.description}"
                        />
                    </a>`;
  li.className = 'gallery__item';
  gallery.append(li);
});

const sl = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
