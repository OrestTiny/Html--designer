$(document).ready(function() {

  $('.heade .button').click(function() {
    $('html').css('overflow', 'hidden');
    $('.wrap').fadeIn();

    setTimeout(function() {
      $('.enter-panel').animate({
        width: '100%',
      }, 1000);
    }, 400);

    setTimeout(function() {
      $('.enter-box').slideDown();
    }, 700);

  });

  $('.enter-panel-arrow').click(function() {
    $('html').css('overflow', '');
    $('.enter-box').slideToggle();

    $('.enter-panel').animate({
      width: '0',
    });

    setTimeout(function() {
      $('.wrap').fadeOut();
    }, 400);
  });



  var windowWidth = $(window).width();

  if (windowWidth < 1050) {
    $('.enter-panel-arrow').css({
      left: '50%',
      top: '3%',
      transform: 'translateX(-50%)'
    });
  }

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

});