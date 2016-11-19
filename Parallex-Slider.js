/*  PARALLEX SLIDER  */
function simpleParallax() {
  
   var scrolled = $(window).scrollTop() + 1;
   $('.bg-image-section').css('background-position', '0' + -(scrolled * 0.5) + 'px');
   $('.section').css('background-position', '0' + -(scrolled * 0.1) + 'px');
}

$(window).scroll(function (e) {
   simpleParallax();
});
