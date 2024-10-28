$(function(){

    var top1= $('.area1').offset().top;
    var top2= $('.area2').offset().top;
    var top3= $('.area3').offset().top;
    var top4= $('.area4').offset().top;
    var top5= $('.area5').offset().top;
    console.log(top1, top2, top3, top4, top5);
    // 103 803 1503 2203 2903 
    gap = 700;

    $(window).scroll(function(){
    
        var scroll = $(this).scrollTop();
        console.log(scroll);

        if (scroll>=0 && scroll<700){
            // $('.container > div').eq(0).addClass('on');\
            $('.area1').addClass('on');
        }
        if(scroll>=700 && scroll<1400 ){
            $('.area2').addClass('on');
        }
        if(scroll>=1400 && scroll<2100){            
            $('.area3').addClass('on');
        }
        if(scroll>=2100&& scroll<2800){
            $('.area4').addClass('on');
        }
        if(scroll>=2800&& scroll<3500){
            $('.area5').addClass('on');
        }
        
        // trigger을 이용하여 시작하자마자 실행시키기
        $(window).trigger('scroll');
    })
})