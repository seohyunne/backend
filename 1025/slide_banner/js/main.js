$(function(){
    var visual = $('#brandVisual > ul > li'); // 메인 사진
    var button1 = $('#buttonList > li'); // 동그라미 버튼
    var current = 0; // 현재
    var id;

    // 변수는 $() 감싸지 않아도 된다
    button1.click(function(){
        var i = $(this).index();  // i = 현재 클릭한 버튼의 인덱스

        button1.removeClass('on');
        button1.eq(i).addClass('on');
        move(i); // 지역변수 i를 다른 함수에서 호출할 때 사용
    });

    function timer(){
        // var id = 
        setInterval(function(){
            var n = current + 1;
            if(n==3){
                n = 0;
            }
            button1.eq(n).trigger('click');
            // 3초마다 n의 값에 따라 button1 클릭을 강제 실행
        },3000);
    }
    timer();   // timer 함수 안에 setInterval 있으므로 3초마다 반복 실행됨
    function move(i){
        if(current == i) return;
        // 현재 활성화된 버튼과 클릭한 버튼이 같으면 리턴 (함수를 빠져나감)
        var currentVisual = visual.eq(current);   // currentVisual = 현재 띄워진 사진
        var nextVisual = visual.eq(i); // nextVisual = 클릭한 인덱스의 사진 (이제 띄워져야 할 사진)
        currentVisual.css('left','0').stop().animate({'left':'-100%'},300);      // 현재 사진 left: -100% 으로 이동
        nextVisual.css('left','100%').stop().animate({'left':'0%'},300);
         // 서서히 오게 하기 위해 처음 css 위치 설정해놓고 animate함.
        
        
        current = i;    // 새로 클릭한 인덱스를 current에 업데이트
    }
});