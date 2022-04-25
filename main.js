
gsap.registerPlugin(ScrollTrigger)
const starting = gsap.timeline();

// starting
//   .to(".logo", { opacity: 1, duration: 1,ease:"ease" })
//   .to(".logo__container", { width: 300 })
//   .to(".hero-image", { opacity: 1 })
//   .to(".social-media",{xPercent:-120},"<");

const tl = gsap.timeline();
const tl2 =gsap.timeline();
tl.to(".svg__container",{yPercent:-100}).from(".about",{yPercent:100})
tl2
  .from(".green h1", {
    xPercent: 100,
    opacity: 0,
  })
  .to(".green h1", {
    xPercent: -100,
    opacity: 0,
  })
  .from(".red", { xPercent: 100 })
  .from(".offwhite", { xPercent: 100 })
  .from(".pink", { yPercent: -100 });

ScrollTrigger.create({
    animation:tl,
    trigger:"#loading-model",
    start:"top top",
    end:"+=1000",
    scrub:true,
    pin:true,
    anticipatePin:1,
    snap:1
})
ScrollTrigger.create({
    animation:tl2,
    trigger:".section-2",
    start:"top top",
    end:"+=4000",
    scrub:true,
    pin:true,
    anticipatePin:1,
 
})


const section1 = document.querySelector("#loading-model");
const about = document.querySelector(".about")
// bg.addEventListener("mousemove",(e)=>{
//     console.log(`${e.pageX / 100}px ${e.pageY / 100}px`);
//     bg.style.objectPosition = `${e.pageX / 50}px ${e.pageY / 50}px`;
// })
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

let observer = new IntersectionObserver((e)=>{

    console.log("asd");
    if (e[0].isIntersecting) {
        section1.classList.add("filter")
    }else{
        section1.classList.remove("filter")
    }
}, options);
observer.observe(about)