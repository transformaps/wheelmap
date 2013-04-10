$(document).ready(function() {
  $('.selectpicker').selectpicker();

  I18n.defaultLocale = 'de';
  I18n.locale = $('html').attr('lang');

  $('.status-filter button').popover({trigger: 'hover'});

  $('.btn-searchbar').click(function() {
    $('.navbar-form').toggleClass('active');
  });
  $('.notification.active').slideDown(500).delay(8000).slideUp(400, function() { $(this).remove()});

  $('.close-btn, .btn-start').click(function() {
    $('.overlay').fadeOut(500);
  });


  function ResizeElements() {
    var width = $(window).width();
    if (width < 420) {
      $('.category-filter .filter-option').addClass('icon-tags');
    }
    else {
      $('.category-filter .filter-option').removeClass('icon-tags');
    }
  }
  $(window).load(ResizeElements);
  $(window).resize(ResizeElements);




  if (window.addEventListener) {
    window.addEventListener("load",function() {
      setTimeout(function(){
        window.scrollTo(0, 0);
      }, 0);
    });
  }

  requestNodes(map.getBounds());

});