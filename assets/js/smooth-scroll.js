/* Smoth scroll */
$(document).ready(function($) {

    $("#smoothScroll").click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });

    $(".scroll").click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1500);
    });

});

const iconLink = document.querySelector('.iconLink');

iconLink.addEventListener('click', (e) => {
    e.preventDefault();
})