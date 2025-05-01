// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
import router from './modules/admin/router.js';
import addSidebarControlPanel from "./modules/admin/model/sidebar/addSidebar.js";
import addSubNavCats from './modules/addSubNavCats.js';
import fancyBox from './modules/fancybox.js';
// import yMap from './modules/ymap.js';

const pageAdmin = '/page-admin.html';
const pageProduct = '/shop-single.html';


document.addEventListener('DOMContentLoaded', () => {

  const pathHolder = document.querySelector('[data-config]');
  const path = pathHolder.dataset.config;
  
  addSidebarControlPanel();
  // router();
  if (window.location.pathname !== pageAdmin) {
    mobileNav();
    addSubNavCats();
  }

  if (window.location.pathname === pageProduct) fancyBox();

  if (window.location.pathname.trim() === '/index.html' || window.location.pathname.trim() === '') {
    addCatsCards();
  }

  if( !path) return;
  
  previewLoadImages(
    {
      blockSelector : '[data-preview="block"]',
      imgServerUrl : path,
      closeIconHref : '/static/imgs/svgsprite/sprite.symbol.svg#close',
      onImageLoad : onPreviewImgLoaded
    }
  );
  
  onPreviewImgLoaded();
 
});

// yMap();

