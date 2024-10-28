$(function(){
    $(window).scroll(function(){
        var sct = $(window).scrollTop(); // 마우스 세로스크롤의 값을 구하여 sct에 저장
        $('.s_top').text(sct); // 구해진 스크롤값을 실시간으로 .s_top에 반영
        if(sct>= 450 && sct<=1100){
            $('.left1').addClass('on');
        }
        else{
            $('.left1').removeClass('on');
        }
        if(sct>= 900 && sct<=1500){
            $('.right1').addClass('on');
        }
        else{
            $('.right1').removeClass('on');
        }
        if(sct>=2500){
           setTimeout(function(){
                $('.s4_1').addClass('active');
           },0);
           setTimeout(function(){
                $('.s4_2').addClass('active');
            },400);
            setTimeout(function(){
                $('.s4_3').addClass('active');
            },800);
            setTimeout(function(){
                $('.s4_4').addClass('active');
            },1200);

        }
    });
})