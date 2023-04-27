const badgeEl = document.querySelector('.header .badges')
const toTopEl = document.querySelector('#to-top')
window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, 0.6,{
            opacity : 0,
            display : 'none'
        })
        gsap.to(toTopEl,.2,{
            x:0
        })
    } else {
        gsap.to(badgeEl, 0.6,{
            opacity : 1,
            display : 'block' 
        })
        gsap.to(toTopEl,.2,{
            x:100
        })
    }
}, 300))


toTopEl.addEventListener('click',function(){
    gsap.to(window, 0.7,{
        scrollTo:0
    })
})

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl, 1, {
        delay: (index+1) * 0.7,
        opacity: 1
    });
})

new Swiper('.notice-line .swiper-container', {
    direction: "vertical",
    autoplay: true,
    loop: true
}); // 생성자(클래스)

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
      el: ".promotion .swiper-pagination",
      clickable: true,
    },
    navigation:{
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    loop: true,
    autoplay: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation:{
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromtion = false;

promotionToggleBtn.addEventListener('click',function(){
    isHidePromtion = !isHidePromtion
    if(isHidePromtion){
        promotionEl.classList.add('hide')
    }else{
        promotionEl.classList.remove('hide')
        
    }
})

function random(min,max){
    return parseFloat((Math.random()*(max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5,2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0,delay),
    })
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', 0.5, 15)
floatingObject('.floating3', 1, 20)

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement:spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook:0.8,

        })
        .setClassToggle(spyEl,'show')
        .addTo(new ScrollMagic.Controller());
})
