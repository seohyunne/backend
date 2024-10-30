$(function(){
    var pdt = 0;
    $(window).scroll(function(){
        var sct = $(this).scrollTop();

        pdt = sct *0.0001;
        if(pdt<=1){
            $('#pdt_basic').css('opacity',pdt);
        }


        $('#stop').text(sct);

        // 스크롤 내리면 상단 메뉴 고정
        if(sct >=100){
            $('nav').addClass('fixed');
        }
        else{
            $('nav').removeClass('fixed');
        }


        $('section div').each(function(i){
            if(sct>=$('section div').eq(i).offset().top){
                $('nav ul li').removeClass('on');
                $('nav ul li').eq(i).addClass('on');
            }
        })
        
    })
    $('nav ul li').click(function(){
        var i = $(this).index();
        var top = $('section div').eq(i).offset().top;

        $('html , body').stop().animate({scrollTop:top},1000);
    })

    $('section div').mousewheel(function(event,d){
        // d - 마우스 휠 방향 (+1은 위로 -1은 아래로)
        
        if(d>0){
            var prev = $(this).prev().offset().top;
            $('html, body').stop().animate({scrollTop:prev});
        }
        if(d<0){
            var next = $(this).next().offset().top;
            $('html, body').stop().animate({scrollTop:next});
        }
            event.preventDefault();
    })


    $('#popup').draggable();
    $('#notice_wrap').draggable();



    if($.cookie('pop')!='no'){
        $('#popup').show();
    }

    $('#popup area').eq(0).click(function(){
        $('#popup').fadeOut('fast');
    })
    $('#popup area').eq(1).click(function(){
        $.cookie('pop','no',{expires:1});
        $('#popup').fadeOut('fast');
    })

    if($.cookie('popup')=='none'){
        $('#notice_wrap').hide();
    }
    
    var chk = $('expiresChk');
    
    $('.closeBtn').on('click',closePop);

    function closePop(){
        if(chk.is(":checked")){
            $.cookie('popup','none',{expires:3});
        }
        $("#notice_wrap").fadeOut("fast");
    }
})