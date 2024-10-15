// Мобильная навигация
import isMobile from './modules/is-mobile.js';
// import mobileNav from './modules/mobile-nav.js';
import tab from './modules/tab.js';

// swipers
import swiperHeader from './modules/swiper.js';
import swiperAbout from './modules/swiper-about.js';
import swiperProduct from './modules/swiper-product.js';

// header bg change on scroll
import headerTopChange from './modules/header-bg-change.js';
import yMap from './modules/ymap.js';
// mobileNav();

  isMobile();
  tab();
  headerTopChange();
  swiperHeader();
  swiperAbout();
  swiperProduct();
  yMap();



