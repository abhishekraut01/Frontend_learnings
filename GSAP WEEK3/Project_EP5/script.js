var animation = gsap.timeline()

animation.to("#loader h1",{
    scale:1.5,
    delay:.5,
    duration:1
})

function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*20)
        if(a<100){
              document.querySelector("#loader h1",).innerHTML =a+"%"
        }else{
            a=100
            document.querySelector("#loader h1",).innerHTML =a+"%"
        }
      
    },150)
}


animation.to("#loader",{
    top:"-100vh",
    delay:.5,
    duration: 1,
    onStart:time(100)
})

gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger: "#page1",
        scroller:"body",
        start:"top 0",
        end:"top -200%",
        scrub:1,
        pin:true,
    }
})