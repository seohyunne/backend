// getComputedStyle(.nextElementSibling) 사용

const btnCollapse = document.querySelector("#btn-collapse");
const heading = document.querySelectorAll(".panel-heading");
const question = document.querySelectorAll(".panel-question");
const p_body = document.querySelectorAll(".panel-body");

heading.forEach(function(heading){
    heading.addEventListener('click',function(){
        var bodyHeight = getComputedStyle(this.nextElementSibling).height;
    })
})