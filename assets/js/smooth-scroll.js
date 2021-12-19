jQuery(document).ready((function ($) {
  $("#smoothScroll").click((function (event) {
    event.preventDefault(), $("html, body").animate({
      scrollTop: 0
    }, 200)
  })), $(".scroll").click((function (event) {
    event.preventDefault(), $("html, body").animate({
      scrollTop: $(this.hash).offset().top
    }, 1e3)
  }))
}));