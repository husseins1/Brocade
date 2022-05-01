
gsap.registerPlugin(ScrollTrigger)
const starting = gsap.timeline();

starting
.to(".logo__container", { opacity: 1, duration: 1,ease:"slow" })

  .to(".logo__container", { width: "30%" })
  .to(".layer",{opacity:0})
  .from(".scroll",{opacity:0})
  .to(".hero-image", { opacity: 1 })
  .to(".social-media",{xPercent:-120},"<");

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
const about = document.querySelector(".about");

// section1.addEventListener("mousemove",(e)=>{
//     console.log(`${e.pageX / 100}px ${e.pageY / 100}px`);
//     section1.style.backgroundPosition = `${e.pageX / 50}px ${e.pageY / 50}px`;
// })
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

let observer = new IntersectionObserver((e)=>{

    if (e[0].isIntersecting) {
        section1.classList.add("filter")
    }else{
        section1.classList.remove("filter")
    }
}, options);
observer.observe(about)
const bgTimeline = gsap.timeline();


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


// time

const year = document.querySelector(".year");
const date = new Date().getFullYear()
year.textContent = date;


// carousel
const controls = document.querySelectorAll(".controls");

let slides = document.querySelectorAll("#all_slides .slide");
let currentSlide = 0;

const nextSlide = () => {
  goToSlide(currentSlide + 1);
};

const previousSlide = () => {
  goToSlide(currentSlide - 1);
};

/*
  this does the magic of moving to the next slide after
  every 2.1 seconds and starting all over.
*/

let slideInterval = setInterval(nextSlide, 2100);

// which slide to move to as denoted by "s"
const goToSlide = (s) => {
  /* 
   when this function is run, hide all slides
   since the slide class has opacity set to 0.
  */
  slides[currentSlide].className = "slide";

  /* assuming we have 4 different slides
        we can index these slides as follows:
        Slide 1 = 0
        Slide 2 = 1
        Slide 3 = 2
        Slide 4 = 3

        Now, we set the current slide index to be zero.

        currentSlide = 0

        Now, we need to find a way to increment the currentSlide index 
        every 2.1 seconds as specified in our setInterval method.

        recall the slide.length = 4
        This tells us that the index stops at 3.

        currentSlide = 0 + 4/4 = 1 [new currentSlide]

        now that the currentSlide is 1, when the setInterval runs 
        it again, we have:

        currentSlide = 1 + 4/4 = 2 [new currentSlide]

        now that the currentSlide is 2, when the setInterval runs 
        it again, we have:

        currentSlide = 2 + 4/4 = 3 [new currentSlide]

        since our index stops at 3. The setInternal starts from the
        beginning again by assigning 0 to currentSlide and doing same 
        process all over again.

     */
  currentSlide = (s + slides.length) % slides.length;
  // in active we set opacity to 1.
  slides[currentSlide].className = "slide active";
};

let playing = true;
let pauseButton = document.querySelector("#pause");

const pauseSlideshow = () => {
  // when slideshow is paused show the play icon
  pauseButton.innerHTML = '<i class="fas fa-play-circle"></i>';
  // when pause we set an interim variable to indicate not playing
  playing = false;
  // stop the sideshow on pause
  clearInterval(slideInterval);
};

const playSlideshow = () => {
  // while playing show the pause icon
  pauseButton.innerHTML = '<i class="fas fa-pause-circle"></i>';
  // when playing we set an interim variable to indicate playing
  playing = true;
  // start a slideshow on play
  slideInterval = setInterval(nextSlide, 2100);
};

pauseButton.onclick = () => {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

let next_btn = document.querySelector("#next");
let previous_btn = document.querySelector("#previous");

next_btn.onclick = () => {
  /* 
    when the next button is clicked do two things:
      1. run the pauseSLideshow function
      2. run the nextSlide function (adding 1 to the currentSlide)
    */
  pauseSlideshow();
  nextSlide();
};
previous_btn.onclick = () => {
  /* 
   when the next button is clicked do two things:
     1. run the pauseSLideshow function
     2. run the previousSlide function (removing 1 from the currentSlide)
   */
  pauseSlideshow();
  previousSlide();
};
