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
const tableBedroom = document.querySelector('.table__bedroom');

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

main();