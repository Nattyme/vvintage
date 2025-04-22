import isMobile from './is-mobile.js';
import categories from './../../data/categories.json';

const addSubNavCats = () => {
  const cats = JSON.parse(JSON.stringify(categories));
  const nav = document.querySelector('#nav');
  const navList = nav.querySelector('#nav__list');
  const navOverlay = document.querySelector('.catalog-dropdown__background');

  if(!nav || !navList || !navOverlay) return;
  
  // Ф-ция находит и удаляет все подменю
  const findAndRemoveAllSubNavs = navList => navList.querySelectorAll('.sub-nav').forEach(nav => nav.remove());
  
  // Ф-ция добавляет 2-й уровень меню
  const addSubNav = (catBlock) => {
    
    const catId = catBlock.id; // id категории
    console.log(catId);
    
    const currentCatData = cats.filter(cat => +cat.parentId === +catId); // получаем данные объекта по категории
    console.log(currentCatData);
    
    // const currentCatData = cats.find(cat => cat.id === catId); // получаем данные объекта по категории
    if(!currentCatData) return;
    
    // Находим все саб меню и удаляем их
    findAndRemoveAllSubNavs(navList);
    
    // Добавляем новое подменю на страницу
    catBlock.insertAdjacentHTML('beforeend', subNavTemplate);
    
    const subNavList = catBlock.querySelector('.sub-nav__list');
    const subSubNav = catBlock.querySelector('.sub-sub-nav__list');
    
    
    // Заполняем меню подактагорий данными
    subNavList.innerHTML = currentCatData.map( cat => 
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
    subNavBlocksAll.forEach( subNavBlock => subNavBlock.addEventListener('mouseenter', (e) => addSubSubNavList(e, subSubNav)));
  }
  
  // Ф-ция добавляем меню 3го уровня
  const addSubSubNavList = (e, subSubNav) => {
    const subCatWrapper = e.target.querySelector('[data-cat]');      
    if(!subCatWrapper) return;
    const subCatId = subCatWrapper.dataset.cat;
    
    const currentSubCatData = cats.filter(cat => +cat.parentId === +subCatId);
    console.log(currentSubCatData);
    
    // Пройдемся по всем категориям 2го уровня и сначала удали активный класс у всех, а потом добавим его к текущей подкатегории
    const subCatBlocksAll = e.target.closest('ul').querySelectorAll('li');
    subCatBlocksAll.forEach(subCatBlock => subCatBlock.classList.remove('active'));
    e.target.closest('li').classList.add('active');
    
    
    subSubNav.innerHTML = currentSubCatData.map (subCat => 
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
  
  if (!navList) return;
  
  // Найдем основные категории
  const mainCats = cats.filter(cat => +cat.parentId === 0);
  
  // Добавляем разметку основных категорий в навигацию
  navList.innerHTML = mainCats.map(cat => 
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
  isMobile();
}


export default addSubNavCats;