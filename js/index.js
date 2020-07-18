$(function() {
    setSlip();

    //首先获取导航栏距离浏览器顶部的高度
    var top = $('.header-nav').offset().top;
    //开始监控滚动栏scroll
    $(document).scroll(function() {
        //获取当前滚动栏scroll的高度并赋值
        var scrTop = $(window).scrollTop();
        //开始判断如果导航栏距离顶部的高度等于当前滚动栏的高度则开启悬浮
        if (scrTop >= top) {
            // $('.header-nav-mid').css({ 'position': 'fixed', 'top': '0', 'width': '100%' });
            $('.nav-bg').css('display', 'block');
            $('.nav-ul-item').css('color', '#fff');
        } else {
            //否则清空悬浮
            // $('.header-nav-mid').css({ 'position': '', 'top': '' });
            $('.nav-bg').css('display', 'none');
            $('.nav-ul-item').css('color', '#fff');
        }
    })
});
var setSlip = function() {
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