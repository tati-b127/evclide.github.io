window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.header__search').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.header__search-form').classList.toggle('header__search-form_active')
    })
    document.querySelector('.header__search_closed').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.header__search-form').classList.toggle('header__search-form_active')
    })
    document.querySelector('.header__search_active').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.header__search-form').classList.remove('header__search-form_active')
    })
})