import addAccordion from "./../addAccordion.js";
import catalogData from './../../../data/categories.json';

const addAdminCatalog = (catalogWrapper) => {
  const cats = catalogData;
  const cardsWrapper = document.querySelector('#catalog-cards');
  const catalogList = document.querySelector(catalogWrapper);

  const getFirstLvlCatsList = catsData => catsData.filter(cat => cat.parentId == 0);
  const getCurrentSubCatList = (catsData, currentCat) => catsData.filter(cat => cat.parentId == currentCat.id);

  const firstLvlCatsList = getFirstLvlCatsList(cats);

  // Templates
  const getCatalogCardTemplate = (cat) => {
    return `
      <a href="shop-single.html" class="card-small" data-id="${cat.id}">
        <div class="card-small__img">
          
          <svg class="icon icon--arrow-right">
            <use href="./img/svgsprite/sprite.symbol.svg#arrow-right"></use>
          </svg>
        
          <img src="./../../img/cats/${cat.img}" srcset="./../../img/cats/01@2x.jpg" alt="">
        </div>
        <!-- price -->
        <div class="card-small__desc">
          <div class="card-small__title">
            <h4 class="h4">${cat.name}</h4>
          </div>
        </div>
        <!--// price -->
      </a>
    `;
  }


  // Ф-ция возвращает разметку кнопки с ссылками
  const getCategoryBlockLink = (url, dataBtn, icon, catId) => {
    return `
      <a href="${url}" class="category-block__link" data-btn="${dataBtn}" data-cat="${catId}">
        <svg class="icon icon--${icon}">
          <use href="./img/svgsprite/sprite.symbol.svg#${icon}"></use>
        </svg>
      </a>
    `;
  }

  // Ф-ция возвращает разметку для элем. каталога 2-го уровня
  const getCatalogItemSubCatTemplate = (subCats) => {
    return subCats.map( subCatItem => {
      if (subCatItem.name === 'Все категории') return; // Чтобы не добавлся объкет "Все категории" 

      return `
        <li class="catalog-list__sublist__item" data-id="${subCatItem.id}">
          <button type="button" class="category-block category-block--sublist">
            <span class="category-block__text text-ellipsis">
            ${subCatItem.name}
              <!-- <span class="category-block__counter">(5)</span> -->
            </span>
            <span class="category-block__action-links">
              ${getCategoryBlockLink('#', 'edit', 'edit', subCatItem.id)}
              ${getCategoryBlockLink('#', 'remove', 'remove', subCatItem.id)}
            </span>
          </button>
        </li>
      `;
    }).join('');
  }

  // Ф-ция возвращает разметку для элем. каталога 1-го уровня
  const getCatalogItemCatTemplate = (item) => {
    const currentSubCats = getCurrentSubCatList(cats, item);
    const subCatsTemplate = getCatalogItemSubCatTemplate(currentSubCats);
    return `
      <li class="catalog-list__item accordion__item text-ellipsis" data-id="${item.id}">
          <button type="button" class="category-block accordion__btn" title="Открыть категорию ${item.name}">
            <span class="expand-icon">
              <span class="expand-icon__body"></span>
            </span>
            <span class="category-block__text text-ellipsis">
              ${item.name}
              <!-- <span class="category-block__counter">(5)</span> -->
            </span>
            <span class="category-block__action-links">
              ${getCategoryBlockLink('edit.php', 'edit', 'edit')}
              ${getCategoryBlockLink('delete.php', 'remove', 'remove')}
            </span>
          </button>
          ${subCatsTemplate.length ? `<ul class="catalog-list__sublist accordion__content">${subCatsTemplate}</ul>` : ''}
        </li>
    `;
  }

  // Ф-ция обрабатывает ссылки каталога
  const handlingCatalogLinks = () => {
    // Найдем все контейнеры для кнопок-ссылок каталога (удалить и редактировать)
    const catalogLinksWrappers = catalogList.querySelectorAll('.category-block__action-links');
    
    catalogLinksWrappers.forEach(wrapper => {
      wrapper.addEventListener('click', (e) => {
        const clickedBtn = e.target.closest('[data-btn]'); 
        if(!clickedBtn) return; // если клик мимо кнопки

        const mainCategory = clickedBtn.closest('.accordion__item');
        const subCategory =  clickedBtn.closest('.catalog-list__sublist__item');

        const clickedBtnData = clickedBtn.dataset.btn;

    
        let currentCategoryData;
        if (mainCategory) currentCategoryData = cats.find(item => +item.id === mainCategory.dataset.id);
        else if (subCategory) currentCategoryData = cats.find(item => +item.id === subCategory.dataset.id);

        if ( clickedBtnData && clickedBtnData === 'edit') {
          // const currentCatId = e.target.closest('li').dataset.id;
        }
        
        if ( clickedBtnData && clickedBtnData === 'remove') {
          const currenyCat = cats.find(cat => +cat.id === currentCategoryData.id);
          if (confirm(`Вы действительно хотите удалть категорию ${currenyCat.name}?`)) console.log('okay');
          
        }
        
      });
    });
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

  // Обходим массив категории и подставляем данные в шаблон
  const catalogListTemplate = firstLvlCatsList.map(cat => getCatalogItemCatTemplate(cat)).join('');
  catalogList.insertAdjacentHTML('beforeend', catalogListTemplate); // добавляем разметку на страницу

  // Отображение карочек каталога при первом просмотре
  const catalogCardsData = cats.filter(cat => {
    if ( +cat.id < 0) return;
    return +cat.parentId === +firstLvlCatsList[0].id;
  });
  const catalogCards = catalogCardsData.map(cat => getCatalogCardTemplate(cat));
  cardsWrapper.insertAdjacentHTML('beforeend', catalogCards);

  // Слушаем клик по каталогу
  catalogList.addEventListener('click', (e) => addCatalogCards(e)); 
  handlingCatalogLinks(); // обрабатываем клики по ссылкам 
  setTimeout(() => addAccordion('many', catalogWrapper), 0.1); // Запускаем функцию аккордеона
}

export default addAdminCatalog;