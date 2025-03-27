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
          'subSubCats' : ['Рюкзак', 'Клатч', 'Портмоне']
        },
        {
          'id' : '8',
          'name' : 'Очки',
          'icon' : 'glasses',
          'subSubCats' : ['Авитаторы', 'Круглые', 'Коллекционные']
        },
        {
          'id' : '9',
          'name' : 'Часы',
          'icon' : 'watch',
          'subSubCats' : ['На ремешке', 'Металлические', 'С драгоценными вставками']
        },
        {
          'id' : '10',
          'name' : 'Бижутерия',
          'icon' : 'parfume',
          'subSubCats' : ['Кольца', 'Колье', 'Серьги']
        },
    
        {
          'id' : '11',
          'name' : 'Косметика',
          'icon' : 'cosmetics',
          'subSubCats' : ['Кремы', 'Палетки теней', 'Тушь', 'Помада']
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
          'icon' : 'glasses',
          'subSubCats' : ['Авитаторы', 'Круглые', 'Коллекционные']
        },
        {
          'id' : '14',
          'name' : 'Часы',
          'icon' : 'watches',
          'subSubCats' : ['На ремешке', 'Металлические', 'С драгоценными вставками']
        },
        {
          'id' : '15',
          'name' : 'Ремни',
          'icon' : 'parfume',
          'subSubCats' : ['Кожанные', 'Классика', 'Разные']
        },
    
        {
          'id' : '16',
          'name' : 'Галстуки',
          'icon' : 'cosmetics',
          'subSubCats' : ['Классика', 'Шёлковые', 'Бабочка']
        },
        {
          'id' : '17',
          'name' : 'Сумки',
          'icon' : 'bag',
          'subSubCats' : ['Рюкзак', 'На плечо', 'Дипломат']
        },
    
      ],
    },
    {
      'id' : '3',
      'name' : 'Для Детей',
      'subCats' :  [],
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
      </li>
      `
    ).join('');
  
  }

  nav.addEventListener('mouseover', addSubNav);


  // subNav.innerHTML = `
  //       <li class="sub-nav__item">
  //         <svg class="sub-nav__icon icon icon--category_all">
  //           <use href="./img/svgsprite/sprite.symbol.svg#category_all"></use>
  //         </svg>
  //         <a href="#" class="sub-nav__link" data-cat="all">
  //           Все категории
  //         </a>
  //       </li>
      
  //       <li class="sub-nav__item">
  //         <svg class="sub-nav__icon icon icon--bag">
  //           <use href="./img/svgsprite/sprite.symbol.svg#bag"></use>
  //         </svg>
  //         <a href="#" class="sub-nav__link" data-cat="bags">
  //           Сумки
  //         </a>
  //         <div class="nav__arrow">
  //           <div class="arrow"></div>
  //         </div>
  //       </li>
  //       <li class="sub-nav__item">
  //         <svg class="sub-nav__icon icon icon--glasses">
  //           <use href="./img/svgsprite/sprite.symbol.svg#glasses"></use>
  //         </svg>
  //         <a href="#" class="sub-nav__link"  data-cat="glasses">
  //           Очки
  //         </a>
  //         <div class="nav__arrow">
  //           <div class="arrow"></div>
  //         </div>
  //       </li>
  //       <li class="sub-nav__item">
  //         <svg class="sub-nav__icon icon icon--parfume">
  //           <use href="./img/svgsprite/sprite.symbol.svg#parfume"></use>
  //         </svg>
  //         <a href="#" class="sub-nav__link" data-cat="parfume">
  //           Парфюмерия
  //         </a>
  //         <div class="nav__arrow">
  //           <div class="arrow"></div>
  //         </div>
  //       </li>
  //       <li class="sub-nav__item">
  //         <svg class="sub-nav__icon icon icon--cosmetics">
  //           <use href="./img/svgsprite/sprite.symbol.svg#cosmetics"></use>
  //         </svg>
  //         <a href="#" class="sub-nav__link" data-cat="cosmetic">
  //           Косметика
  //         </a>
  //         <div class="nav__arrow">
  //           <div class="arrow"></div>
  //         </div>
  //       </li>
  //       <li class="sub-nav__item">
  //         <svg class="sub-nav__icon icon icon--watch">
  //           <use href="./img/svgsprite/sprite.symbol.svg#watch"></use>
  //         </svg>
  //         <a href="#" class="sub-nav__link" data-cat="watches">
  //           Часы
  //         </a>
  //         <div class="nav__arrow">
  //           <div class="arrow"></div>
  //         </div>
  //       </li>
  // `;

//   const men = {
//     glasses : ['Авиаторы', 'Квадратые', 'Круглые'],
//     watches : ['На ремешке', 'Металлические', 'С драгоценными вставками'],
//     belts : ['Кожанные', 'С пряжкой', 'Разные'],
//     ties : ['Для офиса', 'Для вечера', 'Разные'],
//     bags : ['Рюкзак', 'Клатч', 'Портмоне']
//   }

//   const women = {
//     bags : ['Рюкзак', 'Клатч', 'Портмоне'],
//     glasses : ['Авиаторы', 'Квадратые', 'Круглые'],
//     parfume : ['Парфюмерная вода', 'Духи', 'Пробники', 'Наборы ароматов'],
//     cosmetic : ['Кремы', 'Палетки теней', 'Тушь', 'Помада'],
//     watches : ['На ремешке', 'Металлические', 'С драгоценными вставками']
//   };

//   const addCategories = (e) => {
//     e.stopPropagation();
//     if (e.target.children[1] && e.target.children[1].hasAttribute('data-cat')) {
//       const currentCat = e.target.children[1].getAttribute('data-cat');
//       const subNavList = e.target.closest('ul');
//       console.log(subNavList);
      
//       const subNavContainer = subNavList.nextElementSibling;
// console.log(subNavContainer);

//       if (women[currentCat]) {
//           subNavContainer.innerHTML = women[currentCat].map(cat => 
//               `
//             <li class="sub-nav__item">
//               <a href="#">${cat}</a>
//             </li>
//             `).join("");
//       } 
      
//       if (men[currentCat]) {
//         console.log(men[currentCat]);
        
//           subNavContainer.innerHTML = men[currentCat].map(cat => 
//               `
//             <li class="sub-nav__item">
//               <a href="#">${cat}</a>
//             </li>
//             `).join("");
//       }

//       if (currentCat === 'all') {
//         subNavContainer.innerHTML= '';
//       }
   
      
//     }
  
//   }

  // subNavLists.forEach(subNavList => {
  //   subNavList.addEventListener( 'mouseover', addCategories);
  // });


};

export default addSubNavCats;