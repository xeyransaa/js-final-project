var slideBtns = document.querySelectorAll(".head-slider .slide-btns button")
var slides= document.querySelector(".head-slider .slides")
var slide= document.querySelectorAll(".head-slider .slides .slide")
var slidesHeight= document.querySelector(".head-slider").clientHeight



var i=0
slide[i].classList.add("active")
function slider(){
    i++;
    if(i==slideBtns.length){
        i=0
    }
    for (let a = 0; a < slideBtns.length; a++) {
        slideBtns[a].classList.remove("active");
        slide[a].classList.remove("active")
        
    }
    slideBtns[i].classList.add("active")
    slides.style.top=-(slidesHeight*i) + "px"
    slide[i].classList.add("active")
}

for (let i = 0; i < slideBtns.length; i++) {
    slideBtns[i].onclick=function(){
        for (let a = 0; a < slideBtns.length; a++) {
            slideBtns[a].classList.remove("active");
            slide[a].classList.remove("active")
        }
        slideBtns[i].classList.add("active")
        
        slides.style.top=-(slidesHeight*i) + "px"
        slide[i].classList.add("active")
    }
    
    
}

setInterval(() => {
    slider()
}, 4000);
