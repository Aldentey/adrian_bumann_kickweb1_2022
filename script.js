gsap.registerPlugin(ScrollTrigger);


gsap.from('.yeah2', {
    x: 10,
    y: -10,
    color: "rgba(255,255,255)",
    duration: 2,
    scrollTrigger: {
    trigger: ".content1",
    start: "top 0",
    end: "+=100",
    // markers:true,
    pin:true,
    scrub: 2}  
})

// gsap.from('.choir', {
//     opacity:0, 
//     display:"none",
//     scrollTrigger: {
//         trigger: ".content1",
//         start: "top 0",
//         end: "+=150",
//         // markers:true,
//         pin:true,
//         scrub: 2
//     }  
// })

const tlSvg = gsap.timeline({
    opacity:0, 
    display:"none",
    scrollTrigger: {
        trigger: ".content1",
        start: "10% 15%",
        end: "+=150",
        // markers:true,
        pin:true,
        scrub: 2,
    }
});

tlSvg.from('.choir', {opacity: 0, duration: 1})
    .from('.note1', {opacity: 0, duration: 1})
    .from('.note2', {opacity: 0, duration: 1})
    .from('.note3', {opacity: 0, duration: 1})
    .from('.note4', {opacity: 0, duration: 1})
    .from('.note5', {opacity: 0, duration: 1})




gsap.from('.yeahgoaway', {
    opacity:0, 
    scrollTrigger: {
    trigger: ".yeahgoaway",
    start: "center 90%",
    end: "center 50%",
    // markers:true,
    // pin:true,
    scrub: '.goaway'}  
})


gsap.from('#scroll-text-down', {
    y: -2000,
})

gsap.to('#scroll-text-down', {
    y: 200,

    duration: 2,
    scrollTrigger: {
    trigger: ".yeahgoaway",
    start: "top 80%",
    end: "center 20%",
    // markers:true,
    // pin:true,
    scrub: 1}  
})



gsap.from('#scroll-text-up', {
    y: 200,
})

gsap.to('#scroll-text-up', {
    y: -2700,
    duration: 2,
    scrollTrigger: {
    trigger: ".yeahgoaway",
    start: "top 80%",
    end: "center 20%",
    // markers:true,
    // pin:true,
    scrub: 1}  
})


const tlwe = gsap.timeline({
    scrollTrigger: {
        trigger: ".content21",
        start: "center 50%",
        end: "bottom 0%",
        //markers:true,
        pin:true,
        scrub: 1
    }
});

tlwe.from('.wejustwanna', {opacity: 0, duration: 1})
    .from('.party', {x: -2000})
    .to('.party', {x: 2000})
    .from('.justforyou', {opacity: 0, duration: 1})
    .to('.wejustwanna', {opacity: 0})
    .from('.wejustwantthe', {opacity: 0, duration: 0})
    .from('.money', {x: -2000})
    .to('.partyWithoutLine', {opacity: 0.5, x: -2000})
    .from('.moneySvg', {opacity: 0, duration: 1})



const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".content3",
        start: "top 10%",
        end: "+=1000",
        //markers:true,
        pin:true,
        scrub: true
    }
});

tl.from('.iknow', {opacity: 0, duration: 1})
    .from('.you', {opacity: 0, duration: 1})
    .from('.wannaparty', {opacity: 0, duration: 1})
    .from('.YEAH', {opacity: 0, duration: 1})
    .from('.partyjustfor', {opacity: 0, duration: 1})



    gsap.from('.free', {
        opacity: 0,
        duration: 2,
        scrollTrigger: {
        trigger: ".free",
        start: "bottom 30%",
        end: "bottom 10%",
        // markers:true,
        // pin:true,
        scrub: 1}  
    })
    



const tlShakeTheFrame = gsap.timeline({
    scrollTrigger: {
        trigger: ".content5",
        start: "top 10%",
        end: "center 10%",
        // markers:true,
        pin:true,
        scrub: true
    }
});

tlShakeTheFrame.from('.girlyougotme', {opacity: 0, duration: 1})
    .from('.dancing', {opacity: 0, duration: 1})
    .from('.shakingFrame', {opacity: 0, duration: 1})


const tlgun = gsap.timeline({
    scrollTrigger: {
        trigger: ".content6",
        start: "top 0%",
        end: "center 30%%",
        // markers:true,
        pin:true,
        scrub: true
    }
});

tlgun.from('.ohh', {opacity: 0, duration: 1})
    .from('.gunSvg', {opacity: 0,})


    gsap.to('.ohh', {
        x: 1000,
        duration: 0.5,
        color: 'red',
        scrollTrigger: {
        trigger: ".thisis",
        // toggleActions: 'none restart none none ',
        // start: "bottom 30%",
        // end: "bottom 10%",
        // markers:true,
        // pin:true,
        // scrub: 1
    }  
    })



    
