const addCatsCards = (catalogList, cardsContainer, cats, mainCats) => {
  const cardsWrapper = document.querySelector(cardsContainer); // контейнер карточек
  const getCatalogCardTemplate = (cat) => {
    return `
     <li href="#" class="admin-card" data-id="2">
      <div class="admin-card__tooltip">
        <div class="tooltip">
          <a href="#" class="button-delete">
            <svg class="icon icon--arrow-right">
              <use href="./img/svgsprite/sprite.symbol.svg#arrow-right"></use>
            </svg>
          </a>
          <button class="button-subTools">
            <svg class="icon icon--arrow-right">
              <use href="./img/svgsprite/sprite.symbol.svg#arrow-right"></use>
            </svg>
            <ul class="subTools">
              <li class="subToolsItem">
                <a href="#!">
                  <svg class="icon icon--arrow-right">
                    <use href="./img/svgsprite/sprite.symbol.svg#arrow-right"></use>
                  </svg>
                  <span class="subToolsItem__text">Изменить</span>
                </a>
              </li>
            </ul>
          </button>
        </div>
      </div>
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
    const catalogCards = currentSubCats.map(cat => getCatalogCardTemplate(cat));
    cardsWrapper.insertAdjacentHTML('beforeend', catalogCards);
  }  

  // Отображение карочек каталога при первом просмотре
  const catalogCardsData = cats.filter(cat => {
    if ( +cat.id < 0) return;
    return +cat.parentId === +mainCats[0].id;
  });
  const catalogCards = catalogCardsData.map(cat => getCatalogCardTemplate(cat));
  cardsWrapper.insertAdjacentHTML('beforeend', catalogCards);

  // Слушаем клик по каталогу
  catalogList.addEventListener('click', (e) => addCatalogCards(e)); 
  handlingCatalogLinks(); // обрабатываем клики по ссылкам 
}

export default addCatsCards;