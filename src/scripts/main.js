function getNewsData(data) {
  return data.map(news => {
    return `<div class="news-slider__slide news-card swiper-slide">
                    <div class="news-card__top">
                        <div class="news-card__content">
                              <img class="news-card__content-image"
                                   src="${news.newsImageSrc}" alt="">
                            <div class="news-card__content-fade"></div>
                        </div>
                        <div class="news-card__tag">${news.newsType}</div>
                        <div class="news-card__date">
                            <div class="news-card__date-icon">
                                <img src="src/assets/calendar_month.svg" alt="">
                            </div>
                            <div class="news-card__date-time">${news.newsDate}</div>
                        </div>
                    </div>
                    <div class="news-card__bottom">
                        <h3 class="news-card__title">${news.newsTitle}</h3>

                        <p class="news-card__desc">${news.newsDescription}</p>

                        <div class="news-card__btn-wrapper">
                            <div class="news-card__btn">
                                <p class="news-card__btn-title">читать</p>
                                <div class="news-card__btn-icon">
                                    <img src="src/assets/arrow.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
  }).join(' ')
}

function renderNewSection(newsData) {
  document.querySelector('.news-slider__container').innerHTML = newsData
}

function getFooterData(data) {
  return data.map((column) => {
    return `<div class="footer__column footer-column">
                <p class="footer-column__title">${column.columnTitle.toLowerCase()}</p>
                <ul class="footer-column__list">
                    ${column.columnLinks.map((link) => {
      return `<li class="footer-column__list-item">
                        <a href="" class="footer-column__link">${link.linkTitle.toLowerCase()}</a>
                      </li>`
    }).join(' ')}
                </ul>
            </div>`
  }).join(' ')
}

function renderFooter(footerData) {
  document.querySelector('.footer__navigation').innerHTML = footerData
}

const footerData = [
  {
    _id: '1',
    columnTitle: "Афиша",
    columnLinks: [
      {
        _id: '1',
        linkTitle: "сейчас в кино",
        link: '#',
      },
      {
        _id: '2',
        linkTitle: "скоро",
        link: '#',
      },
      {
        _id: '3',
        linkTitle: "+vibe",
        link: '#',
      },
      {
        _id: '4',
        linkTitle: "детям",
        link: '#',
      },
    ]
  },
  {
    _id: '2',
    columnTitle: "для гостей",
    columnLinks: [
      {
        _id: '1',
        linkTitle: "программа лояльности",
        link: '#',
      },
      {
        _id: '2',
        linkTitle: "подарочные карты",
        link: '#',
      },
      {
        _id: '3',
        linkTitle: "электронные подарочные карты",
        link: '#',
      },
      {
        _id: '4',
        linkTitle: "абонементы",
        link: '#',
      },
      {
        _id: '5',
        linkTitle: "закрытый клуб +vibe",
        link: '#',
      },
      {
        _id: '6',
        linkTitle: "услуги",
        link: '#',
      },
      {
        _id: '7',
        linkTitle: "новости и акции",
        link: '#',
      },
    ]
  },
  {
    _id: '3',
    columnTitle: "пространства",
    columnLinks: [
      {
        _id: '1',
        linkTitle: "vibe в ТРЦ Dana Mall",
        link: '#',
      },
      {
        _id: '2',
        linkTitle: "vibe в ТРЦ Palazzo",
        link: '#',
      },
      {
        _id: '3',
        linkTitle: "vibe в ТРК Triniti",
        link: '#',
      },
      {
        _id: '4',
        linkTitle: "vibe в ТРЦ Arena City",
        link: '#',
      },
    ]
  },
  {
    _id: '4',
    columnTitle: "о нас",
    columnLinks: [
      {
        _id: '1',
        linkTitle: "сотрудничество",
        link: '#',
      },
      {
        _id: '2',
        linkTitle: "аренда залов",
        link: '#',
      },
      {
        _id: '3',
        linkTitle: "карьера",
        link: '#',
      },
      {
        _id: '4',
        linkTitle: "контакты",
        link: '#',
      },
    ]
  },
  {
    _id: '5',
    columnTitle: "полезная информация",
    columnLinks: [
      {
        _id: '1',
        linkTitle: "документы",
        link: '#',
      },
      {
        _id: '2',
        linkTitle: "FAQ",
        link: '#',
      },
      {
        _id: '3',
        linkTitle: "скачать билет",
        link: '#',
      },
    ]
  },
]

const newsData = [
  {
    _id: '0',
    newsTitle: 'Любовь в каждом прикосновении',
    newsDate: '14 февраля',
    newsType: 'Новость',
    newsDescription: 'Покупайте билеты на сеансы с 17:00 до 21:00 на места Love Seat и Love Seat Recliner и получайте бокс с кремами от MODUM в подарок!',
    newsImageSrc: 'src/assets/news/fake-cover.png',
    newsLinkTo: '#'
  },
  {
    _id: '1',
    newsTitle: 'Акция Vibeday в Гродно: второй билет + кофе в подарок!',
    newsDate: '29 января',
    newsType: 'Акция',
    newsDescription: 'Февраль — месяц, когда понедельник не будет таким уж тяжелым! Мы совместно с нашим партнером Minges запускаем Vibeday — специальную акцию понедельника для всех любителей хороших фильмов и вкусного кофе!',
    newsImageSrc: 'src/assets/news/fake-cover%20(2).png',
    newsLinkTo: '#'
  },
  {
    _id: '2',
    newsTitle: 'Закрытый клуб +Vibe',
    newsDate: '27 января',
    newsType: 'Новость',
    newsDescription: 'Специально для тех, кто не представляет свою жизнь без искусства и саморазвития, мы придумали отличную идею!',
    newsImageSrc: 'src/assets/news/fake-cover%20(3).png',
    newsLinkTo: '#'
  },
  {
    _id: '3',
    newsTitle: 'Вкус сезона в ваших руках!',
    newsDate: '22 января',
    newsType: 'Новость',
    newsDescription: '22 января — Всемирный день попкорна! В этот день у вас будет уникальная возможность стать настоящим экспертом в попкорне и выбрать следуюший вкус сезонного попкорна!',
    newsImageSrc: 'src/assets/news/fake-cover%20(4).png',
    newsLinkTo: '#'
  },
  {
    _id: '4',
    newsTitle: 'Дарим билеты в кино за отзывы',
    newsDate: '06 ноября',
    newsType: 'Акция',
    newsDescription: 'Оставь отзыв на одном из ресурсов (Google или Яндекс Картах) и участвуй в розыгрыше билетов в кино!',
    newsImageSrc: 'src/assets/news/fake-cover%20(9).png',
    newsLinkTo: '#'
  },
  {
    _id: '5',
    newsTitle: 'Выходные вкуснее с МТБанком и Visa',
    newsDate: '01 октября',
    newsType: 'Акция',
    newsDescription: 'При покупке 2-ух и более билетов на сеансы в выходные дни вы можете получить Double Pack: Попкорн + Lay &#x27;s из печи всего за 10 копеек!',
    newsImageSrc: 'src/assets/news/fake-cover%20(5).png',
    newsLinkTo: '#'
  },
  {
    _id: '6',
    newsTitle: 'Вкусный сезон с Visa Extra',
    newsDate: '26 сентября',
    newsType: 'Новость',
    newsDescription: 'С 25 сентября по 31 декабря все пользователи Visa Extra могут получить попкорн М от Vibe всего за 10 копеек',
    newsImageSrc: 'src/assets/news/fake-cover%20(7).png',
    newsLinkTo: '#'
  },
  {
    _id: '7',
    newsTitle: 'Прямая трансляция презентации Apple',
    newsDate: '09 сентября',
    newsType: 'Новость',
    newsDescription: 'Вы первыми узнаете, каким будет новый iPhone 16 и другие Apple-новинки!',
    newsImageSrc: 'src/assets/news/fake-cover%20(8).png',
    newsLinkTo: '#'
  },
  {
    _id: '8',
    newsTitle: 'Persona vs Персонажи',
    newsDate: '06 сентября',
    newsType: 'Новость',
    newsDescription: 'Специальный проект в рамках юбилейного «Осеннего салона»',
    newsImageSrc: 'src/assets/news/fake-cover%20(9).png',
    newsLinkTo: '#'
  },
  {
    _id: '9',
    newsTitle: 'Мир привилегий Visa!',
    newsDate: '12 июля',
    newsType: 'Акция',
    newsDescription: 'При оплате билетов премиальными платежными картами Visa вы получаете скидку!',
    newsImageSrc: 'src/assets/news/fake-cover%20(10).png',
    newsLinkTo: '#'
  },
  {
    _id: '10',
    newsTitle: 'Билеты и попкорн в подарок с картой Visa от Белагропромбанка',
    newsDate: '01 июля',
    newsType: 'Акция',
    newsDescription: 'Купите 1 билет на воскресный сеанс в Silver Screen в ArenaCity и получите еще 2 билета и попкорн в подарок!',
    newsImageSrc: 'src/assets/news/fake-cover%20(11).png',
    newsLinkTo: '#'
  },
  {
    _id: '11',
    newsTitle: 'Прямая трансляция  Евро-2024 в Vibe!',
    newsDate: '24 июня',
    newsType: 'Новость',
    newsDescription: 'Смотрите самое захватывающее спортивное событие этого лета на большом экране!',
    newsImageSrc: 'src/assets/news/fake-cover%20(12).png',
    newsLinkTo: '#'
  },
  {
    _id: '12',
    newsTitle: 'Пижамная вечеринка в честь дня рождения кинозала MTB Kids by Visa',
    newsDate: '04 июня',
    newsType: 'Новость',
    newsDescription: 'Пижамы, фокусы, мыльные пузыри и бой подушками…Все это было 1 июня в честь дня рождения детского кинозала MTB Kids by Visa, открытого в партнерстве МТБанка, платежной системы Visa и кинопространства Vibe.',
    newsImageSrc: 'src/assets/news/fake-cover%20(13).png',
    newsLinkTo: '#'
  },
  {
    _id: '13',
    newsTitle: 'Огненная новость для фанатов «Mad Max» и Джорджа Миллера',
    newsDate: '03 июня',
    newsType: 'Новость',
    newsDescription: 'Только 3 дня: 3, 4, 5 июня «Безумный Макс: Дорога ярости» на больших экранах в Vibe и Silver Screen!',
    newsImageSrc: 'src/assets/news/fake-cover%20(14).png',
    newsLinkTo: '#'
  },
  {
    _id: '14',
    newsTitle: 'В кино за 10 копеек!',
    newsDate: '01 июня',
    newsType: 'Новость',
    newsDescription: 'Предпоказ мультфильма «Последний дракон» для отличников всего за 10 копеек!',
    newsImageSrc: 'src/assets/news/fake-cover%20(15).png',
    newsLinkTo: '#'
  },
  {
    _id: '15',
    newsTitle: 'Детский беспредел в кино!',
    newsDate: '01 июня',
    newsType: 'Новость',
    newsDescription: 'Детский беспредел в кино!',
    newsImageSrc: 'src/assets/news/fake-cover%20(16).png',
    newsLinkTo: '#'
  },
  {
    _id: '16',
    newsTitle: 'Ночь музеев: точка притяжения',
    newsDate: '15 мая',
    newsType: 'Новость',
    newsDescription: 'Кинопространство Vibe и проект +Vibe присоединяются к международной акции «Ночь музеев» и приглашают вас в гости!',
    newsImageSrc: 'src/assets/news/fake-cover%20(7).png',
    newsLinkTo: '#'
  },
  {
    _id: '17',
    newsTitle: 'DOUBLE PACK: Попкорн + Lay &#x27;s из печи уже в Vibe и Silver Screen!',
    newsDate: '01 мая',
    newsType: 'Новость',
    newsDescription: 'Вы ждали? Мы сделали! Фирменный попкорн и хрустящие чипсы, что может быть вкуснее этого дуэта для кинопросмотра?',
    newsImageSrc: 'src/assets/news/fake-cover%20(6).png',
    newsLinkTo: '#'
  },
  {
    _id: '18',
    newsTitle: 'Открылось детское кинопространство в Vibe ТРК TRINITI г. Гродно!',
    newsDate: '05 апреля',
    newsType: 'Новость',
    newsDescription: 'Новый детский кинозал 1 Kids и детская игровая зона порадуют юных киноманов и их родителей!',
    newsImageSrc: 'src/assets/news/fake-cover%20(5).png',
    newsLinkTo: '#'
  },
  {
    _id: '19',
    newsTitle: 'Абонементы в кино!',
    newsDate: '28 марта',
    newsType: 'Новость',
    newsDescription: 'Специально для тех, кто не представляет свою жизнь без кинопремьер на большом экране, мы придумали отличную идею, как ходить в кино и делать это с ощутимой выгодой - купить абонемент в Vibe!',
    newsImageSrc: 'src/assets/news/fake-cover.png',
    newsLinkTo: '#'
  },
  {
    _id: '20',
    newsTitle: 'В Vibe стало еще комфортнее - еда и напитки с доставкой в кинозал',
    newsDate: '07 октября',
    newsType: 'Новость',
    newsDescription: 'Опаздываете на долгожданную премьеру в Vibe и забыли перекусить? Заказывайте любые блюда и напитки из кофейни buffet прямо к вашему кинокреслу.',
    newsImageSrc: 'src/assets/news/fake-cover%20(9).png',
    newsLinkTo: '#'
  },
  {
    _id: '21',
    newsTitle: 'Обновление детского кинопространства Vibe Kids в ТРЦ Palazzo!',
    newsDate: '10 августа',
    newsType: 'Новость',
    newsDescription: 'В кинопространстве Vibe в ТРЦ Palazzo обновился детский кинозал и игровая зона BNB Kids - любой маленький гость будет рад повеселиться!',
    newsImageSrc: 'src/assets/news/fake-cover%20(15).png',
    newsLinkTo: '#'
  },
  {
    _id: '22',
    newsTitle: 'Открытие детского кинопространства Vibe Kids в ТРЦ Dana Mall!',
    newsDate: '01 июня',
    newsType: 'Новость',
    newsDescription: '1 июня в кинопространстве Vibe в Dana Mall открылись детский кинозал MTB Kids by Visa и игровая зона.',
    newsImageSrc: 'src/assets/news/fake-cover.png',
    newsLinkTo: '#'
  }
]

window.onscroll = () => {
  const header = document.querySelector('.header')
  const blurClassName = 'blurred-bg'

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.classList.add(blurClassName)
    header.style.height = "80px"
  } else {
    header.classList.remove(blurClassName)
    header.style.height = "100px"
  }
}

const date = new Date()
document.querySelector('.copyright__text_year').innerHTML = `${date.getFullYear()}`

const playbillSortBtn = document.querySelectorAll('.playbill__sort-btn')
playbillSortBtn.forEach(btn => {
  btn.addEventListener('click', (event) => {
    playbillSortBtn.forEach(btn => btn.classList.remove('playbill__sort-btn_active'))
    event.target.classList.add('playbill__sort-btn_active')

  })
})

new Swiper(".news-slider", {
  startslidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: '.news__nav-btn_right',
    prevEl: '.news__nav-btn_left',
  },
});

renderNewSection(getNewsData(newsData))
renderFooter(getFooterData(footerData))