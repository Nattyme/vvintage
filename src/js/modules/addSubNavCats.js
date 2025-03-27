const addSubNavCats = () => {
  const nav = document.querySelector('#nav');
  const navList = nav.querySelector('.nav__list')
  const subNav = document.querySelector('#sub-nav-list');
  const subSubNav = document.querySelector('#sub-sub-nav');
  const cats = [
    {
      'id' : '1',
      'name' : 'Для Женщин',
      'subCats' :  [
        {
          'id' : '-1',
          'name' : 'Все категории',
          'icon' : 'category_all',
          'subSubCats' : []
        }, 
        {
          'id' : '7',
          'name' : 'Сумки',
          'icon' : 'bag',
          'subSubCats' : [{'id' : '22', 'name' : 'Рюкзак'}, {'id' : '22', 'name' : 'Клатч'},{'id' : '22', 'name' : 'Портмоне'}]
        },
        {
          'id' : '8',
          'name' : 'Очки',
          'icon' : 'glasses',
          'subSubCats' : [{'id' : '32', 'name' : 'Авиаторы'}, {'id' : '33', 'name' : 'Круглые'},{'id' : '34', 'name' : 'Коллекционные'}]
        },
        {
          'id' : '9',
          'name' : 'Часы',
          'icon' : 'watch',
          'subSubCats' : [{'id' : '42', 'name' : 'На ремешке'}, {'id' : '43', 'name' : 'Металлические'},{'id' : '34', 'name' : 'С драгоценными вставками'}]
        },
        {
          'id' : '10',
          'name' : 'Бижутерия',
          'icon' : 'earrings',
          'subSubCats' : [{'id' : '52', 'name' : 'Кольца'}, {'id' : '53', 'name' : 'Колье'},{'id' : '54', 'name' : 'Серьги'}]
        },
    
        {
          'id' : '11',
          'name' : 'Косметика',
          'icon' : 'cosmetics',
          'subSubCats' : [{'id' : '62', 'name' : 'Крем'}, {'id' : '63', 'name' : 'Тушь'},{'id' : '64', 'name' : 'Помада'}]
        }
    
      ],
    },
    {
      'id' : '2',
      'name' : 'Для Мужчин',
      'subCats' :  [
        {
          'id' : '-1',
          'name' : 'Все категории',
          'icon' : 'category_all',
          'subSubCats' : []
        }, 
      
        {
          'id' : '13',
          'name' : 'Очки',
          'icon' : 'glasses_men',
          'subSubCats' : [{'id' : '92', 'name' : 'Авиаторы'}, {'id' : '93', 'name' : 'Круглые'}, {'id' : '94', 'name' : 'Коллекционные'}]
        },
        {
          'id' : '14',
          'name' : 'Часы',
          'icon' : 'watch_man',
          'subSubCats' : [{'id' : '102', 'name' : 'На ремешке'}, {'id' : '103', 'name' : 'Металлические'}, {'id' : '104', 'name' : 'Карманные'}]
        },
        {
          'id' : '15',
          'name' : 'Ремни',
          'icon' : 'belt',
          'subSubCats' : [{'id' : '112', 'name' : 'Кожанные'}, {'id' : '113', 'name' : 'Классика'},{'id' : '114', 'name' : 'Разные'}]
        },
    
        {
          'id' : '16',
          'name' : 'Галстуки',
          'icon' : 'necktie',
          'subSubCats' : [{'id' : '122', 'name' : 'Классика'}, {'id' : '123', 'name' : 'Шёлковые'}, {'id' : '124', 'name' : 'Бабочка'}]
        },
        {
          'id' : '17',
          'name' : 'Сумки',
          'icon' : 'suitcase',
          'subSubCats' : [{'id' : '132', 'name' : 'Рюкзак'}, {'id' : '133', 'name' : 'На плечо'}, {'id' : '134', 'name' : 'Дипломат'}]
        }

      ],
    },
    {
      'id' : '3',
      'name' : 'Для Детей',
      'subCats' :  [
        {
          'id' : '-1',
          'name' : 'Все категории',
          'icon' : 'category_all',
          'subSubCats' : []
        },
        {
          'id' : '18',
          'name' : 'Игрушки',
          'icon' : 'toy',
          'subSubCats' : [{'id' : '71', 'name' : 'Мягкие'}, {'id' : '75', 'name' : 'Пластмассовые'}, {'id' : '76', 'name' : 'Деревянные'}]
        }
      ],
    },
  ];

  // Добавляем разметку основных категорий в навигацию
  navList.innerHTML = cats.map(cat => 
    `
      <li
        id="${cat.id}"
        class="nav-tab"
        role="tab"
        area-selected="false"
        tabindex="0"
      >
    <div class="nav__item">
      <span class="nav__title">${cat.name}</span>
      </div>
 
    </li>
    `
  ).join(' ');

  const addSubNav = (e) => {
    e.stopPropagation();

    const listItem = e.target.closest('li');
    if (!listItem) return;
    // id категории, по на котороую навели мышку
    const catId = listItem.id;

    if (!catId || !navList) return;

    // Найдём объект нужной категории 
    const currentCatData = cats.find(cat => cat.id === catId);
  
    if(!currentCatData) return;

    subNav.innerHTML = currentCatData.subCats.map( cat => 
      `
      <li class="sub-nav__item">
        <svg class="sub-nav__icon icon icon--${cat.icon}">
          <use href="./img/svgsprite/sprite.symbol.svg#${cat.icon}"></use>
        </svg>
        <a href="#" class="sub-nav__link" data-cat="${cat.id}">
          ${cat.name}
        </a>
        <div class="nav__arrow">
          <div class="arrow"></div>
        </div>
      </li>
      `
    ).join('');

    const  addSubSubNav = (e) => {
      const subCatId = e.target.children[1]?.getAttribute('data-cat');
      if(!subCatId) return;
      const currentSubCatData = currentCatData.subCats.find(cat => cat.id === subCatId);
      console.log(currentSubCatData);
      subSubNav.innerHTML = currentSubCatData.subSubCats.map (subCat => 
        `
        <li class="sub-sub-nav__item">
          <a href="#" class="sub-sub-nav__link">
            ${subCat.name}
          </a>
        </li>
        `
      ).join('');
    }

    subNav.addEventListener('mouseover', addSubSubNav);
  }



  nav.addEventListener('mouseover', addSubNav);
 
};

export default addSubNavCats;