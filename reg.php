<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="img/group.ico">
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/datepicker.css">

  <link rel="stylesheet" href="css/nouislider.css">

  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
  <link rel="stylesheet" href="css/style.css">
  <title>Toxin - Регистрация</title>

  <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/8.2.8/firebase-app.js" defer></script>
  <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
  <script src="https://www.gstatic.com/firebasejs/8.2.8/firebase-auth.js" defer></script>
  <script src="https://www.gstatic.com/firebasejs/8.2.8/firebase-database.js" defer></script>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" defer></script>
  <script src="js/datepicker.js" defer></script>

  <script src="https://unpkg.com/swiper/swiper-bundle.min.js" defer></script>
  <script src="js/jquery.mask.min.js" defer></script>
  <script src="js/reg.js" defer></script>
</head>
<body>

  <?php
    include('header.php');
  ?>

  <div class="main__reg">
    <div class="container">
      <div class="reg">
        <form class="form form__reg">
          <h2 class="reg__title">Регистрация аккаунта</h2>
          <input class="name" type="text" placeholder="Имя" minlength="2">
          <input class="surname " type="text" placeholder="Фамилия" minlength="2">
          <div class="gender">
            <div class="gender__radio">
              <input type="radio" id="input__male" class="radio" name="gender">
              <label for="input__male" class="label">Мужчина</label>
            </div>
            <div class="gender__radio gender__female">
              <input type="radio" id="input__female" class="radio" name="gender">
              <label for="input__female" class="label">Женщина</label>
            </div>
          </div>
          <!-- /.gender -->
          <div class="birthdate">
            <label for="" class="birthdate__label label__title">Дата рождения</label>
            <input type="tel" class="birthdate__input" placeholder="ДД.ММ.ГГГГ">
          </div>
          <div class="authorize">
            <label class="label__title">Данные для входа в сервис</label>
            <input class="login" type="email" placeholder="Email" minlength="3">
            <input class="password" type="password" placeholder="Пароль" minlength="6">
          </div>
          <!-- /.authorize -->
          <div class="subscribe">
            <input class="switch" type="checkbox" id="subscribe__switch" name="switch">
            <label class="mailing" for="subscribe__switch">Получать спецпредложения</label>
          </div>
          <button class="button button__reg pay">Зарегестрироваться<img class="arrow" src="img/icons/arrow_white.svg"
              alt=""></button>
          <div class="click__login">
            <p class="click__title">Уже есть аккаунт на Toxin</p>
            <a href="log.php" class="click__button button__login button">Войти</a>
          </div>
        </form>
      </div>
      <!-- /.reg -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.main__reg -->

  <?php
    include('footer.php');
  ?>

</body>
</html>