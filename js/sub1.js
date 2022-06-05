$(function () {
  // <cnt01 nav>li click anchor, addClass>
  var cnt01Li = $('.content.cnt01 ul li');
  var loc = [];
  var cnt01All = $('.content.cnt01 ul li').eq(0);

  for (var i = 0; i < $('article').length; i++) {
    loc[i] = $('article').eq(i).offset().top;
  }
  cnt01Li.click(function () {
    var num = $(this).attr('data-num');
    $('html').animate({ scrollTop: loc[num] }, 500);
    cnt01Art.eq(num).addClass('show');
  });

  var cnt01Art = $('.content.cnt01 .texts');
  cnt01Art.click(function(){
    $(this).toggleClass('show');
  });

  cnt01All.click(function(){
    cnt01Art.toggleClass('show');
  });


  // <Top btn>
  $('.Top').click(function () {
    $('html,body').stop().animate({
      scrollTop: '0'
    }, 500)
  });
  $('.Top').css({
    opacity: '0'
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('.Top').css({
        opacity: '1'
      });
    } else {
      $('.Top').css({
        opacity: '0'
      });
    }
  });
});