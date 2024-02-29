var animation = gsap.timeline()

animation.from("#nav h1,#nav li,#nav h4", {
    y: -80,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: .3
})

animation.from("#left h1", {
    x: -400,
    opacity: 0,
    duration: .5,
    stagger: .3
})

animation.from("#right svg", {
    scale: .5,
    opacity: 0,
    duration: .5
})

gsap.from("#page2 .box",{
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger:.4,
   
    scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body",
        // markers :true,
        start:"top 89%",
        end :"top 70%",
        scrub:4
    }
})
gsap.to("#scroll h4",{
    yoyo:true,
    y:-30,
    repeat:-1,
    duration:1
})