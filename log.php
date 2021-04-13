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
  <title>Toxin - Авторизация</title>

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
  <script src="js/log.js" type="module" defer></script>
</head>
<body>

  <?php
    include('header.php');
  ?>

  <div class="main__log">
    <div class="container">
      <div class="reg">
        <form action="#" class="form form__log">
          <h2 class="reg__title">Войти</h2>
          <div class="authorize">
            <input type="email" class="login" placeholder="Email">
            <input type="password" class="password" placeholder="Пароль">
          </div>
          <!-- /.authorize -->
          <button class="button button__reg pay">Войти<img class="arrow" src="img/icons/arrow_white.svg"
              alt=""></button>
          <div class="click__login">
            <p class="click__title">Нет аккаунта на Toxin?</p>
            <a href="reg.php" class="click button__login button">Создать</a>
          </div>
        </form>
      </div>
      <!-- /.reg -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.main__log -->

  <?php
    include('footer.php');
  ?>

</body>
</html>