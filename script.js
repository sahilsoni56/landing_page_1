var tl = gsap.timeline();
tl.from(" #nav img,#nav h3,#nav button", {
    y: -100,
    duration: 0.3,
    delay: 0.3,
    opacity: 0,
    stagger:0.3
})

tl.from("#main h1",{
    x:-200,
    opacity:0,
    duration:1,
    delay:-0.7,
    stagger:0.3
})
tl.from("#main #imgleft ,#main #imgright",{
    scale:0,
    opacity:0,
    duration:1,
    
    delay:-0.8
})

tl.from("#scroll",{
    opacity:0,
    y:-35,
    repeat:-1,
    duration:0.7,
    yoyo:true
})