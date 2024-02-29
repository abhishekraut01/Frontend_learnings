gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360
})
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:1,
    // rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box" ,
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 90%",
        scrub:3
    }
})
gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360
})