const slider = document.querySelector('.swiper');

const swiper = new Swiper(slider, {
    slidesPerView: 1,
    loop: true,
    preventClicks: true,
    setWrapperSize: true,
    autoHeight: true,
    speed: 400,
    spaceBetween: 34,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
    }
  });