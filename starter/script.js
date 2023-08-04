'use strict';

let btnShowModal = document.querySelectorAll('.show-modal');
let overLay = document.querySelector('.overlay');
let hiddenModal = document.querySelector('.modal');

console.log(btnShowModal);
console.log(hiddenModal.classList);

const openModal = function () {
  hiddenModal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

const closeModal = function () {
  hiddenModal.classList.add('hidden');
  overLay.classList.add('hidden');
};

//when we click on the overlay; then close the modal.
overLay.addEventListener('click', closeModal);
hiddenModal.addEventListener('click', closeModal);

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);

//This for handling the esc key.
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape') {
    closeModal();
  }
});
