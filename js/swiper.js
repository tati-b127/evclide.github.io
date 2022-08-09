const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    swipe: true,
    // пагинация
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    },
    // навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    });