$(document).ready(function(){
  var swiper = new Swiper('.slider-1', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.slider1-next',
      prevEl: '.slider1-prev',
    },
    pagination: {
      el: '.slider1-pagination',
      dynamicBullets: false,
    },
  });

  var swiper = new Swiper('.slider-3', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.slider3-next',
      prevEl: '.slider3-prev',
    },
    pagination: {
      el: '.slider3-pagination',
      dynamicBullets: false,
    },
  });

  var swiper = new Swiper('.slider-5', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.slider5-next',
      prevEl: '.slider5-prev',
    },
    pagination: {
      el: '.slider5-pagination',
      dynamicBullets: false,
    },
  });

  var swiper = new Swiper('.slider-6', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.slider6-next',
      prevEl: '.slider6-prev',
    },
    pagination: {
      el: '.slider6-pagination',
      dynamicBullets: false,
    },
  });
})