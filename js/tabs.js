document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-how__link').forEach(function(tabLink) {
        tabLink.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.section-how__link').forEach(function(link) {
                link.classList.remove('section-how__link_active')});
                event.currentTarget.classList.add('section-how__link_active');
            document.querySelectorAll('.section-how__block').forEach(function(tabContent) {
                tabContent.classList.remove('section-how__block_active')});
            document.querySelector(`[data-target="${path}"]`).classList.add('section-how__block_active');
            gsap.from('.section-how__subtitle', {opacity: 0, duration: 1})
            gsap.from('.section-how__descr', {opacity: 0, duration: 1})
            gsap.from('.section-how__btn', {opacity: 0, duration: 1, y:50})
            gsap.from('.section-how__img', {opacity: 0, duration: 1.5, x:100})
        })
    })
})