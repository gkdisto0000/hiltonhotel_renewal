$(function () {

  // <main click anchor>
  var mainH3 = $('.mainWrap main .textRight .ovrGridText .texts h3');
  var loc = [];

  for (var i = 0; i < $('body>.cntWrap').length; i++) {
    loc[i] = $('body>.cntWrap').eq(i).offset().top;
  }
  mainH3.click(function () {
    var num = $(this).attr('data-num');
    $('html').animate({ scrollTop: loc[num] }, 500);
  });

  // <cnt02 Infinite Slide>
  var cnt02ImageGMid = $('.content.cnt02 .images.middle .artGroup');
  var cnt02ImageGLeft = $('.content.cnt02 .images.left .artGroup');
  var cnt02ImageGRight = $('.content.cnt02 .images.right .artGroup');
  var cnt02BtnRight = $('.content.cnt02 .rightBtn');
  var cnt02BtnLeft = $('.content.cnt02 .leftBtn');
  // 숫자 바꾸기
  var cnt02NumRight = $('.content.cnt02 .rightBtn span');
  var cnt02NumLeft = $('.content.cnt02 .leftBtn span');
  var cnt02ArtLen = $('.content.cnt02 .images.middle .artGroup').children().length;
  var i = 1;
  var j = 2;

  // 무한루프 초기세팅
  // middle
  cnt02ImageGMid.find('.image:last').prependTo(cnt02ImageGMid);
  cnt02ImageGMid.css({
    marginLeft: '-100%'
  });

  // Left
  cnt02ImageGLeft.find('.image:last').prependTo(cnt02ImageGLeft);
  cnt02ImageGLeft.css({
    marginLeft: '-100%'
  });

  // Right
  cnt02ImageGRight.find('.image:last').prependTo(cnt02ImageGRight);
  cnt02ImageGRight.css({
    marginLeft: '-100%'
  });

  // cnt02 오른쪽 버튼
  cnt02BtnRight.click(function () {
    cnt02ImageGMid.stop().animate({
      marginLeft: '-200%'
    }, 500, function () {
      cnt02ImageGMid.find('.image:first').appendTo(cnt02ImageGMid);
      cnt02ImageGMid.css({
        marginLeft: '-100%'
      });
    });
    cnt02ImageGLeft.stop().animate({
      marginLeft: '-200%'
    }, 500, function () {
      cnt02ImageGLeft.find('.image:first').appendTo(cnt02ImageGLeft);
      cnt02ImageGLeft.css({
        marginLeft: '-100%'
      });
    });
    cnt02ImageGRight.stop().animate({
      marginLeft: '-200%'
    }, 500, function () {
      cnt02ImageGRight.find('.image:first').appendTo(cnt02ImageGRight);
      cnt02ImageGRight.css({
        marginLeft: '-100%'
      });
    });
    // 슬라이드 시 숫자 변환
    i++;
    i = (i + cnt02ArtLen) % cnt02ArtLen;
    cnt02NumRight.text(i + 1);

    j++;
    j = (j + cnt02ArtLen) % cnt02ArtLen;
    cnt02NumLeft.text(j + 1);
  });

  // cnt02 왼쪽 버튼
  cnt02BtnLeft.click(function () {
    cnt02ImageGMid.stop().animate({
      marginLeft: '0%'
    }, 500, function () {
      cnt02ImageGMid.find('.image:last').prependTo(cnt02ImageGMid);
      cnt02ImageGMid.css({
        marginLeft: '-100%'
      });
    });
    cnt02ImageGLeft.stop().animate({
      marginLeft: '0%'
    }, 500, function () {
      cnt02ImageGLeft.find('.image:last').prependTo(cnt02ImageGLeft);
      cnt02ImageGLeft.css({
        marginLeft: '-100%'
      });
    });
    cnt02ImageGRight.stop().animate({
      marginLeft: '0%'
    }, 500, function () {
      cnt02ImageGRight.find('.image:last').prependTo(cnt02ImageGRight);
      cnt02ImageGRight.css({
        marginLeft: '-100%'
      });
    });
    // 슬라이드 시 숫자 변환
    j--;
    j = (j + cnt02ArtLen) % cnt02ArtLen;
    cnt02NumLeft.text(j + 1);

    i++;
    i = (i + cnt02ArtLen) % cnt02ArtLen;
    cnt02NumRight.text(i + 1);
  });

  // <cnt05 map silde>
  var cnt05Li = $('.content.cnt05 li:nth-child(odd)');
  var cnt05MapGroup = $('.maps');

  cnt05Li.click(function () {
    var dataInd = $(this).attr('data-index');
    cnt05MapGroup.css({
      marginLeft: dataInd * -100 + '%'
    });
  });

  // <cnt06 index Slide>
  var cnt06LeftBtn = $('.content.cnt06 .btns i').eq(0);
  var cnt06RightBtn = $('.content.cnt06 .btns i').eq(1);
  var cnt06IndexLi = $('.content.cnt06 .index li');
  var cnt06ArtGroup = $('.content.cnt06 .artGroup');
  var i = 0;

  cnt06IndexLi.click(function () {
    cnt06IndexLi.removeClass('show');
    $(this).addClass('show');
    var ind = $(this).index();
    i = ind;
    cnt06ArtGroup.css({
      marginLeft: ind * -100 + '%'
    });
  });

  cnt06RightBtn.click(function () {
    i++;
    if (i > 2) {
      i = 2;
    }
    cnt06ArtGroup.css({
      marginLeft: i * -100 + '%'
    });
    cnt06IndexLi.removeClass('show');
    cnt06IndexLi.eq(i).addClass('show');
  });

  cnt06LeftBtn.click(function () {
    i--;
    if (i < 0) {
      i = 0;
    }
    cnt06ArtGroup.css({
      marginLeft: i * -100 + '%'
    });
    cnt06IndexLi.removeClass('show');
    cnt06IndexLi.eq(i).addClass('show');
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