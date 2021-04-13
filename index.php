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
  <title>Toxin - Бронирование номеров</title>

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
  <script src="js/modules/openRooms.js" defer></script>
  <script src="js/main.js" type="module" defer></script>
</head>
<body>

  <?php
    include('header.php');
  ?>

  <main class="hero">
    <div class="background swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="hero__slide-1">
            <p class="background__text">Лучшие номера для вашей работы, отдыха и просто вдохновения</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="hero__slide-2">
            <p class="background__text">Лучшие номера для вашей работы, отдыха и просто вдохновения</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="hero__slide-3">
            <p class="background__text">Лучшие номера для вашей работы, отдыха и просто вдохновения</p>
          </div>
        </div>
      </div>
    </div>
    <!-- /. swiper-container -->
    <div class="container container__sidebar">
      <div class="table">
        <form action="#" class="table__form">
          <h2 class="table__title">Найдём номера под ваши пожелания</h2>
          <div class="table__data">
            <div class="table__arrival">
              <label for="arrival" class="table__label">Прибытие</label>
              <input id="start" class="datepickers arrival" placeholder="ДД.ММ.ГГГГ" readonly>
              <img src="img/icons/arrow_down.svg" class="table__arrival--arrow" alt="">
            </div>
            <!-- /.table__arrival -->
            <div class="table__departure">
              <label for="departure" class="table__label">Выезд</label>
              <input id="end" class="datepickers departure" placeholder="ДД.ММ.ГГГГ" readonly>
              <img src="img/icons/arrow_down.svg" class="table__departure--arrow" alt="">
            </div>
            <!-- /.table__departure -->
          </div>
          <!-- /.table__data -->
          <div class="table__guest">
            <label for="guest" class="table__label">Гости</label>
            <input class="guest" placeholder="Сколько гостей" readonly>
            <img src="img/icons/arrow_down.svg" class="table__guest--arrow" alt="">
            <div class="table__room">
              <div class="table__adult">
                <p class="table__heading">Взрослые</p>
                <div class="table__buttons">
                  <button class="table__minus men__minus">-</button>
                  <p id="men" class="table__number">0</p>
                  <button class="table__plus men__plus">+</button>
                </div>
              </div>
              <div class="table__children">
                <p class="table__heading">Дети</p>
                <div class="table__buttons">
                  <button class="table__minus child__minus">-</button>
                  <p id="child" class="table__number">0</p>
                  <button class="table__plus child__plus">+</button>
                </div>
              </div>
              <div class="table__baby">
                <p class="table__heading">Младенцы</p>
                <div class="table__buttons">
                  <button class="table__minus baby__minus">-</button>
                  <p id="baby" class="table__number">0</p>
                  <button class="table__plus baby__plus">+</button>
                </div>
              </div>
              <div class="button__interact">
                <button id="clear" class="button__interact--clear">Очистить</button>
                <button id="hide" class="button__interact--apply">Применить</button>
              </div>
            </div>
          </div>
          <!-- /.table__guest -->
          <a id="getRooms" class="search search__button">Подобрать номер<img src="img/icons/arrow_white.svg" class="search__arrow" alt=""></a>
        </form>
        <!-- /.table__form -->
      </div>
      <!-- /.table -->
    </div>
    <!-- /.container -->
  </main>
  <!-- /.hero -->

  <?php
    include('footer.php');
  ?>

</body>
</html>