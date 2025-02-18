const footerData = [
  {
    _id: '1',
    columnTitle : "Афиша",
    columnLinks : [
      {
        _id: '1',
        linkTitle : "сейчас в кино",
        link: '#',
      },
      {
        _id: '2',
        linkTitle : "скоро",
        link: '#',
      },
      {
        _id: '3',
        linkTitle : "+vibe",
        link: '#',
      },
      {
        _id: '4',
        linkTitle : "детям",
        link: '#',
      },
    ]
  },
  {
    _id: '2',
    columnTitle : "для гостей",
    columnLinks : [
      {
        _id: '1',
        linkTitle : "программа лояльности",
        link: '#',
      },
      {
        _id: '2',
        linkTitle : "подарочные карты",
        link: '#',
      },
      {
        _id: '3',
        linkTitle : "электронные подарочные карты",
        link: '#',
      },
      {
        _id: '4',
        linkTitle : "абонементы",
        link: '#',
      },
      {
        _id: '5',
        linkTitle : "закрытый клуб +vibe",
        link: '#',
      },
      {
        _id: '6',
        linkTitle : "услуги",
        link: '#',
      },
      {
        _id: '7',
        linkTitle : "новости и акции",
        link: '#',
      },
    ]
  },
  {
    _id: '3',
    columnTitle : "пространства",
    columnLinks : [
      {
        _id: '1',
        linkTitle : "vibe в ТРЦ Dana Mall",
        link: '#',
      },
      {
        _id: '2',
        linkTitle : "vibe в ТРЦ Palazzo",
        link: '#',
      },
      {
        _id: '3',
        linkTitle : "vibe в ТРК Triniti",
        link: '#',
      },
      {
        _id: '4',
        linkTitle : "vibe в ТРЦ Arena City",
        link: '#',
      },
    ]
  },
  {
    _id: '4',
    columnTitle : "о нас",
    columnLinks : [
      {
        _id: '1',
        linkTitle : "сотрудничество",
        link: '#',
      },
      {
        _id: '2',
        linkTitle : "аренда залов",
        link: '#',
      },
      {
        _id: '3',
        linkTitle : "карьера",
        link: '#',
      },
      {
        _id: '4',
        linkTitle : "контакты",
        link: '#',
      },
    ]
  },
  {
    _id: '5',
    columnTitle : "полезная информация",
    columnLinks : [
      {
        _id: '1',
        linkTitle : "документы",
        link: '#',
      },
      {
        _id: '2',
        linkTitle : "FAQ",
        link: '#',
      },
      {
        _id: '3',
        linkTitle : "скачать билет",
        link: '#',
      },
    ]
  },
]

window.onscroll = () => {
  const header = document.querySelector('.header')
  const blurClassName = 'blurred-bg'

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.classList.add(blurClassName)
  } else {
    header.classList.remove(blurClassName)
  }
}

const date = new Date()
document.querySelector('.copyright__text_year').innerHTML = `${date.getFullYear()}`

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



renderFooter(getFooterData(footerData))