import { autorize } from "./autorize.js";

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
  let countGuest = document.querySelector('.guest');
  let men = document.querySelector('#men'),
      child = document.querySelector('#child'),
      baby = document.querySelector('#baby');

  let mens = 0,
      childrens = 0,
      babies = 0;

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

  tableRoom.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target && e.target.matches("button.men__plus")) {
      if (mens >= 4) {
        return mens;
      }
      mens++;
      men.textContent = mens;
      itemGuest();
    }
    if (e.target && e.target.matches("button.men__minus")) {
      if (mens <= 0) {
        return mens;
      }
      mens--;
      men.textContent = mens;
      itemGuest();
    }
    if (e.target && e.target.matches("button.child__plus")) {
      if (childrens >= 2) {
        return childrens;
      }
      childrens++;
      child.textContent = childrens;
      itemGuest();
    }
    if (e.target && e.target.matches("button.child__minus")) {
      if (childrens <= 0) {
        return childrens;
      }
      childrens--;
      child.textContent = childrens;
      itemGuest();
    }
    if (e.target && e.target.matches("button.baby__plus")) {
      if (babies >= 2) {
        return babies;
      }
      babies++;
      baby.textContent = babies;
      itemGuest();
    }
    if (e.target && e.target.matches("button.baby__minus")) {
      if (babies <= 0) {
        return babies;
      }
      babies--;
      baby.textContent = babies;
      itemGuest();
    }
  });

  // clear
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
};

autorize();