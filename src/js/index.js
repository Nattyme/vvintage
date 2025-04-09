// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
import addSideBarCatalog from './modules/addSideBarCatalog.js';
import addSubNavCats from './modules/addSubNavCats.js';
import addSidebarControlPanel from './modules/addSidebarControlPanel.js';
import fancyBox from './modules/fancybox.js';
// import yMap from './modules/ymap.js';

const pageAdmin = '/page-admin.html';
const pageProduct = '/shop-single.html';


document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname !== pageAdmin) {
    mobileNav();
    addSubNavCats();
  }

  if (window.location.pathname === pageProduct) fancyBox();
  if (window.location.pathname === pageAdmin) {
    addSidebarControlPanel();
    addSideBarCatalog();
  };
});

// yMap();

