
// AOS Instance
AOS.init();


new Swiper('.service .swiper', {
    loop: true,

    centeredSlides: true,
    spaceBetween: 30,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    navigation: {
      nextEl: '.service .swiper-button-next',
      prevEl: '.service .swiper-button-prev'
    },

    breakpoints: {
      992: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 1.5,
      },
      576: {
        slidesPerView: 1.2
      }
    }
  
});

new Swiper('.testimonials .swiper', {
    loop: true,


    centeredSlides: true,
    spaceBetween: 30,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    navigation: {
      nextEl: '.testimonials .swiper-button-next',
      prevEl: '.testimonials .swiper-button-prev'
    },

    breakpoints: {
      992: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 1.7,
      },
      576: {
        slidesPerView: 1.2
      }
    }
    
  
});



const menu = document.querySelector('.menu'),
nav = document.querySelector('nav');

menu.addEventListener('click', ()=>{
  nav.classList.toggle('active');
  menu.querySelector('i').classList.toggle('fa-bars');
  menu.querySelector('i').classList.toggle('fa-times');
})


document.addEventListener('scroll', ()=>{
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    menu.querySelector('i').classList.toggle('fa-bars');
    menu.querySelector('i').classList.toggle('fa-times'); 
  }
})