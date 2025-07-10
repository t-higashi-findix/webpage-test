$(document).ready(function () {
    // 「TOPに戻る」ボタンの初期化
    let topButton = $('#scrollTop');    // ボタンの要素を変数topButtonに格納
    topButton.hide();   // hideメソッドでtopButtonを非表示にする
    let header = $('header');

    // スクロール時に「TOPに戻る」ボタンを表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            topButton.fadeIn();  // ボタンをフェードインさせる
            header.fadeOut();
        } else {
            topButton.fadeOut();  // ボタンをフェードアウトさせる
            header.fadeIn();
        }

    // ボタンを下からフェードイン
        $('.fade-in').each(function() {
        var pos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var wHeight = $(window).height();
        if (scroll > pos - wHeight + wHeight/100){
            $(this).addClass('inview');
        }
        });
    });

    // クリックでページ先頭に戻るボタン
    topButton.click(function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        },500);  // 500ミリ秒で先頭までスクロールする
    });

    let Link1 = $('#scroll-contents1');;
    
    $('a[href^="#"]:not([href="#"])').click(function(){
        let target = $($(this).attr('href')).offset().top;
		//console.log('縦の位置：' + target);
        $('body,html').animate({scrollTop : target}, 500);
    });

    $('#button1').click(function(){
        $('#pic-1').fadeOut(1000, function() {
            setTimeout(function() {
                $("#pic-1").show();
            }, 0);
        });
    });
    $('#pic-2').hover (
        function(){
            $('#pic-2').hide();
        },
        function(){
            $('#pic-2').show();
        }
    );
    $('#button3').click(function(){
        $('#pic-3').slideUp(1000, function() {
            setTimeout(function() {
                $("#pic-3").show();
            }, 0);
        });
    });

    $('.FAQ').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('-');
      
    }
  });

  $('#Luke_Sleep').fadeOut();

  $('#pic-4').click(function(){
    $('#pic-4').fadeOut();
  });

});