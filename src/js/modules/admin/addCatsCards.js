import addAdminCardToolOverlay from './addCardAdminToolOverlay.js';
import initDropdown from './../initDropdownMenu.js';

const addCatsCards = (catalogList, cardsWrapper, cats, mainCats) => {
  const cardToolOverlay = addAdminCardToolOverlay();

  const getCatalogCardTemplate = (cat, cardToolOverlay) => {
    return `
     <li href="#" class="admin-card" data-id="2">
      ${cardToolOverlay}
      <div class="admin-card__img">
        <img src="./../../img/cats/${cat.img}" srcset="./../../img/cats/01@2x.jpg" alt="">
      </div>
      <!-- price -->
      <div class="admin-card__desc">
        <h4 class="admin-card__title">${cat.name}</h4>
      </div>
      <!--// price -->
    </li>
    `;
  }

  // Ф-ция добавления карточек подкатегории
  const addCatalogCards = (e) => {
    cardsWrapper.innerHTML = '';
    const currentCatId = e.target.closest('li').dataset.id;
    const currentSubCats = cats.filter(cat => {
      if(cat.id < 0) return; // Если категория 'Все категории' - пропускаем
      return +cat.parentId === + currentCatId;
    });
    const catalogCards = currentSubCats.map(cat => getCatalogCardTemplate(cat, cardToolOverlay)).join('');
    cardsWrapper.insertAdjacentHTML('beforeend', catalogCards);

    initDropdown(cardsWrapper, {triggerAttr : 'data-btn', menuSelector : '.subTools'});
  }  


  // Отображение карочек каталога при первом просмотре
  const catalogCardsData = cats.filter(cat => {
    if ( +cat.id < 0) return;
    return +cat.parentId === +mainCats[0].id;
  });
  const catalogCards = catalogCardsData.map(cat => getCatalogCardTemplate(cat, cardToolOverlay)).join('');
  cardsWrapper.insertAdjacentHTML('beforeend', catalogCards);

  // Слушаем клик по каталогу
  catalogList.addEventListener('click', (e) => addCatalogCards(e)); 
  // Слушаем клики по оверлею
  // handleToolsOverlay(cardsWrapper, '.tooltip');
  initDropdown(cardsWrapper, {triggerAttr : 'data-btn', menuSelector : '.subTools'});

}

export default addCatsCards;