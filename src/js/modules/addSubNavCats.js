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

  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('#nav');
    const navList = nav.querySelector('#nav__list');
    const navOverlay = document.querySelector('.catalog-dropdown__background');

  

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
    
    catBlocksAll.forEach(catBlock => catBlock.addEventListener('mouseenter', () => {
      const catId = catBlock.id; // id категории
      const currentCatData = cats.find(cat => cat.id === catId); // получаем данные объекта ко категории
      if(!currentCatData) return;

      // Находим все саб меню и удаляем их
      const subNavs = navList.querySelectorAll('.sub-nav');
      subNavs.forEach(nav => nav.remove());

      // Добавляем новое подменю на страницу
      catBlock.insertAdjacentHTML('beforeend', `
          <div class="sub-nav">
            <div class="sub-nav__container container">
              <ul class="sub-nav__list"></ul>
              <ul class="sub-sub-nav_list"></ul>
            </div>
    
          </div>
      `);

      const subNavList = catBlock.querySelector('.sub-nav__list');
      const subSubNav = catBlock.querySelector('.sub-sub-nav_list');
console.log(subSubNav);

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
        const subNavs = navList.querySelectorAll('.sub-nav');
        subNavs.forEach(nav => nav.remove());
        navOverlay.classList.remove('active');
      });

      const addSubSubNavList = (e) => {

        const subCatId = e.target.children[1]?.getAttribute('data-cat');
        if(!subCatId) return;
        const currentSubCatData = currentCatData.subCats.find(cat => cat.id === subCatId);
          
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

      subNavList.addEventListener('mouseover', addSubSubNavList);
     
    }));

    // Слушаем событие hover
    // navList.addEventListener('mouseover', (e) => {
    //   console.log(e.target);
      
    //     const listItem = e.target.closest('li');
    //     if (!listItem) return;

    //     // Если уже есть меню - удаляем
    //     navList.querySelectorAll('.sub-nav').forEach((subNav) => subNav.remove());

    //     // id выбранной категории
    //     const catId = listItem.id;
    //     const currentCatData = cats.find(cat => cat.id === catId);
    //     if(!currentCatData) return;

    //     // Добавляем подменю на страницу
    //     listItem.insertAdjacentHTML('beforeend', `
    //         <div class="sub-nav" id="sub-nav">
    //           <div class="sub-nav__container container">
    //             <ul class="sub-nav__list" id="sub-nav-list"></ul>
    //             <ul class="sub-sub-nav_list" id="sub-sub-nav"></ul>
    //           </div>
      
    //         </div>
    //     `);

    //     // Добавляем оверлей
    //     navOverlay.classList.add('active');

    //     const subNavList = listItem.querySelector('#sub-nav-list');
    //     const subSubNav = listItem.querySelector('#sub-sub-nav');

    //     subNavList.innerHTML = currentCatData.subCats.map( cat => 
    //       `
    //       <li class="sub-nav__item">
    //         <svg class="sub-nav__icon icon icon--${cat.icon}">
    //           <use href="./img/svgsprite/sprite.symbol.svg#${cat.icon}"></use>
    //         </svg>
    //         <a href="#" class="sub-nav__link" data-cat="${cat.id}">
    //           ${cat.name}
    //         </a>
    //         <div class="nav__arrow">
    //           <div class="arrow"></div>
    //         </div>
    //       </li>
    //       `
    //     ).join('');

    //     const addSubSubNavList = (e) => {
    //       e.stopPropagation();
    //       const subCatId = e.target.children[1]?.getAttribute('data-cat');
    //       if(!subCatId) return;
    //       const currentSubCatData = currentCatData.subCats.find(cat => cat.id === subCatId);
        
    //       subSubNav.innerHTML = currentSubCatData.subSubCats.map (subCat => 
    //         `
    //         <li class="sub-sub-nav__item">
    //           <a href="#" class="sub-sub-nav__link">
    //             ${subCat.name}
    //           </a>
    //         </li>
    //         `
    //       ).join('');
    //     }

    //   // subNavList.addEventListener('mouseover', addSubSubNavList);

    //   // Убираем подменю, если курсор ушел с навигации
    //   // const subNav = nav.querySelector('#sub-nav');

  
    //   // if (!subNav) return;
    //   // console.log(subNav);
    //   // subNav.addEventListener('click', (e) => {
    //   //   // e.stopPropagation();
    //   //   console.log('click');
    //   //   subNav.remove();
    //   //   // Убираем оверлей
    //   //   navOverlay.classList.remove('active');
    //   // });

    //   // Для тач скринов
    //   // navOverlay.addEventListener('click', (e) => {
    //   //   e.stopPropagation();
    //   //   console.log('click');
    //   //   const subNav = nav.querySelector('#sub-nav');
    //   //   subNav?.remove();
        
        
    //   //   // Убираем оверлей
    //   //   navOverlay.classList.remove('active');
    //   // });
     

      
    // });

  });
}

// const addSubNavCats = () => {
//   const nav = document.querySelector('#nav');
//   const navList = nav.querySelector('#nav__list')



//   // Добавляем разметку основных категорий в навигацию
//   navList.innerHTML = cats.map(cat => 
//     `
//       <li
//         id="${cat.id}"
//         class="nav__block"
//         role="tab"
//         area-selected="false"
//         tabindex="0"
//       >
//       <div class="nav__item">
//         <span class="nav__title">${cat.name}</span>
//       </div>
 
//     </li>
//     `
//   ).join(' ');

//   const addSubNav = (e) => {
//     console.log('add sub func');
    
//     const listItem = e.target.closest('li');
//     if (!listItem) return;
//     // id категории, по на котороую навели мышку
//     const catId = listItem.id;

//     if (!catId || !navList) return;

//     // Найдём объект нужной категории 
//     const currentCatData = cats.find(cat => cat.id === catId);
  
//     if(!currentCatData) return;
  
//     // Добавим sub-nav с нужными подкатегориями
//     listItem.insertAdjacentHTML('beforeend', `
//         <div class="sub-nav" id="sub-nav">
//           <div class="sub-nav__container">
//             <ul class="sub-nav__list" id="sub-nav-list"></ul>
//             <ul class="sub-sub-nav_list" id="sub-sub-nav"></ul>
//           </div>
   
//         </div>
//     `);

//     const subNavList = nav.querySelector('#sub-nav-list');
//     const subSubNav = nav.querySelector('#sub-sub-nav');

//     if(!subNavList) return;

//     subNavList.innerHTML = currentCatData.subCats.map( cat => 
//       `
//       <li class="sub-nav__item">
//         <svg class="sub-nav__icon icon icon--${cat.icon}">
//           <use href="./img/svgsprite/sprite.symbol.svg#${cat.icon}"></use>
//         </svg>
//         <a href="#" class="sub-nav__link" data-cat="${cat.id}">
//           ${cat.name}
//         </a>
//         <div class="nav__arrow">
//           <div class="arrow"></div>
//         </div>
//       </li>
//       `
//     ).join('');

//     const addSubSubNavList = (e) => {
//       stopPropagation();
//       const subCatId = e.target.children[1]?.getAttribute('data-cat');
//       if(!subCatId) return;
//       const currentSubCatData = currentCatData.subCats.find(cat => cat.id === subCatId);
//       console.log(currentSubCatData);
//       subSubNav.innerHTML = currentSubCatData.subSubCats.map (subCat => 
//         `
//         <li class="sub-sub-nav__item">
//           <a href="#" class="sub-sub-nav__link">
//             ${subCat.name}
//           </a>
//         </li>
//         `
//       ).join('');
//     }

//     subNavList.addEventListener('mouseover', addSubSubNavList);
//   }

//   navList.addEventListener('mouseover', addSubNav);

// };

export default addSubNavCats;