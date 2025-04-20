import addAccordion from "./../addAccordion.js";
import catalogData from './../../../data/categories.json';

const addAdminCatalog = (catalogWrapper) => {
  const cats = JSON.parse(JSON.stringify(catalogData));
  const catalogList = document.querySelector(catalogWrapper);
  const catalogCardsList = document.querySelector('#catalog-cards');
  // Запускаем функцию аккордеона
  setTimeout(() => {
    addAccordion('many', catalogWrapper); 
  }, 0);

  const getCatalogItemTemplate = (item) => {
    return `
     <li class="catalog-list__item accordion__item text-ellipsis">
          <button type="button" class="category-block accordion__btn" >
            <span class="expand-icon">
              <span class="expand-icon__body"></span>
            </span>
            <span class="category-block__text text-ellipsis">
              ${item.name}
              <!-- <span class="category-block__counter">(5)</span> -->
            </span>
            <span class="category-block__action-links">
              <a href="edit.php" class="category-block__link" data-btn="edit">
                <svg class="icon icon--edit">
                  <use href="./img/svgsprite/sprite.symbol.svg#edit"></use>
                </svg>
              </a>
              <a href="delete.php" class="category-block__link" data-btn="remove">
                <svg class="icon icon--remove">
                  <use href="./img/svgsprite/sprite.symbol.svg#remove"></use>
                </svg>
              </a>
            </span>
          </button>
          <ul class="catalog-list__sublist accordion__content"></ul>
        </li>
    `;
  }

  const catalogListTemplate = cats.map(cat => getCatalogItemTemplate(cat)).join('');
  catalogList.insertAdjacentHTML('beforeend', catalogListTemplate);
console.log(catalogListTemplate);

//   <li class="catalog-list__sublist__item">
//   <button type="button" class="category-block category-block--sublist">
//     <span class="category-block__text text-ellipsis">
//       Сумки
//       <!-- <span class="category-block__counter">(5)</span> -->
//     </span>
//     <span class="category-block__action-links">
//       <a href="edit.php" class="category-block__link">
//         <svg class="icon icon--edit">
//           <use href="./img/svgsprite/sprite.symbol.svg#edit"></use>
//         </svg>
//       </a>
//       <a href="delete.php" class="category-block__link">
//         <svg class="icon icon--remove">
//           <use href="./img/svgsprite/sprite.symbol.svg#remove"></use>
//         </svg>
//       </a>
//     </span>
//   </button>
// </li>
  
}

export default addAdminCatalog;