'use strict'
import { main } from "./main.js";

// noUiSlider
var nonLinearStepSlider = document.getElementById('slider-non-linear-step');
noUiSlider.create(nonLinearStepSlider, {
  start: [5000, 10000],
  step: 10,
  connect: true,
  range: {
    'min': 0,
    'max': 16000
  },
  format: wNumb({
    thousand: ' '
  })
});
var nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');
nonLinearStepSlider.noUiSlider.on('update', function (values) {
  nonLinearStepSliderValueElement.innerHTML = values.join('₽ - ') + `₽`;
});

//
const tableBedroom = document.querySelector('.table__bedroom'),
      roomsElem = document.querySelector('.rooms__elem');
let countConveniences = document.querySelector('.conveniences'),
    bedroom = document.querySelector('#bedroom'),
    bed = document.querySelector('#bed'),
    bathroom = document.querySelector('#bathroom');

let bedrooms = 0,
    beds = 0,
    bathrooms = 0;

function itemBed() {
  countConveniences.value = bedrooms + beds + bathrooms;
  if (countConveniences.value == 1) {
    countConveniences.value += ' комната';
  } else if (countConveniences.value > 1 && countConveniences.value <= 4) {
    countConveniences.value += ' комнаты';
  } else if (countConveniences.value > 4) {
    countConveniences.value += ' комнат';
  } else {
    countConveniences.value = '';
  }
}

//
const getData = async function(url) {
  const response = await fetch(url); // запрос

  if (!response.ok) {
    throw new Error(`Ошибка ${url}, статус ошибки ${response.status}`);
  }

  return await response.json();
};

function createRooms(item) {
  const { image, number, luks, price, star, feedback, room } = item;

  const num = `
    <a class="room" data-number="${room}">
      <div class="room__img">
        <img class="room__img--elem" src="${image}" alt="">
        <div class="room__left"></div>
        <div class="room__right"></div>
      </div>
      <div class="room__data">
        <div class="room__data--number">
          <span class="room__number--elem">№</span>
          <span class="room__number">${number}</span>
          <span class="room__luks">${luks}</span>
        </div>
        <div class="room__data--cash">
          <span class="room__cash">${price}₽</span>
          <span class="room__day">в сутки</span>
        </div>
      </div>
      <hr class="room__data--content">
      </hr>
      <div class="room__rating">
        <div class="room__rating--star">
          <img src="${star}" alt="" class="star">
        </div>
        <div class="room__rating--comment">
          <div class="room__comment">${feedback}</div>
          <div class="room__comment--elem">Отзывов</div>
        </div>
      </div>
    </a>
  `;

  roomsElem.insertAdjacentHTML('beforeend', num);
}

function openRoom(e) {
  const room = e.target.closest('.room');

  if (room) {
    getData(`./db/${room.dataset.number}`).then(function (data) {
      data.forEach(() => {
        document.location.href = "room.html";
      });
    });
  }
}

roomsElem.addEventListener('click', openRoom);

//
tableBedroom.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target && e.target.matches("button.bedroom__plus")) {
    if (bedrooms >= 2) {
      return bedrooms;
    }
    bedrooms++;
    bedroom.textContent = bedrooms;
    itemBed();
  }
  if (e.target && e.target.matches("button.bedroom__minus")) {
    if (bedrooms <= 0) {
      return bedrooms;
    }
    bedrooms--;
    bedroom.textContent = bedrooms;
    itemBed();
  }
  if (e.target && e.target.matches("button.bed__plus")) {
    if (beds >= 4) {
      return beds;
    }
    beds++;
    bed.textContent = beds;
    itemBed();
  }
  if (e.target && e.target.matches("button.bed__minus")) {
    if (beds <= 0) {
      return beds;
    }
    beds--;
    bed.textContent = beds;
    itemBed();
  }
  if (e.target && e.target.matches("button.bathroom__plus")) {
    if (bathrooms >= 2) {
      return bathrooms;
    }
    bathrooms++;
    bathroom.textContent = bathrooms;
    itemBed();
  }
  if (e.target && e.target.matches("button.bathroom__minus")) {
    if (bathrooms <= 0) {
      return bathrooms;
    }
    bathrooms--;
    bathroom.textContent = bathrooms;
    itemBed();
  }
});

getData('./db/rooms.json').then(function (data) { // then обрабатывает промисы
  data.forEach(createRooms);
});

//
main();