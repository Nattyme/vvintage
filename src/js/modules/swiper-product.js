function swiperProduct () {
  var productThumbs = new Swiper(".product-thumbs", {
    spaceBetween: 25,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
  });
  var productSwiper = new Swiper(".product-swiper", {
    lazy: true,
    zoom: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".product-swiper__button--next",
      prevEl: ".product-swiper__button--prev",
    },
    thumbs: {
      swiper: productThumbs,
    },
  });

  productSwiper.controller.control = productThumbs ;
 
}

export default swiperProduct;
