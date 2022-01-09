var slideBtns = document.querySelectorAll(".head-slider .slide-btns button")
var slides = document.querySelector(".head-slider .slides")
var slide = document.querySelectorAll(".head-slider .slides .slide")
var slidesHeight = document.querySelector(".head-slider").clientHeight



var i = 0
slide[i].classList.add("active")

function slider() {
    i++;
    if (i == slideBtns.length) {
        i = 0
    }
    for (let a = 0; a < slideBtns.length; a++) {
        slideBtns[a].classList.remove("active");
        slide[a].classList.remove("active")

    }
    slideBtns[i].classList.add("active")
    slides.style.top = -(slidesHeight * i) + "px"
    slide[i].classList.add("active")
}

for (let i = 0; i < slideBtns.length; i++) {
    slideBtns[i].onclick = function () {
        for (let a = 0; a < slideBtns.length; a++) {
            slideBtns[a].classList.remove("active");
            slide[a].classList.remove("active")
        }
        slideBtns[i].classList.add("active")

        slides.style.top = -(slidesHeight * i) + "px"
        slide[i].classList.add("active")
    }


}

setInterval(() => {
    slider()
}, 4000);

var owl = $('.gallery-carousel');
owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

var a = $('.blog');
a.owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    a.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    a.trigger('stop.owl.autoplay')
})


var tabBtns = document.querySelectorAll(".discover .right .tab .headings button")
var tabContent = document.querySelectorAll(".discover .right .tab .tab-content .bottom")
for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].onclick = function () {
        for (let a = 0; a < tabBtns.length; a++) {
            tabContent[a].classList.remove("active");
            tabBtns[a].classList.remove("active")
        }
        tabContent[i].classList.add("active")
        this.classList.add("active")
    };

}

// const counters = document.querySelectorAll('.stats .stat h4');
// const speed = 1000;

// counters.forEach( counter => {
//    const animate = () => {
//       const value = +counter.getAttribute('v');
//       const data = +counter.innerText;

//       const time = value / speed;
//      if(data < value) {
//           counter.innerText = Math.ceil(data + time);
//           setTimeout(animate, 1);
//         }else{
//           counter.innerText = value;
//         }

//    }

//    animate();
// });


var f = 0
$(window).scroll(function () {

    var statTop = $('.stats').offset().top - window.innerHeight;

    if (f == 0 && $(window).scrollTop() > statTop) {
        $('.stats .stat h4').each(function () {
            var $this = $(this);
            jQuery({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
            a = 1
        });
        f = 1;
    }


});
// $(window).scroll(function () {
//     var tourTop = $('.stats').offset().top;
//     if ($(window).scrollTop() > 100) {
//         $('.tours .tour-row').addClass("active")
//     }
// })

// $('.tours .tour-row').addClass("active")

// var tourRow = document.querySelector(".tours .tour-row");
// var windowHeight = window.innerHeight;
// var tourTop = tourRow.getBoundingClientRect().top;
// var elementVisible = 150;
// if (tourTop < windowHeight - elementVisible) {
//     tourRow.classList.add("active");
// }

// var otherBox = document.querySelector(".tours .other-box");
// var otherTop = otherBox.getBoundingClientRect().top;
// if (otherTop < windowHeight - elementVisible) {
//     otherBox.classList.add("active");
// }

function reveal() {
    var reveals = document.querySelectorAll(".scroll");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
  }

  window.addEventListener("scroll", reveal);