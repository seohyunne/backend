$(function(){
    var i = 0;   // 클릭한 pager 인덱스
    var k = 0;   // 현재 인덱스
    var repeat;   // 자동슬라이드용 변수

    $('.pager li').on('click',click_slide);
    // on -> pager li의 클릭 기능을 켠 후 click_slide 함수 실행

    function click_slide(){
        $('.pager li').off('click');
        // 슬라이드 되는 동안에는 클릭 기능 끄기 (중복 실행 방지)
        i = $(this).index(); // 전역변수 i에 클릭한 인덱스 저장
        
        // 클릭한 슬라이드가 현재 슬라이드보다 뒤에 있을 때
        if( i > k ){
            $('.imgs li').eq(k).css('left','0').animate({'left':'-100%'},600);
            $('.imgs li').eq(i).css('left','100%').animate({'left':'0'},600,function(){
                $('.pager li').on('click',click_slide);
            });  // 슬라이드 끝난 후에 동작 (콜백함수)
        }

        // 클릭한 슬라이드보다 현재 슬라이드보다 앞에 있을 때
        else if(i < k){
            $('.imgs li').eq(k).css('left','0').animate({'left':'100%'},600);
            $('.imgs li').eq(i).css('left','-100%').animate({'left':'0'},600,function(){
                $('.pager li').on('click',click_slide);
            });
        }
        else{
            $('.pager li').on('click',click_slide);
        }
        $('.pager li').removeClass('on').eq(i).addClass('on');
        
        k = i;
    }

    // 자동 슬라이드 구현
    timer();
    function timer(){
        repeat = setInterval(function(){
            i++;
            if(i==5){
                i=0;
            }
            // 처음에 i++ 하고 시작하기 때문에 두번째 슬라이드부터 동작한다.
            // 첫번째 슬라이드(i=0)부터 시작하게 하기 위한 코드
            $('.imgs li').eq(i-1).css('left','0').animate({'left':'-100%'},600);
            $('.imgs li').eq(i).css('left','100%').animate({'left':'0'},600);
            $('.pager li').removeClass('on').eq(i).addClass('on');
        },3000);
    }

    // pager에 마우스 올리면 자동 슬라이드 기능을 끔
    $('.pager li').mouseover(function(){
        clearInterval(repeat);
    })
    // pager에서 마우스 떼면 자동 슬라이드 기능을 다시 킴
    $('.pager li').mouseleave(function(){
        timer();
    })

    $('.next').on('click',next_slide);
    $('.prev').on('click',prev_slide);

    function next_slide(){
        $('.next').off('click');
        $(document).off('keydown');
        clearInterval(repeat);  // 자동슬라이드 멈춤
        i++;
        if(i==5){
            i=0;
        }
        $('.imgs li').eq(i).css('left','100%').animate({'left':'0%'},600);
        $('.imgs li').eq(i-1).css('left','0').animate({'left':'-100%'},600,function(){
            $('.next').on('click',next_slide);
            $(document).on('keydown',pressKey);
            timer();
        });
        
        $('.pager li').removeClass('on').eq(i).addClass('on');
        k=i;
    }

    function prev_slide(){
        $('.next').off('click');
        $(document).off('keydown');
        clearInterval(repeat);  // 자동슬라이드 멈춤
        i--;
 
        $('.imgs li').eq(i).css('left','100%').animate({'left':'0%'},600);
        $('.imgs li').eq(i+1).css('left','0').animate({'left':'-100%'},600,function(){
            $('.next').on('click',next_slide);
            $(document).on('keydown',pressKey);
            timer();
        });
        if(i==-1){
            i=4;
        }
        $('.pager li').removeClass('on').eq(i).addClass('on');
        k=i;
    }

    function pressKey(e){
            if(e.keyCode == 65  || e. keyCode ==37){

            }
            else if(e.keyCode == 68  || e. keyCode ==39){
                
            }
    }
})