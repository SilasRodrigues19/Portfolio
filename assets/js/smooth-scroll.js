/* Smooth scroll */
$(document).ready(function($) {

    $("#smoothScroll").click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000, 'easeInOutExpo');
    });

    $(".scroll").click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 3000, 'easeInOutExpo');
    });

});


const iconLink = document.querySelector('.iconLink');

iconLink.addEventListener('click', (e) => {
    e.preventDefault();
})