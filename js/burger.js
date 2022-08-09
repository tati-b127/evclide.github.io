window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.header__burger').addEventListener('click', function() {
        document.querySelector('.burger').classList.toggle('burger_active')
        gsap.from('.burger', {opacity: 0, duration: 0.2, x: -400})
    })
    document.querySelector('.header__burger_open').addEventListener('click', function() {
        document.querySelector('.burger').classList.toggle('burger_active')
    })
    document.querySelectorAll('.burger__link').forEach((e) => {
        e.addEventListener('click', function(e) {
        document.querySelector('.burger').classList.remove('burger_active')
    })
    })
})