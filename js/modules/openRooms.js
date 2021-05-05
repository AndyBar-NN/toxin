'use strict'
const loginName = document.querySelector('.menu__name'),
      getRooms = document.querySelector('#getRooms');

getRooms.addEventListener('click', (e) => {
  e.preventDefault();
  if (!loginName.classList.contains('active')) {
    alert('Пожалуйста войдите в аккаунт');
  } else {
    document.location.href = "rooms.html";
  }
});