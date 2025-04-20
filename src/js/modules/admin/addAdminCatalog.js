import addAccordion from "./../addAccordion.js";
import catalogData from './../../../data/categories.json';

const addAdminCatalog = (catalogWrapper) => {
  const cats = JSON.parse(JSON.stringify(catalogData));
  const catalogList = document.querySelector(catalogWrapper);
  // Запускаем функцию аккордеона
  setTimeout(() => {
    addAccordion('many', catalogWrapper); 
  }, 0);

  // Ф-ция создает кнопки с ссылками
  const getCategoryBlockLink = (url, dataBtn, icon) => {
    return `
      <a href="${url}" class="category-block__link" data-btn="${dataBtn}">
        <svg class="icon icon--${icon}">
          <use href="./img/svgsprite/sprite.symbol.svg#${icon}"></use>
        </svg>
      </a>
    `;
  }

  const getCatalogItemSubCatTemplate = (subCats) => {
    return subCats.map( subCatItem => {
      if (subCatItem.name === 'Все категории') return; // Чтобы не добавлся объкет "Все категории" 
      return `
      <li class="catalog-list__sublist__item" dataId="${subCatItem.id}">
        <button type="button" class="category-block category-block--sublist">
          <span class="category-block__text text-ellipsis">
          ${subCatItem.name}
            <!-- <span class="category-block__counter">(5)</span> -->
          </span>
          <span class="category-block__action-links">
            ${getCategoryBlockLink('edit.php', 'edit', 'edit')}
            ${getCategoryBlockLink('delete.php', 'remove', 'remove')}
          </span>
        </button>
      </li>
    `;
    }).join('');
  }

  const getCatalogItemTemplate = (item) => {
    const subCatsTemplate = getCatalogItemSubCatTemplate(item.subCats);
    return `
     <li class="catalog-list__item accordion__item text-ellipsis">
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



  const catalogListTemplate = cats.map(cat => getCatalogItemTemplate(cat)).join('');
  catalogList.insertAdjacentHTML('beforeend', catalogListTemplate);

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