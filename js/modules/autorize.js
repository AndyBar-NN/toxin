'use strict'
export const autorize = () => {
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
        editForm = document.querySelector('.edit__form'),
        editName = document.querySelector('.edit__name'),
        editBtn = document.querySelector('.menu__edit'),
        exitElem = document.querySelector('.menu__exit'),
        nameElem = document.querySelector('.menu__name--login');
  //
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
    logOut() {
      firebase.auth().signOut();
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

  const init = () => {
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
      openHero();
    });
  };

  window.addEventListener('DOMContentLoaded', init);
};