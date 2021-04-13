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
  <title>Toxin - Ваш Номер</title>

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
  <script src="js/room.js" type="module" defer></script>
</head>
<body>

  <?php
    include('header.php');
  ?>

  <div class="main__room">
    <div class="room__selected">
      <div class="room__background">
        <img src="img/room/image.1.1.jpg" alt="">
        <div class="room__background--col">
          <img class="room__background--small" src="img/room/image.1.2.jpg" alt="">
          <img class="room__background--small" src="img/room/image.1.3.jpg" alt="">
        </div>
      </div>
      <!-- /.sidebar__data -->
      <div class="container">
        <div class="room__description">
          <div class="description__col1">
            <div class="description__number">
              <h2 class="description__title">Сведения о номере</h2>
              <div class="description__comfort">
                <img class="description__img" src="img/icons/smile.svg" alt="">
                <div class="description__block">
                  <span class="room__title--bold">Комфорт</span>
                  <span class="room__title">Шумопоглощающие стены</span>
                </div>
              </div>
              <div class="description__comfort">
                <img class="description__img" src="img/icons/city.svg" alt="">
                <div class="description__block">
                  <span class="room__title--bold">Удобство</span>
                  <span class="room__title">Окно в каждой из спален</span>
                </div>
              </div>
              <div class="description__cosiness">
                <img class="description__img" src="img/icons/fire.svg" alt="">
                <div class="description__block">
                  <span class="room__title--bold">Уют</span>
                  <span class="room__title">Номер оснащён камином</span>
                </div>
              </div>
            </div>
            <!-- /.description__number -->
            <div class="description__impression">
              <h2 class="description__title">Впечатления от номера</h2>
              <div class="description__elem">
                <div class="description__impression--img">
                  <img src="img/icons/chart.svg" alt="">
                </div>
                <div class="description__text">
                  <div class="description__text--elem">
                    <div class="description__orange"></div>
                    <div class="room__title">Великолепно</div>
                  </div>
                  <div class="description__text--elem">
                    <div class="description__green"></div>
                    <div class="room__title">Хорошо</div>
                  </div>
                  <div class="description__text--elem">
                    <div class="description__purple"></div>
                    <div class="room__title">Удовлетворительно</div>
                  </div>
                  <div class="description__text--elem">
                    <div class="description__black"></div>
                    <div class="room__title">Разочарован</div>
                  </div>
                </div>
                <!-- /.description__text -->
              </div>
              <!-- /.description__elem -->
            </div>
            <!-- /.description__impression -->
            <div class="description__feedback">
              <h2 class="description__title">Отзывы посетителей номера</h2>
              <div class="description__men">
                <img width="46" height="46" class="description__avatar" src="img/icons/men.jpg" alt="user: photo">
                <div class="description__block">
                  <span class="room__title--bold">Мурад Сарафанов</span>
                  <span class="room__title">5 дней назад</span>
                </div>
              </div>
              <div class="description__comment">
                <div class="description__like">
                  <label for=""></label>
                  <input class="description__input active" type="text" name="" value="2" readonly>
                </div>
                <div class="description__block">
                  <span class="room__title">Великолепный матрас на кровати в основной спальне! А пуфик вообще
                    потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не
                    жаловался из соседей.</span>
                </div>
              </div>
              <div class="description__women">
                <img width="46" height="46" class="description__avatar" src="img/icons/women.jpg" alt="user: photo">
                <div class="description__block">
                  <span class="room__title--bold">Патрисия Стёклышкова</span>
                  <span class="room__title">Неделю назад</span>
                </div>
              </div>
              <div class="description__comment">
                <div class="description__like">
                  <label for=""></label>
                  <input class="description__input" type="text" name="" value="2" readonly>
                </div>
                <div class="description__block">
                  <span class="room__title">Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую
                    заказать, каждый день новое блюдо и десерт как комплимент</span>
                </div>
              </div>
              <!-- /.description__comment -->
            </div>
            <!-- /.description__feedback -->
            <div class="rules">
              <div class="description__rules">
                <h2 class="description__rules--title">Правила</h2>
                <div class="description__rules--elem">
                  <div class="description__text">
                    <div class="description__rules--text">
                      <div class="description__grey"></div>
                      <div class="room__title">Нельзя с питомцами</div>
                    </div>
                    <div class="description__rules--text">
                      <div class="description__grey"></div>
                      <div class="room__title">Без вечеринок и мероприятий</div>
                    </div>
                    <div class="description__rules--text">
                      <div class="description__grey"></div>
                      <div class="room__title">Время прибытия — после 13:00,<br>
                        а выезд до 12:00</div>
                    </div>
                  </div>
                  <!-- /.description__text -->
                </div>
                <!-- /.description__elem -->
              </div>
              <!-- /.description__rules -->
              <div class="description__cancel">
                <h2 class="description__title">Отмена</h2>
                <div class="description__comment--rules">
                  <span class="room__title">Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5
                    дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.</span>
                </div>
                <!-- /.description__comment -->
              </div>
              <!-- /.description__cancel -->
            </div>
            <!-- /.rules -->
          </div>
          <!-- /.description__col1 -->
          <div class="description__col2">
            <div class="description__table">
              <form action="#" class="table__form">
                <div class="room__fees">
                  <div class="room__data--number">
                    <span class="room__number--elem">№</span>
                    <span class="room__number--big">888</span>
                    <span class="room__luks">люкс</span>
                  </div>
                  <div class="room__data--cash">
                    <span class="room__cash">9 990₽</span>
                    <span class="room__day">в сутки</span>
                  </div>
                </div>
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
                        <button class="table__minus">-</button>
                        <p id="men" class="table__number">0</p>
                        <button class="table__plus">+</button>
                      </div>
                    </div>
                    <div class="table__children">
                      <p class="table__heading">Дети</p>
                      <div class="table__buttons">
                        <button class="table__minus">-</button>
                        <p id="child" class="table__number">0</p>
                        <button class="table__plus">+</button>
                      </div>
                    </div>
                    <div class="table__baby">
                      <p class="table__heading">Младенцы</p>
                      <div class="table__buttons">
                        <button class="table__minus">-</button>
                        <p id="baby" class="table__number">0</p>
                        <button class="table__plus">+</button>
                      </div>
                    </div>
                    <div class="button__interact">
                      <button id="clear" class="button__interact--clear">Очистить</button>
                      <button id="hide" class="button__interact--apply">Применить</button>
                    </div>
                  </div>
                </div>
                <!-- /.table__guest -->
                <div class="description__fees">
                  <div class="description__fees--elem">
                    <span class="room__title">9 990₽ х 4 суток</span>
                    <span class="room__title">39 960₽</span>
                  </div>
                  <div class="description__fees--elem">
                    <span class="room__title">Сбор за услуги: скидка 2 179₽</span>
                    <span class="room__title">0₽</span>
                  </div>
                  <div class="description__fees--elem">
                    <span class="room__title--height">Сбор за дополнительные<br> услуги</span>
                    <span class="room__title">300₽</span>
                  </div>
                </div>
                <div class="description__fees--elem">
                  <span class="description__title">Итого</span>
                  <span class="description__title">38 081₽</span>
                </div>
                <button id="getRooms" class="search description__search">Забронировать<img
                    src="img/icons/arrow_white.svg" class="search__arrow" alt=""></button>
              </form>
              <!-- /.table__form -->
            </div>
            <!-- /.table -->
          </div>
          <!-- /.description__col2 -->
        </div>
        <!-- /.room__description -->
      </div>
      <!-- /.room__selected -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.main__room -->

  <?php
    include('footerRoom.php');
  ?>

</body>
</html>