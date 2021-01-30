// calendar

$('.datepicker-here').datepicker({
  minDate: new Date(),
});
$('.arrival').datepicker({
  onSelect: function (fd, d, picker) {
    $(".arrival").val(fd.split("-")[0]);
    $(".departure").val(fd.split("-")[1]);
  }
});
$(function() {
  $('.datepicker-here').datepicker({
    minDate: new Date(),
    todayButton: true,
    language: {
      today: "Применить",
    },
  });
});

// dropdown guest

const tableBedroom = document.querySelector('.table__bedroom');
const guest = document.querySelector('.guest');
const btnPlus = document.querySelectorAll('.table__plus');
const btnMinus = document.querySelectorAll('.table__minus');
let countNumber = document.querySelector('.table__number');
let countGuest = document.querySelector('#countGuest');

let men = document.querySelector('#men'),
    child = document.querySelector('#child'),
    baby = document.querySelector('#baby');

let mens = 0,
    childrens = 0,
    babies = 0;

function toggleMenu() {
  tableBedroom.classList.toggle('active');
}

guest.addEventListener('click', toggleMenu);

document.addEventListener('click', (e) => {
  const menuElem = e.target == tableBedroom || tableBedroom.contains(e.target);
  const inputBtn = e.target == guest;
  const menuToggle = tableBedroom.classList.contains('active');

  if (!menuElem && !inputBtn && menuToggle) {
    toggleMenu();
  }
});

// adding guests

btnPlus[0].addEventListener('click', (e) => {
  e.preventDefault();

  if (mens >= 4) {
    btnPlus[0].style.opacity = '.25';
    return mens;
  }

  if (mens <= 3) {
    btnPlus[0].style.opacity = '';
    btnMinus[0].style.opacity = '';
  }

  mens++;
  men.textContent = mens;
  countGuest.value = mens + childrens + babies;

  if (countGuest.value == 1) {
    countGuest.value = mens + childrens + babies + ' гость';
  } else if (countGuest.value > 1 && countGuest.value <= 4) {
    countGuest.value = mens + childrens + babies + ' гостя';
  } else {
    countGuest.value = mens + childrens + babies + ' гостей';
  }
});

btnMinus[0].addEventListener('click', (e) => {
  e.preventDefault();

  if (mens <= 0) {
    btnMinus[0].style.opacity = '.25';
    return mens;
  }

  if (mens >= 1) {
    btnMinus[0].style.opacity = '';
    btnPlus[0].style.opacity = '';
  }

  mens--;
  men.textContent = mens;
  countGuest.value = mens + childrens + babies;

  if (countGuest.value == 1) {
    countGuest.value = mens + childrens + babies + ' гость';
  } else if (countGuest.value > 1 && countGuest.value <= 4) {
    countGuest.value = mens + childrens + babies + ' гостя';
  } else if (countGuest.value > 4) {
    countGuest.value = mens + childrens + babies + ' гостей';
  } else {
    countGuest.value = '';
  }
});

btnPlus[1].addEventListener('click', (e) => {
  e.preventDefault();

  if (childrens >= 2) {
    btnPlus[1].style.opacity = '.25';
    return childrens;
  }

  if (childrens <= 1) {
    btnPlus[1].style.opacity = '';
    btnMinus[1].style.opacity = '';
  }

  childrens++;
  child.textContent = childrens;
  countGuest.value = mens + childrens + babies;

  if (countGuest.value == 1) {
    countGuest.value = mens + childrens + babies + ' гость';
  } else if (countGuest.value > 1 && countGuest.value <= 4) {
    countGuest.value = mens + childrens + babies + ' гостя';
  } else if (countGuest.value > 4) {
    countGuest.value = mens + childrens + babies + ' гостей';
  } else {
    countGuest.value = '';
  }
});

btnMinus[1].addEventListener('click', (e) => {
  e.preventDefault();

  if (childrens <= 0) {
    btnMinus[1].style.opacity = '.25';
    return childrens;
  }

  if (childrens >= 1) {
    btnMinus[1].style.opacity = '';
    btnPlus[1].style.opacity = '';
  }

  childrens--;
  child.textContent = childrens;
  countGuest.value = mens + childrens + babies;

  if (countGuest.value == 1) {
    countGuest.value = mens + childrens + babies + ' гость';
  } else if (countGuest.value > 1 && countGuest.value <= 4) {
    countGuest.value = mens + childrens + babies + ' гостя';
  } else if (countGuest.value > 4) {
    countGuest.value = mens + childrens + babies + ' гостей';
  } else {
    countGuest.value = '';
  }
});

btnPlus[2].addEventListener('click', (e) => {
  e.preventDefault();

  if (babies >= 2) {
    btnPlus[2].style.opacity = '.25';
    return babies;
  }

  if (babies <= 1) {
    btnPlus[2].style.opacity = '';
    btnMinus[2].style.opacity = '';
  }

  babies++;
  baby.textContent = babies;
  countGuest.value = mens + childrens + babies;

  if (countGuest.value == 1) {
    countGuest.value = mens + childrens + babies + ' гость';
  } else if (countGuest.value > 1 && countGuest.value <= 4) {
    countGuest.value = mens + childrens + babies + ' гостя';
  } else if (countGuest.value > 4) {
    countGuest.value = mens + childrens + babies + ' гостей';
  } else {
    countGuest.value = '';
  }
});

btnMinus[2].addEventListener('click', (e) => {
  e.preventDefault();

  if (babies <= 0) {
    btnMinus[2].style.opacity = '.25';
    return babies;
  }

  if (babies >= 1) {
    btnMinus[2].style.opacity = '';
    btnPlus[2].style.opacity = '';
  }

  babies--;
  baby.textContent = babies;
  countGuest.value = mens + childrens + babies;

  if (countGuest.value == 1) {
    countGuest.value = mens + childrens + babies + ' гость';
  } else if (countGuest.value > 1 && countGuest.value <= 4) {
    countGuest.value = mens + childrens + babies + ' гостя';
  } else if (countGuest.value > 4) {
    countGuest.value = mens + childrens + babies + ' гостей';
  } else {
    countGuest.value = '';
  }
});

// registration & login