import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperHeader () {
 
    const swiperHeaderText = new Swiper(".swiperHeaderText", {
      spaceBetween: 20,
      slidesPerView: 1,
      // freeMode: true,
      watchSlidesProgress: true,
    });
    const swiperHeaderImg = new Swiper(".swiperHeaderImg", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiperHeaderText,
      },
    });
}

export default swiperHeader;