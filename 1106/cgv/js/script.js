$(function(){
    var swiper = new Swiper('.mySwiper',{
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay:true,
        pagination:{
            el: '.swiper-pagination',
            clickable:true,
        }
    });
    
    $('.btn_eventCntrol').click(function(){
        if($(this).hasClass('on')==false){
            $(this).addClass('on');
            swiper.autoplay.stop();
        }
        else{
            $(this).removeClass('on');
            swiper.autoplay.start();
        }
        

        return false;
    })
// 202px 땡기기
    var movieImg = $('#contents .container .movieChart_list .slideBox');
    var total = movieImg.length; // 아직은 10
    var num=0;
    var w = 202;

    // if(num==0)  $('.prev').hide();
    // if(num==3) $('.next').hide();
    $('.next').click(function(){
        
        if (num==3) {
            $('.prev').show();
            $('.next').hide();
            return;
        }
        num++;
        $('.listWrap').css('margin-left',-w*num*5+'px');
        return false;
    })

    $('.prev').click(function(){
        if (num==0) {
            $('.next').show();
            $('.prev').hide();
            return;
        }        
        num--;
        $('.listWrap').css('margin-left',-w*num*5+'px');
        return false;
    })


})