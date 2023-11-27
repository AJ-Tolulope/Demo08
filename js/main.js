// AOS Instance
AOS.init({
  duration: 1000
});


new Swiper('.testimonials-section .swiper', {
    loop: true,

    centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: 1,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    navigation: {
      nextEl: '.testimonials-section .swiper-button-next',
      prevEl: '.testimonials-section .swiper-button-prev'
    }
  
});