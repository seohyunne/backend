// 연습파일

$(function(){
    var prev = $('.slide_but p .prev');
    var next = $('.slide_but p .next');
    var pause = $('.slide_but p .pause');
    
    var index = 0;       // 다음
    var current = 0;    // 현재
    var total = $('.pop_slide li').length;   // 11

    index = current + 1;
    next.click(function(){
        index = current + 1;
        if (current == total -1)  // 인덱스는 0~10이므로 total-1
            index = 0;
        $('.pop_slide li').eq(current).css('left','0').stop().animate({'left':'-100%'});
        $('.pop_slide li').eq(index).css('left','100%').stop().animate({'left':'0'});
        current = index;
    })
    prev.click(function(){
        index = current - 1;
        if (current == 0)  // 인덱스는 0~10이므로 total-1
            index = total - 1;
        $('.pop_slide li').eq(current).css('left','0').stop().animate({'left':'100%'});
        $('.pop_slide li').eq(index).css('left','-100%').stop().animate({'left':'0'});
        current = index;
    })
})