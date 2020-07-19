$(function() {
    setSlip();



    $(document).scroll(function() {
        var home = $('.home').offset().top;
        var beautiful = $('.beautiful').offset().top;
        var configuration = $('.configuration').offset().top;
        var type = $('.type').offset().top;
        var explain = $('.explain').offset().top;

        //获取当前滚动栏scroll的高度并赋值
        var scrTop2 = $(window).scrollTop();
        //开始判断如果导航栏距离顶部的高度等于当前滚动栏的高度则开启悬浮
        if (scrTop2 <= home) {
            $('.right-nav-item a').css('color', '#f81f2e');
        } else {
            $('.right-nav-item a').css('color', '#757575');

        }

        if (scrTop2 <= beautiful) {
            $('.right-nav-item a').css('color', '#f81f2e');
        } else {
            $('.right-nav-item a').css('color', '#757575');

        }

        if (scrTop2 <= configuration) {
            $('.right-nav-item a').css('color', '#f81f2e');
        } else {
            $('.right-nav-item a').css('color', '#757575');

        }

        if (scrTop2 <= type) {
            $('.right-nav-item a').css('color', '#f81f2e');
        } else {
            $('.right-nav-item a').css('color', '#757575');

        }

        if (scrTop2 <= explain) {
            $('.no-bottom a').css('color', '#f81f2e');
        } else {
            $('.no-bottom a').css('color', '#757575');

        }

    })


    //首先获取导航栏距离浏览器顶部的高度
    var top = $('.header-nav').offset().top;
    //开始监控滚动栏scroll
    $(document).scroll(function() {
        //获取当前滚动栏scroll的高度并赋值
        var scrTop = $(window).scrollTop();
        //开始判断如果导航栏距离顶部的高度等于当前滚动栏的高度则开启悬浮
        if (scrTop > top) {
            $('.header-nav').addClass('nav-bg');
            $('.nav-ul-item').css('color', '#fff');
            $('.nav-title').css('color', '#fff');
        } else {
            //否则清空悬浮
            $('.header-nav').removeClass('nav-bg');
            $('.nav-ul-item').css('color', '#1c1c1c');
            $('.nav-title').css('color', '#3e3f3f');
        }
    })


});

function setSlip() {
    var slip = $('.nav-li-hr');
    var a = $('.nav-ul li:first');
    //初始化滑块
    slip.css({
        'width': a.width() + 10,
        'left': parseInt(a.position().left) + 30 + 'px'
    });
    $('.nav-ul li:not(5)').mouseenter(function() {
        //显示滑块
        if (slip.css('display') == 'none') {
            slip.show();
        };
        //移动滑块
        slip.stop().animate({
            width: $(this).width() + 10,
            left: parseInt($(this).position().left) + 30 + 'px'
        }, 150);
    });
};