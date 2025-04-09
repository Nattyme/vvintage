import addAccordion from "./addAccordion.js";

const addSidebarControlPanel = () => {
  // Данные разделов панели управления 
  const data = [
    {
      'cat' : 'Админ панель',
      'icon' : 'inbox',
      'subCat' : []
    },
    {
      'cat' : 'Каталог',
      'icon' : 'catalog',
      'subCat' : []
    },
    {
      'cat' : 'Магазин',
      'icon' : 'shop',
      'subCat' : ['Добавить товар', 'Все товары', 'Все бренды', 'Все категории', 'Заказы']
    },
    {
      'cat' : 'Сообщения',
      'icon' : 'mail',
      'subCat' : []
    },
    {
      'cat' : 'Страницы',
      'icon' : 'file',
      'subCat' : ['Главная', 'Контакты']
    },
    {
      'cat' : 'Настройки',
      'icon' : 'settings',
      'subCat' : []
    },
    {
      'cat' : 'Мой профиль',
      'icon' : 'user',
      'subCat' : []
    },
    {
      'cat' : 'Выход',
      'icon' : 'log-out',
      'subCat' : []
    }
  ];

  const panel = document.querySelector('#sidebar-tab');

  const panelList = panel.querySelector('.sidebar__list');
  const panelItemTemplate = (cat) => {
    return `
            <li class="sidebar__list-item">
              <button class="sidebar__list-button" title="Перейти в раздел '${cat.cat}'">
                <div class="sidebar__list-img-wrapper">
                  <img class="sidebar__list-img" src="./../../img/svgsprite/stack/svg/sprite.stack.svg#${cat.icon}" alt="Админ панель" />
                </div>
                ${cat.cat}
              </button>
            </li>
          `;
  }

  // const doScrollOnlyByWheel = (block) => {
  //   block.addEventListener('wheel', (e) => {
  //     e.preventDefault();
  //     block.scrollTop += e.deltaY;
  //     console.log('hello from scroll');
      
  //   });
  // }

  const panelItemWithTabTemplate = (cat) => {
    return  `
            <li class="sidebar__list-item accordion__item">
              <button href="?shop" class="sidebar__list-button accordion__btn" 
                title="Перейти страницу редактирования магазина"
                data-name="accordeon-title">
                <div class="sidebar__list-img-wrapper">
                  <img class="sidebar__list-img" src="./../../img/svgsprite/stack/svg/sprite.stack.svg#${cat.icon}" alt="icon" />
                  <!-- <img class="sidebar__list-img" src="<?php echo HOST . 'static/img/svgsprite/stack/svg/sprite.stack.svg#shop';?>" alt="icon" /> -->
                </div>
                ${cat.cat}
              </button>
              <ul class="sidebar__list accordion__content">
                ${cat.subCat.map(item => {
                  return `
                    <li class="sidebar__list-item">
                      <button class="sidebar__list-button sidebar__inner-link" 
                          href="" title="Перейти на страницу редактирования главной страницы сайта">
                          <!-- href="<?php echo HOST;?>admin/main" title="Перейти на страницу редактирования главной страницы сайта"> -->
                        <div class="sidebar__list-img-wrapper">
                          <img class="sidebar__list-img" src="./../../img/svgsprite/stack/svg/sprite.stack.svg#corner" alt="icon" />
                          <!-- <img class="sidebar__list-img" src="<?php echo HOST . 'static/img/svgsprite/stack/svg/sprite.stack.svg#about-me';?>" alt="icon" /> -->
                        </div>
                        ${item}
                      </button>
                    </li>
                  `
                  }).join('')}   
                </ul>
              </li>
            `;
  }

  // Обходим массив с данными и создаем HTML разметку
  const controlPanelList = data.map(item => {
    let catItem = panelItemTemplate(item);

    if (item.subCat.length > 0) {
      catItem = panelItemWithTabTemplate(item);
    }
    return catItem;
  }).join('');


  if(!panelList) return;
  panelList.insertAdjacentHTML('beforeend', controlPanelList);

  // Запускаем функцию аккордеона
  setTimeout(() => {
    addAccordion('many', '#sidebar-tab'); 
  }, 0)
 
  // doScrollOnlyByWheel(panelList);
}

export default addSidebarControlPanel;

