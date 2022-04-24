

const starting = gsap.timeline();

// starting
//   .to(".logo", { opacity: 1, duration: 1,ease:"ease" })
//   .to(".logo__container", { width: 300 })
//   .to(".hero-image", { opacity: 1 })
//   .to(".social-media",{xPercent:-120},"<");

const bg = document.querySelector(".hero-image");
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
   
    // console.log();
    if (e[0].isIntersecting) {
        bg.classList.add("filter")
    }else{
        bg.classList.remove("filter")

    }
}, options);
observer.observe(about)