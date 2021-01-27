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

function openMenu() {
  tableBedroom.classList.add('active');
};

guest.addEventListener('click', openMenu);

document.addEventListener('click', (event) => {
  const target = event.target;
  const menuElem = target == tableBedroom || tableBedroom.contains(target);
  const inputBtn = target == guest;
  const menuToggle = tableBedroom.classList.contains('active');

  if (!menuElem && !inputBtn && menuToggle) {
    openMenu();
  }
});

// adding guests

const btnPlus = document.querySelector('.table__plus');
const btnMinus = document.querySelector('.table__minus');
let numberGuest = document.querySelector('.table__number');

btnPlus.addEventListener('click', () => {
  console.log('onClick');
});

btnMinus.addEventListener('click', () => {
  console.log('offClick');
});

// registration & login