$(function () {

  // main click anchor
  var mainH3 = $('.mainWrap main .textRight .ovrGridText .texts h3');
  var loc = [];

  for (var i = 0; i < $('body>.cntWrap').length; i++) {
    loc[i] = $('body>.cntWrap').eq(i).offset().top;
  }
  mainH3.click(function () {
    var num = $(this).attr('data-num');
    $('html').animate({ scrollTop: loc[num] }, 500);
  });

  // cnt01 slide
  var cnt01BtnUp = $('.cnt01 .btn i').eq(0);
  var cnt01BtnDown = $('.cnt01 .btn i').eq(1);
  var cnt01ArtGroup = $('.cnt01 .artGroup');
  var cnt01BtnNum = $('.cnt01 .num span');
  var cnt01ArtLen = $('.cnt01 .artGroup').children().length;
  var k = 0;

  cnt01ArtGroup.find('.image:last').prependTo(cnt01ArtGroup);
  cnt01ArtGroup.css({
    marginTop: '-47.5%'
  });

  cnt01BtnUp.click(function () {
    cnt01ArtGroup.stop().animate({
      marginTop: '0'
    }, 500, function () {
      cnt01ArtGroup.find('.image:last').prependTo(cnt01ArtGroup);
      cnt01ArtGroup.css({
        marginTop: '-47.5%'
      });
    });
    k--;
    k = (k + cnt01ArtLen) % cnt01ArtLen;
    cnt01BtnNum.text(k + 1);
  });

  cnt01BtnDown.click(function () {
    cnt01ArtGroup.stop().animate({
      marginTop: '-95%'
    }, 500, function () {
      cnt01ArtGroup.find('.image:first').appendTo(cnt01ArtGroup);
      cnt01ArtGroup.css({
        marginTop: '-47.5%'
      });
    });
    k++;
    k = (k + cnt01ArtLen) % cnt01ArtLen;
    cnt01BtnNum.text(k + 1);
  });


  // cnt02 slide
  var cnt02BtnUp = $('.cnt02 .btn .up');
  var cnt02BtnDown = $('.cnt02 .btn .down');
  var cnt02ArtGroup = $('.cnt02 .leftimage .images');
  var cnt02BtnNum = $('.cnt02 .num span');
  var cnt02ArtLen = $('.cnt02 .leftimage .images').children().length;

  cnt02ArtGroup.find('.image:last').prependTo(cnt02ArtGroup);
  cnt02ArtGroup.css({
    marginTop: '-66%'
  });

  cnt02BtnUp.click(function () {
    cnt02ArtGroup.stop().animate({
      marginTop: '0'
    }, 500, function () {
      cnt02ArtGroup.find('.image:last').prependTo(cnt02ArtGroup);
      cnt02ArtGroup.css({
        marginTop: '-66%'
      });
    });
    k--;
    k = (k + cnt02ArtLen) % cnt02ArtLen;
    cnt02BtnNum.text(k + 1);
  });

  cnt02BtnDown.click(function () {
    cnt02ArtGroup.stop().animate({
      marginTop: '-132%'
    }, 500, function () {
      cnt02ArtGroup.find('.image:first').appendTo(cnt02ArtGroup);
      cnt02ArtGroup.css({
        marginTop: '-66%'
      });
    });
    k++;
    k = (k + cnt02ArtLen) % cnt02ArtLen;
    cnt02BtnNum.text(k + 1);
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