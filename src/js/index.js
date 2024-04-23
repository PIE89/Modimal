// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

// Аккордион
import accordion from "./modules/accordion.js";
accordion();

// Свайпер
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
