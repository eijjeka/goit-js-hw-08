import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';



console.log(galleryItems);

const parentEl = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
`<a class="gallery__link" href="${original}"
onclick="event.preventDefault()">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>`).join('');

parentEl.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

// new SimpleLightbox('.gallery a', { 
//     captions: true,
//     captionSelector: 'img',
//     captionsData: 'alt',
//     captionPosition: 'bottom',
//     captionDelay: 250,
// });