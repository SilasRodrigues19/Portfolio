/* Smoth scroll */
jQuery(document).ready(function($) {
    $("#smothScroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });

    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 3000);
    });
});

const iconLink = document.querySelector('.iconLink');

iconLink.addEventListener('click', (e) => {
    e.preventDefault();
})