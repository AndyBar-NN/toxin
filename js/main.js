// calendar

var now = new Date();
var endDate = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
var $start = $('#start'),
    $end = $('#end');
var $datepickers = $('.datepickers');

$datepickers.datepicker({
  minDate: now,
  maxDate: endDate,
  multipleDatesSeparator: " - ",
  range: true,
  onSelect: function (fd, date) {
    $end.data('datepicker')
      .update('selectedDates', $start.data('datepicker').selectedDates);
    var start = fd.split('-')[0];
    var end = fd.split('-')[1];
    if (end) {
      $start.val(start);
      $end.val(end);
    } else {
      $end.val('');
    }
  }
});
$(function () {
  $('.datepickers').datepicker({
    todayButton: true,
    language: {
      today: "Применить",
    },
  });
});

// swiper-slide

const swiper = new Swiper('.swiper-container', {
  allowTouchMove: false,
  speed: 5000,
  autoplay: {
    delay: 15000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

// dropdown guest

const tableRoom = document.querySelector('.table__room'),
      tableCompact = document.querySelector('.table__compact'),
      tableBedroom = document.querySelector('.table__bedroom'),
      clearBtn = document.querySelector('#clear'),
      hideBtn = document.querySelector('#hide'),
      searchRoom = document.querySelector('.search'),
      btnPlus = document.querySelectorAll('.table__plus'),
      btnMinus = document.querySelectorAll('.table__minus');
let countGuest = document.querySelector('#countGuest'),
    roomGuest = document.querySelector('#roomGuest'),
    bedroomGuest = document.querySelector('#bedroomGuest');
let men = document.querySelector('#men'),
    child = document.querySelector('#child'),
    baby = document.querySelector('#baby');

let mens = 0,
    childrens = 0,
    babies = 0;

function toggleRoom() {
  tableRoom.classList.toggle('active');
}
function toggleCompact() {
  tableCompact.classList.toggle('active');
}
function toggleBedroom() {
  tableBedroom.classList.toggle('active');
}

function hideElem(e) {
  const menuElem = e.target == tableRoom || tableRoom.contains(e.target);
  const inputBtn = e.target == countGuest;
  const menuToggle = tableRoom.classList.contains('active');
  const menuCompact = e.target == tableCompact || tableCompact.contains(e.target);
  const inputRoom = e.target == roomGuest;
  const menuRoom = tableCompact.classList.contains('active');
  const menuBedroom = e.target == tableBedroom || tableBedroom.contains(e.target);
  const inputBedroom = e.target == bedroomGuest;
  const menuBedroomElem = tableBedroom.classList.contains('active');
  if (!menuElem && !inputBtn && menuToggle) {
    toggleRoom();
  } else if (!menuCompact && !inputRoom && menuRoom) {
    toggleCompact();
  } else if (!menuBedroom && !inputBedroom && menuBedroomElem) {
    toggleBedroom();
  }
}

countGuest.addEventListener('click', toggleRoom);
roomGuest.addEventListener('click', toggleCompact);
bedroomGuest.addEventListener('click', toggleBedroom);
document.addEventListener('click', hideElem);

// adding guests

function itemGuest() {
  countGuest.value = mens + childrens + babies;
  if (countGuest.value == 1) {
    countGuest.value += ' гость';
  } else if (countGuest.value > 1 && countGuest.value <= 4) {
    countGuest.value += ' гостя';
  } else if (countGuest.value > 4) {
    countGuest.value += ' гостей';
  } else {
    countGuest.value = '';
  }
}

btnPlus[0].addEventListener('click', (e) => {
  e.preventDefault();
  if (mens >= 4) {
    return mens;
  }
  mens++;
  men.textContent = mens;
  itemGuest();
});

btnMinus[0].addEventListener('click', (e) => {
  e.preventDefault();
  if (mens <= 0) {
    return mens;
  }
  mens--;
  men.textContent = mens;
  itemGuest();
});

btnPlus[1].addEventListener('click', (e) => {
  e.preventDefault();
  if (childrens >= 2) {
    return childrens;
  }
  childrens++;
  child.textContent = childrens;
  itemGuest();
});

btnMinus[1].addEventListener('click', (e) => {
  e.preventDefault();
  if (childrens <= 0) {
    return childrens;
  }
  childrens--;
  child.textContent = childrens;
  itemGuest();
});

btnPlus[2].addEventListener('click', (e) => {
  e.preventDefault();
  if (babies >= 2) {
    return babies;
  }
  babies++;
  baby.textContent = babies;
  itemGuest();
});

btnMinus[2].addEventListener('click', (e) => {
  e.preventDefault();
  if (babies <= 0) {
    return babies;
  }
  babies--;
  baby.textContent = babies;
  itemGuest();
});

// clear & hide & search

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  countGuest.value = '';
  mens = 0;
  childrens = 0;
  babies = 0;
  men.textContent = 0;
  child.textContent = 0;
  baby.textContent = 0;
});

hideBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleRoom();
});