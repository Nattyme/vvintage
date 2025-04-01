// Мобильная навигация

import mobileNav from './modules/mobile-nav.js';
import addSubNavCats from './modules/addSubNavCats.js';
import addAccordion from './modules/accordion.js';
//fancybox
import fancyBox from './modules/fancybox.js';
// import yMap from './modules/ymap.js';


document.addEventListener('DOMContentLoaded', () => {
  mobileNav();
  // fancyBox(); // запускать только на странице продукта.(сделать проверку какая страница?)
  addAccordion('many', '#accordion-products');
  addSubNavCats();
});

// yMap();

