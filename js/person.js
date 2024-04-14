const swiper = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    slidesPerView: 1,
    centeredSlides: true,
    // when window width is <= 767px
    768: {
      slidesPerView: 2,
      spaceBetween: 9,
    },
    // when window width is <= 1199px
    1024: {
      slidesPerView: 3,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
    },
  },

  // Keyboard control
  keyboard: {
    enabled: true,
  },

  // Mousewheel control
  mousewheel: {
    enabled: true,
  },
});
