import addAccordion from "./../addAccordion.js";
import catalogData from './../../../data/categories.json';

const addAdminCatalog = (catalogWrapper) => {
  const cats = JSON.parse(JSON.stringify(catalogData));
  const catalogList = document.querySelector(catalogWrapper);
  const catalogCardsList = document.querySelector('#catalog-cards');
    // Запускаем функцию аккордеона
    setTimeout(() => {
      addAccordion('many', catalogWrapper); 
    }, 0)
  
}

export default addAdminCatalog;