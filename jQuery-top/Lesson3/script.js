$(document).ready(function() {
    $('.tab-top').hover(
        function() {
            $(this).find('.none-top').stop(true, true).slideDown(200);
        },
        function() {
            $(this).find('.none-top').stop(true, true).slideUp(200);
        }
    );
    $('.tab-html-css').hover(
        function() {
            $(this).find('.none-html-css').stop(true, true).slideDown(200);
        },
        function() {
            $(this).find('.none-html-css').stop(true, true).slideUp(200);
        }
    );
    $('.tab-jQuery').hover(
        function() {
            $(this).find('.none-jQuery').stop(true, true).slideDown(200);
        },
        function() {
            $(this).find('.none-jQuery').stop(true, true).slideUp(200);
        }
    );

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

        $('a[href^="#"]:not([href="#"])').click(function(){
        let target = $($(this).attr('href')).offset().top;
		//console.log('縦の位置：' + target);
        $('body,html').animate({scrollTop : target}, 500);
    });

});
