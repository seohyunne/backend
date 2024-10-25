$(function(){
    var copyImg = $('.imgs li').eq(0).clone();
    $('.imgs').append(copyImg);

    var i = 0;
    var repeat;

    $('.pager li').click(function(){
        i  = $(this).index();
        $('.imgs').stop().animate({'margin-left':-i*100+'%'},300);

        $('.pager li').removeClass('on');
        $(this).addClass('on');
    })

    $('.next').click(function(){
        i++;
        if(i==5){
            $('.imgs').stop().animate({'margin-left':-i*100+'%'},300,
                function(){$('.imgs').css('margin-left','0');}
            )
            // 이미지가 animate 된 후 margin-left:0 
            i = 0;
        }else{

            $('.imgs').stop().animate({'margin-left':-i*100+'%'},300);
        }
        $('.pager li').removeClass('on');
        $('.pager li').eq(i).addClass('on');
    });

    $(".prev").click(function(){
        if(i == 0){
            i=5;
            $(".imgs").css("margin-left",-i*100+"%");
        }
        i--;
        $(".imgs").stop().animate({
            "margin-left":-i*100+"%"
        },600);
        $(".pager li").removeClass("on");
        $(".pager li").eq(i).addClass("on");
    });

    var id = setInterval(autoplay,3000);
    
    function autoplay(){
        i++;
        if(i==5){
            $('.imgs').stop().animate({'margin-left':-i*100+'%'},300,
                function(){$('.imgs').css('margin-left','0');}
            )
            i = 0;
        }else{

            $('.imgs').stop().animate({'margin-left':-i*100+'%'},300);
        }
        $('.pager li').removeClass('on');
        $('.pager li').eq(i).addClass('on');
    };
    })

    





    // // prev, next 동작
    // var num = 0; 
    // $('.next').click(function(){
    //     if(num==5){
    //         num = 0;
    //         $('.imgs').css('margin-left','0');
    //     }
    //     num++;
    //     $('.imgs').stop().animate({'margin-left':-num*100+'%'},300);

    //     $('.pager li').removeClass('on');
    //     $('.pager li').eq(num).addClass('on');
        
    // })
    // $('.prev').click(function(){
    //     if(num==0){
    //         num = 5;
    //         $('.imgs').css('margin-left',-num*100+'%');
    //     }
    //     num--;
    //     $('.imgs').stop().animate({'margin-left':-num*100+'%'},300);

    //     $('.pager li').removeClass('on');
    //     $('.pager li').eq(num).addClass('on');
    // })

