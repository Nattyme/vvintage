import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperHeader () {
 
    const swiperHeaderText = new Swiper(".swiperHeaderText", {
      spaceBetween: 20,
      slidesPerView: 1,
      // freeMode: true,
      watchSlidesProgress: true,
    });
    swiper.on('slideChange', function () {
      console.log('slide changed');
    });
    const swiperHeaderImg = new Swiper(".swiperHeaderImg", {
      spaceBetween: 10,
    });

    const swipeAllSliders = (index) => {
      swiperHeaderText.slideToLoop(index);
      swiperHeaderImg.slideToLoop(index);
    };
    
    swiperHeaderText.on('slideChange', () => swipeAllSliders( swiperHeaderText.realIndex));
}

export default swiperHeader;