const h1 = document.querySelector('h1')
const h1Wrapper = document.querySelector('.h1-wrapper')
const header = document.querySelector('header')
h1Wrapper.style.height = h1.clientHeight * 3 + 'px';
const skillsSection = document.getElementById('skills')
skillsSection.style.paddingTop = header.clientHeight * 1.5 + 'px'
window.innerWidth / window.innerHeight <= 11/9 && (skillsSection.style.paddingTop = header.clientHeight * 1.2 + 'px')
const skillsContainer = document.querySelector('.skillsContainer')
skillsContainerClass()
let starSize = (window.innerWidth / window.innerHeight >= 1) ? '8vw' : '10vh';



window.addEventListener('resize', ()=>{
    h1Wrapper.style.height = h1.clientHeight * 3 + 'px';
    skillsSection.style.paddingTop = header.clientHeight * 1.5 + 'px';
    window.innerWidth / window.innerHeight <= 11/9 && (skillsSection.style.paddingTop = header.clientHeight * 1.2 + 'px')
    skillsContainerClass()

    window.innerWidth / window.innerHeight >= 1 ? starSize = '8vw' : starSize = '10vh';
    
})



//timelines - animations
let heroBgTL = gsap.timeline({
    scrollTrigger: {
      trigger: '',
      start: `${header.clientHeight} top` ,
      end: `${window.innerHeight} top`,
      scrub: true,
    //   markers: true
    }
})
heroBgTL.to('#background', {top: '-20vh'}, 'start')
heroBgTL.to('header', {backdropFilter: 'blur(10px)'}, 'start')

let heroOverlayTL = gsap.timeline({
    scrollTrigger: {
      trigger: '#heroTrig',
      start: `top top` ,
      end: `bottom top`,
      scrub: true,
    //   markers: true
    }
})
heroOverlayTL.to('#background #front', {opacity: '1'}, 'start')
heroOverlayTL.to('#contentWrapper', {transform: 'translateY(-100vh)'}, 'start')

let expertiseTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#skillsTrig',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        // markers: true
    }
})
expertiseTL.to('.skillsContainer.landscape', {transform: 'translateY(60%) translateX(30%)'}, 'start')
expertiseTL.to('.skillsContainer.tablet .skillsWraper:nth-of-type(1)', {transform: 'translateX(40%)'}, 'start')
expertiseTL.to('.skillsContainer.tablet .skillsWraper:nth-of-type(2)', {transform: 'translateX(-40%)'}, 'start')
expertiseTL.to('.skillsContainer.mobile .skillsWraper:nth-of-type(1)', {transform: 'translateX(75%)'}, 'start')
expertiseTL.to('.skillsContainer.mobile .skillsWraper:nth-of-type(2)', {transform: 'translateX(-60%)'}, 'start')


let skillsOutTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#skillsOutTrig',
        start: `-${window.innerHeight*0.5} bottom`,
        end: `${window.innerHeight*0.5} bottom`,
        scrub: true,
        // markers: true
    }
})
skillsOutTL.to('#contentWrapper', {transform: 'translateY(-200vh)'}, 'start')

let handsTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#marqueeTrig',
        start: `-${window.innerHeight/2} bottom`,
        end: 'bottom top',
        scrub: true,
        // markers: true
    }
})
handsTL.to('.robotHand, .humanHand', {transform: 'none'}, 'start')

let starTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#starTrig',
        start: 'top top',
        end: `${window.innerHeight/2} top`,
        scrub: true,
        // markers: true
    }
})
starTL.to('.star', {transform: 'scale(10)', opacity :'1'})

let marqueeTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#starTrig',
        start: `-${window.innerHeight/2} bottom`,
        end: `${window.innerHeight*1.5} top`,
        scrub: true,
        // markers: true
    }
})
marqueeTL.to('#marquee', {left: 'unset', right: '100%'}, 'start')
marqueeTL.to('#marquee2', {right: 'unset', left: '100%'}, 'start')

let star2TL = gsap.timeline({
    scrollTrigger: {
        trigger: '#star2Trig',
        start: 'top center',
        end: `bottom top`,
        scrub: true,
        // markers: true
    }
})
star2TL.to('.star', {boxShadow: `inset 0 0 16vw 0 #fff, 0 0 16vw 0 #fff, 0 0 32vw ${starSize} #fff`})
star2TL.to('#headerBlack', {opacity: 1}, 'start')
star2TL.to('#headerWhite', {opacity: 0})
//header scroll bar
let progress = document.querySelector('header .scrollBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  let progressHeight = (window.pageYOffset /
  totalHeight)* 100;
  let width = (Math.floor(progressHeight) * window.innerWidth / 100) - 2*Math.trunc(progress.getBoundingClientRect().left)
  if(progressHeight >= 99){width += window.innerWidth / 100}
  if(progressHeight <= 1){width = 0}
  progress.style.width = `${width}px`
}

//some functions

function skillsContainerClass(){
    if(window.innerWidth/window.innerHeight >= 12/9){
        skillsContainer.classList.add('landscape')

        skillsContainer.classList.remove('portrait', 'tablet', 'mobile')
    }else if(window.innerWidth/window.innerHeight >= 6/9){
        skillsContainer.classList.add('tablet')
        skillsContainer.classList.add('portrait')

        skillsContainer.classList.remove('landscape', 'mobile')
    }else{
        skillsContainer.classList.add('mobile')
        skillsContainer.classList.add('portrait')

        skillsContainer.classList.remove('landscape', 'tablet')
    }
}

// lenis setup
const lenis = new Lenis({
    smoothTouch: true,
    duration: 3,
    touchMultiplier: 1
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)