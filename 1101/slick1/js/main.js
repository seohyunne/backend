$(function(){
    var $slick = $('.visual-img');


    $slick.on('init',function(event,slick){
        $('.visual-item').eq(0).addClass('active');
    })

    $slick.on('afterChange',function(event,slick,currentSlide){
        // event - 이벤트 정보를 기억

        console.log('total slide',slick.slideCount);  // 전체 슬라이드의 개수

        $('.visual-item').removeClass('active');
        $(this).find('.visual-item').eq(currentSlide).addClass('active');
    })

    $slick.slick({
        autoplay:true,
        dots:false,
        arrows:true,
        fade:true,
        autoplaySpeed: 5000,
    });


})