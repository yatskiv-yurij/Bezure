import * as flsFunctions from "./modules/webp.js";

import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);
flsFunctions.isWebp();

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 1.8,
        spaceBetween: 40
      },
      500: {
        slidesPerView: 1.2,
        spaceBetween: 40
      }
    },

    navigation: {
        nextEl: '.reviews__right',
        prevEl: '.reviews__left',
      },
});

const openButton = document.querySelector('.nav__open');
openButton.addEventListener('click', function(){
  openButton.classList.toggle('open');
  document.body.classList.toggle('hidden');
})