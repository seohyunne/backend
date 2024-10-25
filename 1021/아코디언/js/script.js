const btnCollapse = document.querySelector("#btn-collapse");
const heading = document.querySelectorAll(".panel-heading");
const question = document.querySelectorAll(".panel-question");
const p_body = document.querySelectorAll(".panel-body");

heading.forEach(function(headingElement){
    headingElement.addEventListener('click',function(e){
        question.forEach(function(h){
            h.classList.remove('on');
        })
        // 클릭한건 heading인데 on클래스는 부모인 question에 줘야 하므로 parentNode
        e.target.parentNode.classList.add('on');
    });
})
btnCollapse.addEventListener('click',function(){
    question.forEach(function(q){
        q.classList.remove('on');
    });
})