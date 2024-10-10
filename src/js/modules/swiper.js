import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperHeader () {
 
    const swiperHeaderText = new Swiper(".swiperHeaderText", {
      autoplay:{
        delay:	5000,
        pauseOnMouseEnter: true,
      },
      spaceBetween: 30,
      slidesPerView: 1,
      speed: 2000,
      loop: true,
      watchSlidesProgress: false,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  
    const swiperHeaderImg = new Swiper(".swiperHeaderImg", {
      watchSlidesProgress: false,
      speed: 2000,
      loop: true,
      watchSlidesProgress: false,
      spaceBetween: 30,
    });

    const swipeAllSliders = (realIndex) => {
      swiperHeaderText.slideToLoop(realIndex);
      swiperHeaderImg.slideToLoop(realIndex);
    };
    
    swiperHeaderText.on('slideChange', () => swipeAllSliders( swiperHeaderText.realIndex));
}

export default swiperHeader;