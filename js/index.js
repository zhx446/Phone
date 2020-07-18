$(function() {

    setSlip();

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