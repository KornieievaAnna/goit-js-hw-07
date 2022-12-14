import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

for (const { preview, original, description } of galleryItems) {
  const string = `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}n" />
</a>`;
  list.insertAdjacentHTML("afterbegin", string);
}
function onclick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

}

