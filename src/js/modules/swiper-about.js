function swiperAbout () {

  const sliderAbout = new Swiper(".swiperAbout", {
    // autoplay:{
    //   delay:	5000,
    //   pauseOnMouseEnter: true,
    // },
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 2000,
    // watchSlidesProgress: false,
    navigation: {
      prevEl: ".swiperAbout-button-prev",
      nextEl: ".swiperAbout-button-next",
    },
  });
}

export default swiperAbout;
