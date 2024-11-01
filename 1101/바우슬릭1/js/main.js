$(function(){
    var pc_prev = $('.pc-slide .prev-btn');
    var pc_next = $('.pc-slide .next-btn');
    var mo_prev = $('.mo-slide .prev-btn');
    var mo_next = $('.mo-slide .next-btn');

    var $slick =  $('.pc-slide ul');


// pc용
    $slick.slick({
        autoplay:true,
        prevArrow: pc_prev,
        nextArrow: pc_next,
        dots:true,
    });

    //mobile용
    $('.mo-slide ul').slick({
        autoplay:true,
        autoplay:true,
        prevArrow: mo_prev,
        nextArrow: mo_next,

    });

    // 화면 사이즈를 바꿨을 때
    $(window).resize(function(){
        var w = $(this).width(); // 화면의 넓이 구하여 w 에 저장
        if(w>=800){
            mo_next.hide();
            mo_prev.hide();
        }
        else{
            mo_next.show();
            mo_prev.show();
        }
    })

    // 처음 실행 시 리사이즈
    $(window).trigger('resize');



    // 슬라이드 넘어갈 때 번호 바뀌게 설정

    // slick 슬라이드 최초로 실행할 때 (init)
    $slick.on('init',function(event, slick){
        // 실행될 내용
    })
    // slick 슬라이드가 바뀔 때 (afterChange)
    $slick.on('afterChange',function(event, slick, currentSlide){
        //currentSlide - 현재 실행되고 있는 슬라이드의 인덱스 번호
        $('.num p strong').text(currentSlide + 1);
    })

    $('.play').click(function(){
        if ($('.play').hasClass('on')){
            $(this).removeClass('on');
            $slick.slick('slickPause');    // 슬라이드를 멈춤
        }
        else{
            $(this).addClass('on');
            $slick.slick('slickPlay');   // 
        }
        return false;
    })

})