$(function(){

    // 화면의 사이즈를 조절하면 
    $(window).resize(function(){
        var w = $(this).width();
        // 현재 넓이를 w에 저장
        // console.log(w);
        if(w < 850){

        }else{
            if($('.mobile_nav').hasClass('active')){
                $('.mobile_nav').removeClass('active');
                $('.transparency').removeClass('active');
                $('.mobile_nav .sub').css('display','none');
            }
        }
    });

    $('.nav>ul').mouseenter(function(){
        $(this).addClass('over');
    })
    $('.nav>ul').mouseleave(function(){
        $(this).removeClass('over');
    })
    $('.mobile_tab').click(function(){
        $('.mobile_nav').addClass('active');
        $('.transparency').addClass('active');
        $('.mobile_nav .sub').css('display','none'); // 닫았다가 다시 열었을 때 다 닫혀있게
         // 그런데 화면을 데스크탑 크기로 조정해도 사라지지 않는 문제가 있음. -> 위의 $window resize로 해결 !
        return false;
    })
    $('.close').click(function(){
        $('.mobile_nav').removeClass('active');
        $('.transparency').removeClass('active');
        return false;
    })

    $('.sub').hide();
    $('.mobile_nav>ul>li>a').click(function(){
        if($(this).next('.sub').css('display')==="none"){
            $('.sub').slideUp(300);
            $(this).next('.sub').slideDown(300);
        }else{
            $(this).next('.sub').slideUp(300);
        }
        return false;
// a 있으면 return false 일단 다 쓰자..
    })
});