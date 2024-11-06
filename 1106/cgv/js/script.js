$(function(){
// 202px 땡기기
    var movieImg = $('#contents .container .movieChart_list .slideBox');
    var total = movieImg.length; // 아직은 10
    var num = 0;
    var w = 202;

    $('#arrow.arrow_wrap.next').click(function(){
        num++;
        $('.listWrap').css('margin-left',-w*num+'px');
        alert(num);
    })
})