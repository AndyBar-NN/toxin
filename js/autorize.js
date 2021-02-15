$('.datepicker-here').datepicker({
  minDate: new Date(),
});

// reg
const log = document.querySelector('#log'),
      reg = document.querySelector('#reg'),
      logBtn = document.querySelectorAll('#logBtn'),
      regBtn = document.querySelectorAll('#regBtn'),
      loginInput = document.querySelector('.login'),
      passwordInput = document.querySelector('.password'),
      formReg = document.querySelector('.form__reg'),
      formLog = document.querySelector('.form__log'),
      mainReg = document.querySelector('.main__reg'),
      mainLog = document.querySelector('.main__log'),
      hero = document.querySelector('.hero'),
      loginName = document.querySelector('.buttons');
const listUsers = [
        {
          email: 'hrusha@mail.com',
          password: 'qwerty',
          name: 'hrusha',
          surname: 'pig'
        }
      ];

const setUsers = {
  user: null,
  logIn(email, password) {
    console.log(email, password);
  },
  logOut() {
    console.log('ВЫХОД');
  },
  regIn() {
    console.log('Регистрация');
    // if (!this.getUser(email)) {
    //   listUsers.push({
    //     email,
    //     password,
    //     name,
    //     surname,
    //     birthdate,
    //     gender
    //   });
    //   console.log(listUsers);
    // } else {
    //   alert('Пользователь с таким email уже зарегестрирован');
    // }
  }
  // getUser(email) {
  //   return listUsers.find((item) => {
  //     return item.email === email;
  //   });
  // }
};

logBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    hero.innerHTML = '';
    mainLog.style.display = 'flex';
  });
});

regBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    hero.innerHTML = '';
    mainReg.style.display = 'flex';
  });
});

formLog.addEventListener('submit', (e) => {
  e.preventDefault();
  const logVal = loginInput.value;
  const passVal = passwordInput.value;
  setUsers.logIn(logVal, passVal);
});

formReg.addEventListener('submit', (e) => {
  e.preventDefault();
  const logVal = loginInput.value;
  const passVal = passwordInput.value;
  setUsers.regIn(logVal, passVal);
});