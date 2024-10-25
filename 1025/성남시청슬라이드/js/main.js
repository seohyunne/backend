$(function(){
    var pop_prev = $('.slide_but p .prev');
    var pop_next = $('.slide_but p .next');
    var pop_pause = $('.slide_but p .pause');

    var popCurrent = 0;
    var popIndex = 0;
    var total = $('.pop_slide li').length;

    pop_next.click(function(){
        popIndex = popCurrent + 1;
        if(popIndex==total) popIndex=0;              // 맨 끝 사진까지 넘어갔을 때  
        
        var pop_cu = $('.pop_slide li').eq(popCurrent); // 현재 사진
        var pop_ne = $('.pop_slide li').eq(popIndex)  // 다움에 올 사진 ( line 11 참고 )
        
        pop_cu.css('left','0').stop().animate({'left':'-100%'});   // 0에서 -100%로 이동 (왼쪽으로)
        pop_ne.css('left','100%').stop().animate({'left':'0'});
        popCurrent = popIndex;

        $('.slide_but p strong').text(popIndex+1)  // 숫자 하나 증가
    })

    pop_prev.click(function(){
        popIndex = popCurrent -1;
        if(popIndex == -1){
            popIndex = total -1;
        }
        var pop_cu = $('.pop_slide li').eq(popCurrent); // 현재 사진
        var pop_ne = $('.pop_slide li').eq(popIndex) ;

        pop_cu.css('left','0').stop().animate({'left':'100%'});
        pop_ne.css('left','-100%').stop().animate({'left':'0'});
    
        popCurrent = popIndex;

        $('.slide_but p strong').text(popIndex+1) 
    });

    var id = setInterval(popAuto,3000);

    function popAuto(){
        pop_next.trigger('click');
    }

    pop_pause.click(function(){
        if($(this).hasClass('on')==false){
            $(this).addClass('on');
            clearInterval(id);
        }else{
            $(this).removeClass('on');
            id=setInterval(popAuto,3000);
        }
    })

})