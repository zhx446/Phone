$(function() {
    setSlip();


    $(document).scroll(function() {  
        var scroH = $(document).scrollTop(); //滚动高度
        var viewH = $(window).height(); //可见高度 
        var contentH = $(document).height(); //内容高度

        if (scroH == 0) {
            $('#first').css('color', '#f81f2e');
        } else {
            $('#first').css('color', '#757575');
        }     
        if (scroH > 300 && scroH < 600) { //距离顶部大于100px时
            $('#appearance').css('color', '#f81f2e');
        } else {
            $('#appearance').css('color', '#757575');
        }

        if (scroH > 1000 && scroH < 1600) { //距离顶部大于100px时
            $('#deploy').css('color', '#f81f2e');
        } else {
            $('#deploy').css('color', '#757575');
        }

        if (scroH > 1700 && scroH < 2000) { //距离顶部大于100px时
            $('#version').css('color', '#f81f2e');
        } else {
            $('#version').css('color', '#757575');
        }

        if (contentH - (scroH + viewH) <=  100) { //距离底部高度小于100px
            $('#declare').css('color', '#f81f2e');
        } 
        else {
            $('#declare').css('color', '#757575');
        }   
    });


    // //开始监控滚动栏scroll
    // $(document).scroll(function() {
    //     var home = $('.home').offset().top;
    //     var beautiful = $('.beautiful').offset().top;
    //     var configuration = $('.configuration').offset().top;
    //     var type = $('.type').offset().top;
    //     var explain = $('.explain').offset().top;
    //     //获取当前滚动栏scroll的高度并赋值
    //     var scrTop = $(window).scrollTop();
    //     //开始判断如果导航栏距离顶部的高度等于当前滚动栏的高度则开启悬浮
    //     if (scrTop == 0) {
    //         $('#first').addClass('right-active');
    //     }

    //     if (beautiful > 600) {
    //         $('#appearance').addClass('right-active');
    //     }

    //     if (configuration > 1000) {
    //         $('#deploy').addClass('right-active');
    //     }
    //     if (type > 1200) {
    //         $('#version').addClass('right-active');
    //     }
    //     if (explain > 1500) {
    //         $('#declare').addClass('right-active');
    //     }
    // })

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