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

const validEmail = /^\w+@\w+\.\w{2,}$/;
const logRegBtn = document.querySelector('.buttons'),
      loginName = document.querySelector('.menu__name'),
      nameElem = document.querySelector('.menu__name--login'),
      loginInput = document.querySelector('.login'),
      passwordInput = document.querySelector('.password'),
      formLog = document.querySelector('.form__log');
//
const listUsers = [{
  email: 'hrusha@mail.com',
  password: 'qwerty',
  displayName: 'hrusha',
  surname: 'pig'
}];

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
    loginName.classList.add('active');
    nameElem.textContent = user.displayName;
  } else {
    loginName.classList.remove('active');
    logRegBtn.style.display = 'inline';
  }
};

setUsers.initUser(toggleAuthDom);

//
function openHero() {
  document.location.href = "index.php";
}

const initLog = () => {
  formLog.addEventListener('submit', (e) => {
    e.preventDefault();
    setUsers.logIn(loginInput.value, passwordInput.value, toggleAuthDom);
    formLog.reset();
  });
};

window.addEventListener('DOMContentLoaded', initLog);