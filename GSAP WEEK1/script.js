var animation = gsap.timeline()

animation.from("#nav img,#nav h3,#nav h4,.btn", {
    opacity: 0, duration: 1,
    stagger: .1
})

animation.from("#left-img", {
    xPercent: -25, yPercent: -78, rotationX: "90deg" ,duration:.3
    
})

animation.from("#right-img", {
    xPercent: 25,yPercent:-78,rotationY:"90deg",duration:.3
})

animation.from("#right2-img", {
    xPercent: 25,yPercent:78,rotationZ:"-90deg",duration:.3
 })

animation.from("#left2-img", {
    xPercent: 25,yPercent:-77,rotationY:"90deg",duration:.3
})

animation.from("#main h5",{
    yoyo:true,
    y:30,
    repeat:-1,
    duration:1.2
})

 