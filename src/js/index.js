// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
import router from './modules/admin/router.js';
import addSubNavCats from './modules/addSubNavCats.js';
import fancyBox from './modules/fancybox.js';
// import yMap from './modules/ymap.js';

const pageAdmin = '/page-admin.html';
const pageProduct = '/shop-single.html';


document.addEventListener('DOMContentLoaded', () => {
  router();
  if (window.location.pathname !== pageAdmin) {
    mobileNav();
    addSubNavCats();
  }

  if (window.location.pathname === pageProduct) fancyBox();

  if (window.location.pathname.trim() === '/index.html' || window.location.pathname.trim() === '') {
    addCatsCards();
  }
});

// yMap();

