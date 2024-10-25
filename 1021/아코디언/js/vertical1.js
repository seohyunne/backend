var sub = document.querySelectorAll(".sub");
var menu = document.querySelectorAll(".m_menu>li>a");

menu.forEach(function(item){
    item.addEventListener('click',function(){
        var subHeight = getComputedStyle(this.nextElementSibling).height;
        // getComputedStyle은 Dom 요소의 현재 스타일을 가져오기 위한 매서드
        // 이 메서드 사용하면 특정 요소에 적용된 모든 스타일 속성과 그 값에 대한 정보를 얻음
        if(subHeight=== '0px'){  // 현재 닫혀 있을 때 실행
            slideUp();
            this.nextElementSibling.style.height = '108px';
        }
        else{
            this.nextElementSibling.style.height = '0px';
        }
    })
})

function slideUp(){
    sub.forEach(function(item){
        item.style.height='0px'; 
    })
}