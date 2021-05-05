'use strict'
import { main } from "./main.js";

const tableForm = document.querySelector('.table__form'),
      getIndex = document.querySelector('#getIndex'),
      inputStart = document.querySelector('#start'),
      inputEnd = document.querySelector('#end'),
      inputGuest = document.querySelector('.guest'),
      roomBg = document.querySelector('.room__background'),
      roomFees = document.querySelector('.room__fees');

function sendForm() {
  if (inputStart.value &&
      inputEnd.value &&
      inputGuest.value) {
    tableForm.reset();
    document.location.href = "index.html";
  } else {
    alert('Не указана дата или число гостей');
  }
}

function createNumber() {
  function createBackground() {
    const background = `
    <img src="img/room/image.1.1.jpg" alt="">
    <div class="room__background--col">
      <img class="room__background--small" src="img/room/image.1.2.jpg" alt="">
      <img class="room__background--small" src="img/room/image.1.3.jpg" alt="">
    </div>
  `;
    roomBg.insertAdjacentHTML('afterbegin', background);
  }
  function createForm() {
    const data = `
    <div class="room__data--number">
      <span class="room__number--elem">№</span>
      <span class="room__number--big">888</span>
      <span class="room__luks">люкс</span>
    </div>
    <div class="room__data--cash">
      <span class="room__cash">9 990₽</span>
      <span class="room__day">в сутки</span>
    </div>
  `;
    roomFees.insertAdjacentHTML('afterbegin', data);
  }
  createBackground();
  createForm();
}

//
getIndex.addEventListener('click', (e) => {
  e.preventDefault();
  sendForm();
});

createNumber();

main();