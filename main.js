
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
    display:"none"
  })
  .to(".green h1", {
    xPercent: -100,
    opacity: 0,
    display:"none"
  })
  .from(
    ".green .images-wrapper",
    {
      xPercent: 100,
      opacity: 0,
      display:"none"
    },
    "<-.5"
  )
  .to(
    ".green .images-wrapper",
    {
      xPercent: -100,
      opacity: 0,
      display:"none"
    },
    "<.5"
  )
  .from(".red", { xPercent: 100 })
  .from(".red h1", {
    xPercent: 100,
    opacity: 0,
    display:"none"
  })
  .to(".red h1", {
    xPercent: -100,
    opacity: 0,
    display:"none"
  })
  .from(
    ".red .images-wrapper",
    {
      xPercent: -100,
      opacity: 0,
      display:"none"
    },
    "<-.5"
  )
  .to(
    ".red .images-wrapper",
    {
      xPercent: 100,
      opacity: 0,
      display:"none"
    },
    "<.5"
  )
  .from(".pink", { yPercent: -100 })
  .from(".pink h1", {
    xPercent: 100,
    opacity: 0,
    display:"none"
  })
  .to(".pink h1", {
    xPercent: -100,
    opacity: 0,
    display:"none"
  })
  .from(
    ".pink .images-wrapper",
    {
      yPercent: 100,
      opacity: 0,
      display:"none"
    },
    "<-.5"
  )
  .to(
    ".pink .images-wrapper",
    {
      yPercent: -100,
      opacity: 0,
      display:"none"
    },
    "<.5"
  );

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

let timeline2 = gsap.timeline();
timeline2.to(".top .image-container", {
  height: 0,
})
ScrollTrigger.create({
  animation: timeline2,
  trigger: ".second-section",
  start: "center center",
  end: "+=1000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});

let timeline3 = gsap.timeline();
timeline3
  .to(".section_3_01",  {
    y: -250,
    
  })
  .to(
    ".section_3_02",
    
    {
      y: -200,
      
    },
    "<"
  )
  .to(
    ".section_3_03",
    
    {
      y: -100,
      
    },
    "<"
  )
  .to(
    ".section_3_04",
    
    {
      y: 0,
      
    },
    "<"
  )
  .to(
    ".section_3_05",
    
    {
      y: 150,
      
    },
    "<"
  )
  .to(
    ".section_3_06",
    
    {
      y: 250,
      
    },
    "<"
  );

ScrollTrigger.create({
  animation: timeline3,
  trigger: ".third-section",
  start: "center center",
  end: "+=1000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});


