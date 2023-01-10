var swiper = new Swiper(".client_slider", {
  slidesPerView: 0,
  loop: true,
  pagination: {
    el: ".client_pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1080: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
