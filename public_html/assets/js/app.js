ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
})

gsap.fromTo('.fullscreen-bg__video', { y:0, scale: 1.25}, {
    y: 450,
    scale: .55,
    scrollTrigger: {
        trigger: '.fullscreen-bg__video',
        scrub: true,
        start: '200px',
        end: 'bottom'
    }
})
gsap.fromTo('.hero-section', {opacity: 1}, {
    opacity:0,
    scrollTrigger: {
        trigger: '.hero-section',
        scrub: true,
        start: 'top',
        end: 'bottom'
    }
})
gsap.fromTo('.performance', {x: -150, opacity: 0}, {
    x: 0,
    opacity:1,
    scrollTrigger: {
        trigger: '.performance',
        scrub: true,
        start: 'top',
        end: 'center'
    }
})
// gsap.fromTo('.performance-info', {x: 300, opacity: 0}, {
//     x: 0,
//     opacity:1,
//     scrollTrigger: {
//         trigger: '.performance-info',
//         scrub: true,
//         start: 'top',
//         end: 'center'
//     }
// })
