$(function(){
    var a2 = $('#area2').offset().top;
    var a3 = $('#area3').offset().top;
    var ash = $('#ashColorArea').offset().top;   // 4번째 컬러 (진한 회색)
    // console.log(a2,a3,ash);       1050 2100 3150

    $(window).scroll(function(){
        var sct = $(this).scrollTop();
        $('#sValue').text(sct);
        $('#area1').css('background-position-y',sct);   // position: fixed; 와 같은 효과
        if(sct>a2){
            $('#area2').css('background-position-y',sct - a2);
        }else{
            $('#area2').css('background-position-y','top');  // 원상복귀
        }
        if(sct>a3){
            $('#area3').css('background-position-y',(sct - a3)*2);
        }else{
            $('#area3').css('background-position-y','top');
        }
        if(sct>ash){
            var h4 = sct - ash - 800;
            $('#area4').css('background-position-y',h4);
        }else{
            $('#area4').css('background-position-y','-200');
        }
    })
})