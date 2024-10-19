function swiperHeader () {

  const swiperHeaderText = new Swiper(".swiperHeaderText", {
    // autoplay:{
    //   delay:	2000,
    //   pauseOnMouseEnter: true,
    // },
    // spaceBetween: 30,
    slidesPerView: 1,
    speed: 2000,
    loop: true,
    watchSlidesProgress: false,
    pagination: {
      el: ".swiperHeaderText-pagination",
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {           // added
      crossFade: true     // added(resolve the overlapping of the slides)
    },  
  });

  const swiperHeaderImg = new Swiper(".swiperHeaderImg", {
    // watchSlidesProgress: false,
    speed: 2000,
    loop: true,
    effect: 'fade',
    fadeEffect: {           // added
      crossFade: true     // added(resolve the overlapping of the slides)
    },  
    
    // spaceBetween: 30,
  
  });

  swiperHeaderText.controller.control = swiperHeaderImg;

}

export default swiperHeader;
