'use strict'
import { autorize } from "./modules/autorize.js";

export const main = () => {
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
        clearBtn = document.querySelector('#clear');
  let countGuest = document.querySelectorAll('.guest');
  let men = document.querySelector('#men'),
      child = document.querySelector('#child'),
      baby = document.querySelector('#baby');

  let sum = {
    mens: 0,
    childrens: 0,
    babies: 0
  };

  // adding guests
  function itemGuest() {
    countGuest.forEach((item) => {
      item.value = sum.mens + sum.childrens + sum.babies;
      if (item.value == 1) {
        item.value += ' гость';
      } else if (item.value > 1 && item.value <= 4) {
        item.value += ' гостя';
      } else if (item.value > 4) {
        item.value += ' гостей';
      } else {
        item.value = '';
      }
    });
  }

  tableRoom.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target && e.target.matches("button.men__plus")) {
      if (sum.mens >= 4) {
        return sum.mens;
      }
      sum.mens++;
      men.textContent = sum.mens;
      itemGuest();
    }
    if (e.target && e.target.matches("button.men__minus")) {
      if (sum.mens <= 0) {
        return sum.mens;
      }
      sum.mens--;
      men.textContent = sum.mens;
      itemGuest();
    }
    if (e.target && e.target.matches("button.child__plus")) {
      if (sum.childrens >= 2) {
        return sum.childrens;
      }
      sum.childrens++;
      child.textContent = sum.childrens;
      itemGuest();
    }
    if (e.target && e.target.matches("button.child__minus")) {
      if (sum.childrens <= 0) {
        return sum.childrens;
      }
      sum.childrens--;
      child.textContent = sum.childrens;
      itemGuest();
    }
    if (e.target && e.target.matches("button.baby__plus")) {
      if (sum.babies >= 2) {
        return sum.babies;
      }
      sum.babies++;
      baby.textContent = sum.babies;
      itemGuest();
    }
    if (e.target && e.target.matches("button.baby__minus")) {
      if (sum.babies <= 0) {
        return sum.babies;
      }
      sum.babies--;
      baby.textContent = sum.babies;
      itemGuest();
    }
  });

  // clear
  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    countGuest.forEach(item => item.value = '');
    sum.mens = 0;
    sum.childrens = 0;
    sum.babies = 0;
    men.textContent = 0;
    child.textContent = 0;
    baby.textContent = 0;
  });
};

autorize();
main();