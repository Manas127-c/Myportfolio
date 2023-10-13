function init() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
init()

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#landing2 h1",
        scroller: "#main",
        // markers: true,
        start: "top 40%",
        end: "top 10%",
        scrub: 3
    }
})
tl.to("#landing2 h1", {
    x: -100,
}, "a")
tl.to("#landing2 h2", {
    x: 100
}, "a")
tl.to("#landing3", {
    width: "80%",
}, "a")
var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#frame3",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 40%",
        scrub: 3
    }
})
var t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".text1 h1",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 3
    }
})
t2.to(".text1 h1", {
    y: -130,
    opacity: 1,
}, "b")
t2.to(".text2 h1", {
    y: 100,
    opacity: 1
}, "b")
t2.from(".box", {
    scale: 0,
    opacity: 0,
}, "b")
t3.to(".text1 h1", {
    y: 50,
    opacity: 0,
}, "b")
t3.to(".text2 h1", {
    y: -50,
    opacity: 0,
}, "b")
t3.to(".box", {
        opacity: 0
    }, "b")
    //************************************cursor-pointer-animation************************************

let cursor = document.querySelector("#cursor")
let main = document.querySelector("#main")
main.addEventListener("mousemove", function(dets) {
    cursor.style.left = (dets.x - 13) + "px"
    cursor.style.top = (dets.y - 13) + "px"
})

//************************************************************************************************

//************************************cursor frame 1 animation************************************
function frame1anime() {
    document.querySelectorAll(".elem").forEach(function(e) {
        // var rotate = 0;
        // var diffrot = 0;
        e.addEventListener("mouseleave", function(dets) {
            gsap.to(e.querySelector("img"), {
                opacity: 0,
                ease: Power3,
            })
        })
    })
    document.querySelectorAll(".elem").forEach(function(e) {
        // var rotate = 0;
        // var diffrot = 0;
        e.addEventListener("mousemove", function(dets) {
            // diffrot = dets.clientX - rotate;
            // rotate = dets.clientX;
            var ydiff = dets.clientY - e.getBoundingClientRect().top
            var xdiff = dets.clientX - e.getBoundingClientRect().left
            var x = e.querySelector("img").getBoundingClientRect().width
            gsap.to(e.querySelector("img"), {
                scale: 1,
                opacity: 1,
                ease: Power3,
                top: ydiff - (x / 2),
                left: xdiff - (x / 2),
                // rotate: gsap.utils.clamp(-20, 20, diffrot)
            })
        })
    })
}
frame1anime()