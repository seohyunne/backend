$(function(){

    var dTop = $('#floatdiv').offset().top;   // 오른쪽 버튼bar의 높이 구하기
    // alert(dTop);  -  250px

    $(window).scroll(function(){
        var sct= $(window).scrollTop();
        $('#sTop').text(sct);
        if (sct>=100){
            $('nav').addClass('fixed');
        }
        else{
            $('nav').removeClass('fixed');
        }
    
        // 화면을 스크롤할 때 오른쪽 버튼bar가 따라오게 
        $('#floatdiv').stop().animate({top:dTop+sct},500); 

        // for문
        for (var n=0; n<$('nav ul li').length ; n++){
            if(sct >= $('section>div').eq(n).offset().top){
                $('nav ul li').removeClass('on');
                $('nav ul li').eq(n).addClass('on');
                $('#floatdiv ul li').removeClass('on');
                $('#floatdiv ul li').eq(n).addClass('on');
            }
        }

        // // each문
        // $('section>div').each(function(n){
        //     if(sct >= $('section>div').eq(n).offset().top){
        //         $('nav ul li').removeClass('on');
        //         $('nav ul li').eq(n).addClass('on');
        //         $('#floatdiv ul li').removeClass('on');
        //         $('#floatdiv ul li').eq(n).addClass('on');
        //     };
        // })

    })

    $('nav ul li').click(function(){
        var i = $(this).index();
        var offset_nav = $('section > div').eq(i).offset().top;
        
        $('html, body').stop().animate({scrollTop:offset_nav},1000);
        return false;
    })

    $('#floatdiv ul li').click(function(){
        var i = $(this).index();
        var offset_nav = $('section > div').eq(i).offset().top;
        
        $('html, body').stop().animate({scrollTop:offset_nav},1000);
        return false;

    })

    // // 한 화면씩 스크롤하고 싶을 때 사용 //
    // $('section > div').mousewheel(function(event,d){
    //     // event : 마우스휠의 정보
    //     // d : 이동방향 (위로 올리면 양수(+1), 아래로 내리면 음수(-1))
    //     // console.log(d); 
    //     if (d>0){ // 휠 위로
    //         var prev = $(this).prev().offset().top;
    //         $('html , body').stop().animate({scrollTop:prev},1000,'easeOutBounce')
    //     }
    //     if (d<0){ // 휠 아래로
    //         var next = $(this).prev().offset().top;
    //         $('html , body').stop().animate({scrollTop:next},1000,'easeOutBounce')
    //     }
    // event.preventDefault();
    // });

    // 팝업 창 드래그로 이동
    $('#popup').draggable();

    if($.cookie('pop')!='no'){
        $('#popup').show();
    }

    // 팝업 창 지우기 (창닫기 / 오늘하루보지앟음)
    $('#popup area').eq(0).click(function(){
        $('#popup').fadeOut('fast');
    })
    $('#popup area').eq(1).click(function(){
        $.cookie('pop','no',{expires:1});
        // 하루동안 pop에 no 저장 (하루동안보지않기)
        $('#popup').fadeOut('fast');
    })


    // 공지 팝업창
    $('#notice_wrap').draggable();

    // 처음에는 아무 값도 없으므로 무조건 보이고 시작
    if($.cookie('popup')=='none'){
        $('#notice_wrap').hide();
    }

    // 닫기
    $('.close_btn').click(function(){
        $('#notice_wrap').fadeOut('fast');
    })

    // 3일동안보지않기 
    var chk = $('#expiresChk');

    $('.close_btn').on('click',closePop)
    function closePop(){
        if (chk.is(':checked')){
            $.cookie('popup','none',{expires:3});
            // chk 변수(체크박스)가 checked 가지고 있으면 popup에 none을 3일동안 저장
            $('#notice_wrap').fadeOut('fast');
        }
    }
})