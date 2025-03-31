import isMobile from './is-mobile.js';


const addSubNavCats = () => {
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
          'subSubCats' : [{'id' : '22', 'name' : 'Рюкзак'}, {'id' : '22', 'name' : 'Клатч'},{'id' : '22', 'name' : 'Портмоне'},{'id' : '22', 'name' : 'Рюкзак'}, {'id' : '22', 'name' : 'Клатч'},{'id' : '22', 'name' : 'Портмоне'}, {'id' : '22', 'name' : 'Рюкзак'}, {'id' : '22', 'name' : 'Клатч'},{'id' : '22', 'name' : 'Портмоне'},{'id' : '22', 'name' : 'Рюкзак'}, {'id' : '22', 'name' : 'Клатч'},{'id' : '22', 'name' : 'Портмоне'}]
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

  isMobile();

  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('#nav');
    const navList = nav.querySelector('#nav__list');
    const navOverlay = document.querySelector('.catalog-dropdown__background');

    // Ф-ция находит и удаляет все под меню
    const findAndRemoveAllSubNavs = (navList) => {
      navList.querySelectorAll('.sub-nav').forEach(nav => nav.remove());
    };

    const addSubNav = (catBlock) => {
      const catId = catBlock.id; // id категории
      const currentCatData = cats.find(cat => cat.id === catId); // получаем данные объекта ко категории
      if(!currentCatData) return;

      // Находим все саб меню и удаляем их
      findAndRemoveAllSubNavs(navList);

      // Добавляем новое подменю на страницу
      catBlock.insertAdjacentHTML('beforeend', subNavTemplate);

      const subNavList = catBlock.querySelector('.sub-nav__list');
      const subSubNav = catBlock.querySelector('.sub-sub-nav__list');


      // Заполняем меню подактагорий данными
      subNavList.innerHTML = currentCatData.subCats.map( cat => 
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

      // Добалем оверлей
      navOverlay.classList.add('active');

      // Слушаем, когда курсор покинет навигацию
      nav.addEventListener('mouseleave', () => {

        // Находи все subNav в навигации и ужаляем их. Убираем оверлей
        findAndRemoveAllSubNavs(navList);
        navOverlay.classList.remove('active');
      });

      const subNavBlocksAll = subNavList.querySelectorAll('li');
      subNavBlocksAll.forEach( subNavBlock => subNavBlock.addEventListener('mouseenter', (e) => addSubSubNavList(e, currentCatData, subSubNav)));
    }

    // Ф-ция добавляем меню 3го уровня
    const addSubSubNavList = (e, currentCatData, subSubNav) => {
      const subCatId = e.target.children[1]?.getAttribute('data-cat');
      if(!subCatId) return;

      const currentSubCatData = currentCatData.subCats.find(cat => cat.id === subCatId);

      // Пройдемся по всем категориям 2го уровня и сначала удали активный класс у всех, а потом добавим его к текущей подкатегории
      const subCatBlocksAll = e.target.closest('ul').querySelectorAll('li');
      subCatBlocksAll.forEach(subCatBlock => subCatBlock.classList.remove('active'));
      e.target.closest('li').classList.add('active');

        
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

    //templates 
    const subNavTemplate = `
      <div class="sub-nav">
        <div class="sub-nav__container container">
          <ul class="sub-nav__list"></ul>
          <div class="sub-nav__line-separator"></div>
          <ul class="sub-sub-nav__list"></ul>
        </div>

      </div>
    `;

    // Добавляем разметку основных категорий в навигацию
    navList.innerHTML = cats.map(cat => 
      `
        <li
          id="${cat.id}"
          class="nav__block"
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

    // Находим все блоки главной навигации. На каждый блок вешаем прослушку событий hover
    const catBlocksAll = navList.querySelectorAll('.nav__block');
    if(!catBlocksAll) return;

    catBlocksAll.forEach(catBlock => catBlock.addEventListener('mouseenter', () => addSubNav(catBlock)));
  });
}


export default addSubNavCats;