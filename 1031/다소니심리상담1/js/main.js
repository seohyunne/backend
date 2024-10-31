$(function(){
    // 처음 접속하면 첫 화면의 글자는 나타나지 않음
    // -> 이를 해결하기 위해 setTimeout 사용 (1초 후에 첫 번째 화면 실행되게 하므로 바로 나타남)
    setTimeout(function(){
        $('.slider li .text0').addClass('on');
        $('.slider li .atext0').addClass('on');

    },1000)
 
    var slider = $('.slider').bxSlider({
        auto:true,
        // controls:false,
        pager:false,
        mode: 'fade',
        pause: 5000,
        onSlideBefore:function(){},
        onSlideAfter:function(){
            var k = slider.getCurrentSlide();       //현재의 슬라이드 번호
            $('.slider li').find('h2').removeClass('on');
            $('.slider li').find('p').removeClass('on');
            $('.slider li .text'+k).addClass('on');
            $('.slider li .atext'+k).addClass('on');
        }
    });


});