$(function(){
 setTimeout(function(){
    $('.slider li .text0').addClass('on');
    $('.slider li .atext0').addClass('on');
 },1000);


var bx = $('.slider').bxSlider({
    auto:true,
    controls:false,
    pager:false,
    mode:'fade',
    pause:5000,
    onSlideBefore:function(){},
    onSlideAfter:function(){
      var k = bx.getCurrentSlide();//현재의 슬라이드 번호
      $('.slider li').find('h2').removeClass('on');
      $('.slider li').find('p').removeClass('on');
      $('.slider li .text'+k).addClass('on');
      $('.slider li .atext'+k).addClass('on');
    }
});

//#s2
var a1 =  $('.s2_title img').offset().top;//   '/'
var a2 = $('.s2_title h2').offset().top; // 제목
var a3 = $('.s2_title p').offset().top; // 내용
var a4 = $('.s2_table li').offset().top; //사각박스
console.log(a1, a2, a3, a4);

$(window).scroll(function(){
    var sct = $(this).scrollTop();

    if (a1 < sct + 700){
        $('.s2_title img').addClass('slide');
    }
    if (a2 < sct + 700){
        $('.s2_title h2').addClass('slide');
    }
    if (a3 < sct + 700){
        $('.s2_title p').addClass('slide');
    }
    if (a4 < sct + 700){
        $('.s2_table li').eq(0).addClass('slide');
        setTimeout(function(){
            $('.s2_table li').eq(1).addClass('slide');
        },300)
        setTimeout(function(){
            $('.s2_table li').eq(2).addClass('slide');
        },600)
        setTimeout(function(){
            $('.s2_table li').eq(3).addClass('slide');
        },900)
    }


    // 변수 더 안 쓰고 s3 도전 
    // section의 높이인 635 더하면 됨.
    if (a1+635 < sct + 700){
        $('.s3_title img').addClass('slide');
    }
    if (a2+635 < sct + 700){
        $('.s3_title h2').addClass('slide');
    }
    if (a3+635 < sct + 700){
        $('.s3_title p').addClass('slide');
    }
    if (a4+635 < sct + 700){
        // 처음 하나는 무조건 시작
        $('.s3_table li').eq(0).addClass('slide');
        // 나머지는 3초 시간차로
        setTimeout(function(){
            $('.s3_table li').eq(1).addClass('slide');
        },300)
        setTimeout(function(){
            $('.s3_table li').eq(2).addClass('slide');
        },600)
        setTimeout(function(){
            $('.s3_table li').eq(3).addClass('slide');
        },900)
        setTimeout(function(){
            $('.s3_table li').eq(4).addClass('slide');
        },1200)
    }

    // s4
    if (a1+635*2 < sct + 700){
        $('.s4_title img').addClass('slide');
    }
    if (a2+635*2 < sct + 700){
        $('.s4_title h2').addClass('slide');
    }
    if (a3+635*2 < sct + 700){
        $('.s4_title p').addClass('slide');
    }
    if (a4+635*2 < sct + 700){
        // 처음 하나는 무조건 시작
        $('.s4_table li').eq(0).addClass('slide');
        // 나머지는 3초 시간차로
        setTimeout(function(){
            $('.s4_table li').eq(1).addClass('slide');
        },300)
        setTimeout(function(){
            $('.s4_table li').eq(2).addClass('slide');
        },600)
        setTimeout(function(){
            $('.s4_table li').eq(3).addClass('slide');
        },900)
    }


    // s5
    if (a1+635*2+420  < sct + 700){
        $('.s5_title img').addClass('slide');
    }
    if (a2+635*2+420  < sct + 700){
        $('.s5_title h2').addClass('slide');
    }
    if (a3+635*2+420  < sct + 700){
        $('.s5_title p').addClass('slide');
    }
    if (a3+635*2+420  < sct + 700){
        $('.s5_title a').addClass('slide');
    }


    // s6
    if (a1+635*2+420+400  < sct + 700){
        $('.s6_content img').addClass('slide');
    }
    if (a2+635*2+420+400  < sct + 700){
        $('.s6_content h2').addClass('slide');
    }
    if (a3+635*2+420+400  < sct + 700){
        $('.s6_title').addClass('slide');
    }
    if (a3+635*2+420+400  < sct + 700){
        $('.s6_date').addClass('slide');
    }


    // 오른쪽 메뉴 스크롤바
    var first_top = $('.fix_box').offset().top;  // 스크롤바 높이 (400px)

        
    // alert(top);
    var scrollTop = $(window).scrollTop(); // 현재 스크롤 높이
    
    $('.fix_box').stop().animate({top:first_top+scrollTop},500)
    



    // 팝업창

    $('#popup').draggable();

});



});