// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
import tab from './modules/tab.js';
import swiperHeader from './modules/swiper.js';
// import yMap from './modules/ymap.js';
mobileNav();
tab();
// yMap();
swiperHeader();

