$(function() {
    setSlip();

    // 导航栏下滑改变效果
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
            // $('.nav-title').css('color', '#fff');
        } else {
            //否则清空悬浮
            $('.header-nav').removeClass('nav-bg');
            $('.nav-ul-item').css('color', '#1c1c1c');
            // $('.nav-title').css('color', '#3e3f3f');
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
    $('.nav-ul li').mouseenter(function() {
        //显示滑块
        $(this).css('color', '#f81f2e');
        if (slip.css('display') == 'none') {
            slip.show();
        }
        //移动滑块
        slip.stop().animate({
            width: $(this).width() + 10,
            left: parseInt($(this).position().left) + 30 + 'px'
        }, 150);
    });
    $('.nav-ul li').mouseleave(function() {
        $(this).css('color', '#1c1c1c');
    });
};