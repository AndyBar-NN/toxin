// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCo8lNJxGHjYwyLdjWchgUPOU7kbgbUZMQ",
  authDomain: "toxin-2a578.firebaseapp.com",
  projectId: "toxin-2a578",
  storageBucket: "toxin-2a578.appspot.com",
  messagingSenderId: "739885627103",
  appId: "1:739885627103:web:497da570bd428054501b6a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reg
const validEmail = /^\w+@\w+\.\w{2,}$/;
const logBtn = document.querySelectorAll('#logBtn'),
      regBtn = document.querySelectorAll('#regBtn'),
      getRooms = document.querySelector('#getRooms'),
      mainSidebar = document.querySelector('.main__sidebar'),
      footerRoom = document.querySelector('.footer__room'),
      loginInput = document.querySelector('.login'),
      passwordInput = document.querySelector('.password'),
      formReg = document.querySelector('.form__reg'),
      formLog = document.querySelector('.form__log'),
      mainReg = document.querySelector('.main__reg'),
      mainLog = document.querySelector('.main__log'),
      roomsElem = document.querySelector('.rooms__elem'),
      mainRoom = document.querySelector('.main__room'),
      hero = document.querySelector('.hero'),
      logRegBtn = document.querySelector('.buttons'),
      logo = document.querySelectorAll('#logo'),
      loginName = document.querySelector('.menu__name'),
      editBtn = document.querySelector('.menu__edit'),
      editForm = document.querySelector('.edit__form'),
      editName = document.querySelector('.edit__name'),
      exitElem = document.querySelector('.menu__exit'),
      nameElem = document.querySelector('.menu__name--login');
const listUsers = [
        {
          email: 'hrusha@mail.com',
          password: 'qwerty',
          displayName: 'hrusha',
          surname: 'pig'
        }
      ];

const setUsers = {
  user: null,
  initUser(handler) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
      if (handler) handler();
    });
  },
  logIn(email, password, handler) {
    if (!validEmail.test(email)) { // test - проверяет совпадения
      alert("Введен неправильный email");
      return;
    }
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(openHero)
      .then(handler)
      .catch(err => {
        const errCode = err.code;
        const errMessage = err.message;
        if (errCode === 'auth/wrong-password') {
          console.log(errMessage);
          alert('Неверный пароль');
        } else if (errCode === 'auth/user-not-found') {
          console.log(errMessage);
          alert('Пользователь не найден');
        } else {
          alert(errMessage);
        }
        console.log(err);
      });
  },
  logOut() {
    firebase.auth().signOut();
  },
  regIn(email, password, handler) {
    if (!validEmail.test(email)) { // test - проверяет совпадения
      alert("Введен неправильный email");
      return;
    }
    if (!email.trim() || !password.trim()) { // trim - убирает пробелы по бокам
      alert("Введите данные");
      return;
    }
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(openHero)
      .then(() => {
        this.editUser(email.substring(0, email.indexOf('@')), handler);
      })
      .catch(err => {
        const errCode = err.code;
        const errMessage = err.message;
        if (errCode === 'auth/weak-password') {
          console.log(errMessage);
          alert('Слабый пароль');
        } else if (errCode === 'auth/email-already-in-use') {
          console.log(errMessage);
          alert('Этот email уже используется');
        } else {
          alert(errMessage);
        }
        console.log(err);
      });
  },
  editUser(displayName, handler) {
    const user = firebase.auth().currentUser;
    if (displayName) {
      user.updateProfile({
        displayName
      }).then(handler);
    }
  },
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ', user);
  if (user) {
    logRegBtn.style.display = 'none';
    loginName.style.display = 'inline-flex';
    nameElem.textContent = user.displayName;
  } else {
    loginName.style.display = 'none';
    logRegBtn.style.display = 'inline';
  }
};

setUsers.initUser(toggleAuthDom);

//

function openHero() {
  mainLog.style.display = 'none';
  mainReg.style.display = 'none';
  mainSidebar.style.display = 'none';
  footerRoom.style.cssText = '';
  hero.style.display = 'block';
}

logo.forEach(btn => {
  btn.addEventListener('click', openHero);
});

logBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    hero.style.display = 'none';
    if (mainReg) {
      mainReg.style.display = 'none';
    }
    mainLog.style.display = 'flex';
  });
});

regBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    hero.style.display = 'none';
    if (mainLog) {
      mainLog.style.display = 'none';
    }
    mainReg.style.display = 'flex';
  });
});

getRooms.addEventListener('click', (e) => {
  e.preventDefault();
  hero.style.display = 'none';
  mainSidebar.style.display = 'block';
  footerRoom.style.cssText = 'margin-top: 63px; border-top: 1px solid rgba(31, 32, 65, 0.25)';
});

// room

roomsElem.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    mainSidebar.style.display = 'none';
    mainRoom.style.display = 'block';
  }
});

//

const init = () => {
  formLog.addEventListener('submit', (e) => {
    e.preventDefault();
    setUsers.logIn(loginInput.value, passwordInput.value, toggleAuthDom);
    formLog.reset();
  });
  formReg.addEventListener('submit', (e) => {
    e.preventDefault();
    setUsers.regIn(loginInput.value, passwordInput.value, toggleAuthDom);
    formReg.reset();
  });

  editBtn.addEventListener('click', (e) => {
    e.preventDefault();
    editForm.classList.toggle('active');
    editName.value = setUsers.user.displayName;
    editForm.reset();
  });
  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    setUsers.editUser(editName.value, toggleAuthDom);
    editForm.classList.remove('active');
  });
  document.addEventListener('click', (e) => {
    const menuElem = e.target == editForm || editForm.contains(e.target);
    const inputBtn = e.target == editBtn;
    const menuToggle = editForm.classList.contains('active');

    if (!menuElem && !inputBtn && menuToggle) {
      editForm.classList.toggle('active');
    }
  });

  exitElem.addEventListener('click', (e) => {
    e.preventDefault();
    setUsers.logOut();
  });
};

document.addEventListener('DOMContentLoaded', init);