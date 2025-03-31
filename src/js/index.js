// Мобильная навигация

// import mobileNav from './modules/mobile-nav.js';
import tab from './modules/tab.js';
import addSubNavCats from './modules/addSubNavCats.js';
//fancybox
import fancyBox from './modules/fancybox.js';
import yMap from './modules/ymap.js';
// mobileNav();

tab();
fancyBox();

   // Debounce
   const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout( () => func.apply(this, args), delay);
    }
  }


addSubNavCats();
// yMap();

