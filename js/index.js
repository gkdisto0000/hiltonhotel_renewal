$(function () {
  // <cnt01 메인 무한루프 슬라이드>
  var cnt01ImageGroup = $('.mainLeft .images');
  var cnt01BtnLeft = $('.mainLeft .btns i').eq(0);
  var cnt01BtnRight = $('.mainLeft .btns i').eq(1);
  // 숫자 바꾸기
  var cnt01BtnNum = $('.mainLeft .btns span');
  var cnt01ArtLen = $('.mainLeft .images').children().length;
  var k = 0;

  // 무한루프 초기세팅
  cnt01ImageGroup.find('.image:last').prependTo(cnt01ImageGroup);
  cnt01ImageGroup.css({
    marginLeft: '-100%'
  });

  // cnt01 오른쪽 버튼
  cnt01BtnRight.click(function () {
    cnt01ImageGroup.stop().animate({
      marginLeft: '-200%'
    }, 500, function () {
      cnt01ImageGroup.find('.image:first').appendTo(cnt01ImageGroup);
      cnt01ImageGroup.css({
        marginLeft: '-100%'
      });
    });
    k++;
    k = (k + cnt01ArtLen) % cnt01ArtLen;
    cnt01BtnNum.text(k + 1);
  });
  // cnt01 왼쪽 버튼
  cnt01BtnLeft.click(function () {
    cnt01ImageGroup.stop().animate({
      marginLeft: '0%'
    }, 500, function () {
      cnt01ImageGroup.find('.image:last').prependTo(cnt01ImageGroup);
      cnt01ImageGroup.css({
        marginLeft: '-100%'
      });
    });
    k--;
    k = (k + cnt01ArtLen) % cnt01ArtLen;
    cnt01BtnNum.text(k + 1);
  });


  // <bnr01 호텔 선택>
  var bnr01Btn = $('.bnrWrap.bnrWrap01 .btn').eq(0);
  var bnr01Ul = $('.bnrWrap.bnrWrap01 ul');
  var bnr01HotelText = $('.bnrWrap.bnrWrap01 h3').eq(0);
  var bnr01LiText = $('.bnrWrap.bnrWrap01 ul li');

  bnr01Btn.click(function () {
    bnr01Ul.toggleClass('show');
  });

  bnr01LiText.click(function () {
    bnr01HotelText.text($(this).text())
  });


  // <bnr02 아코디안>
  var cnt02LiLeft = $('ul.left> li:nth-child(odd)');
  var cnt02LiRight = $('ul.right> li:nth-child(odd)');

  cnt02LiLeft.first().css({
    backgroundColor: '#ccc'
  });

  cnt02LiRight.first().css({
    backgroundColor: '#ccc'
  });

  cnt02LiLeft.click(function () {
    cnt02LiLeft.removeClass('show').css({
      backgroundColor: ''
    });
    $(this).addClass('show').css({
      backgroundColor: '#ccc'
    });
  });
  cnt02LiRight.click(function () {
    cnt02LiRight.removeClass('show').css({
      backgroundColor: ''
    });;
    $(this).addClass('show').css({
      backgroundColor: '#ccc'
    });;
  });



  // <cnt02 무한루프 슬라이드>
  var cnt02ImageGMid = $('.images.middle .artGroup');
  var cnt02ImageGLeft = $('.images.left .artGroup');
  var cnt02ImageGRight = $('.images.right .artGroup');
  var cnt02BtnRight = $('.rightBtn');
  var cnt02BtnLeft = $('.leftBtn');
  // 숫자 바꾸기
  var cnt02NumRight = $('.rightBtn span');
  var cnt02NumLeft = $('.leftBtn span');
  var cnt02ArtLen = $('.images.middle .artGroup').children().length;
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



  // <cookie>
  var cookieBtn = $('.cookiebtns');
  var overlay = $('.overlay');
  var cookieSection = $('.cookie');

  cookieBtn.click(function () {
    $.cookie('may', 'on');
    if ($.cookie('may') == 'on') {
      overlay.css({
        display: 'none'
      });
      cookieSection.css({
        display: 'none'
      });
    }
  });
  if ($.cookie('may') == 'on') {
    overlay.css({
      display: 'none'
    });
    cookieSection.css({
      display: 'none'
    });
  }
});