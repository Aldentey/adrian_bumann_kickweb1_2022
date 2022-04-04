gsap.registerPlugin(ScrollTrigger);


gsap.from('#scroll-text-down', {
    y: -1000,
})

gsap.to('#scroll-text-down', {
    y: 10,

    duration: 2,
    // scrollTrigger: {
    // trigger: ".content1",
    // start: "top 0",
    // end: "+=100",
    // // markers:true,
    // pin:true,
    // scrub: 2}  
})
