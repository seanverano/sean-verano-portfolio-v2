/*LENIS LIBRARY*/

let lenis;

initLenis = () => {
    lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true
    })

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
};

//preloader animation

function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;
  let duration = 3000; 
  let startTime = null;

  function updateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      
      let percent = Math.min(progress / duration, 1);
      currentValue = Math.floor(percent * 100);
      
      counterElement.textContent = currentValue;
      
      if (percent < 1) {
          requestAnimationFrame(updateCounter);
      } else {
          counterElement.textContent = "100"; 
          document.querySelector("#main").classList.remove("hidden");
          document.querySelector("#main").classList.add("visible");
          document.querySelector(".preloader-text").style.display = "none";
      }
  }

  requestAnimationFrame(updateCounter);
}

startLoader();

gsap.to([".counter", ".preloader-text"], {
    duration: 0.25,
    delay: 3.5,
    opacity: 0,
});

gsap.to(".bar", {
  duration: 1.5,
  delay: 3.5,
  height: 0,
  stagger: {
      amount: 0.5
  },
  ease: "power4.inOut",
});

//home/landing page animation

gsap.from(".header-name-two", {
  duration: 1.5,   
  delay: 4,      
  x: "100%",         
  ease: "power4.inOut" 
});

gsap.from([".name", ".name-two"], {
duration: 1.5, 
delay: 5,      
y: 700,        
stagger: {
    amount: 0.5,  
    start: 0.2    
},
ease: "power4.inOut" 
});

gsap.from(".role", {
  duration: 1.5,   
  delay: 6.5,      
  x: "100%",         
  ease: "power4.inOut" 
});


gsap.from(".role-text", {
  duration: 1.5,   
  delay: 7,         
  opacity: 0,      
  ease: "power4.inOut" 
});

//TOOLS AND TECHNOLOGY ANIMATION

gsap.registerPlugin(ScrollTrigger);

const tlFive = gsap.timeline({
    scrollTrigger: {
        trigger: ".tools-section",
        start: "top top",  
        end: "bottom top", 
        scrub: 1,
        pin: true,  
        anticipatePin: 1  
    }
});

tlFive.from(".left-tool-container", {
    opacity: 0,
    duration: 1
})
.from(".right-tool-container", {
    opacity: 0,
    y: 200,
    duration: 1
}, "<+=0.5")
.from(".background-text", {
  opacity: 0,
  duration: 1
}, "<+=0.5")  
.from(".diff-font", {
  opacity: 0,
  duration: 1
}, "<+=0.5")  
.from(".btn-four-container", {
  opacity: 0,
  y: 20,
  duration: 1
}, "<+=0.5"); 

// TOOLS GRID HOVER ANIMATION

const grid = document.querySelector('.grid'),
     gridBox = grid.querySelectorAll('.grid_box');
     
     animateBoxes = () => {
      gridBox.forEach((box) => {
          box.style.filter = 'grayscale(100%)';
          box.style.transform = 'scale(0.4)';
  
          box.addEventListener('mouseenter', () => {
              gridBox.forEach((otherBox) => {
                  if (otherBox !== box) {
                      otherBox.style.filter = 'grayscale(100%)';
                      otherBox.style.transform = 'scale(0.2)';
                  } else {
                      otherBox.style.filter = 'grayscale(0)';
                      otherBox.style.transform = 'scale(0.6)';
                  }
              });
          });
  
          box.addEventListener('mouseleave', () => {
              gridBox.forEach((otherBox) => {
                  otherBox.style.filter = 'grayscale(100%)';
                  otherBox.style.transform = 'scale(0.4)';
              });
          });
      });
  };


// Moving Text Animation

document.addEventListener("DOMContentLoaded", () => {
  function animateMovingText() {
    const movingText = document.querySelector(".moving-text");
    const movingTextTitle = document.querySelector(".moving-text-title");
    const toolsSection = document.querySelector(".tools-section");
    const cursor = document.querySelector(".cursor");

    const elementsToAnimate = [movingText, toolsSection, movingTextTitle];

    elementsToAnimate.forEach(element => {
      element.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          background: "#E8E8E8",
        });

        gsap.to(elementsToAnimate, {
          backgroundColor: "#0C0C0C",
          color: "#E8E8E8",
          duration: 0.5,
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          background: "#0C0C0C",
        });

        gsap.to(elementsToAnimate, {
          backgroundColor: "#E8E8E8",
          color: "#0C0C0C",
          duration: 0.5,
        });
      });
    });
  }
  
  animateMovingText();
});

//HOME TO ABOUT TRANSITION

gsap.registerPlugin(ScrollTrigger);

const homeSection = document.querySelector('#home');
const revealSection = document.querySelector('.reveal-one');

const tlSix = gsap.timeline({
  scrollTrigger: {
    trigger: revealSection,
    start: "top bottom",
    end: "top center", 
    scrub: true, 
    onEnter: () => {
      gsap.set(revealSection, {visibility: 'visible', opacity: 1});
    }
  }
});


tlSix.to(homeSection, {
  scale: .5, 
  opacity: 0, 
  ease: "power2.inOut"
}, 0); 

tlSix.fromTo(revealSection, {
  opacity: 1,
  y: '20%' 
}, {
  opacity: 1,
  y: '0%',
  ease: "power2.out"
}, 0); 


gsap.set(homeSection, {autoAlpha: 1});

ScrollTrigger.create({
  trigger: homeSection,
  start: "top top",
  end: () => `+=${revealSection.offsetHeight}`,
  pin: true,
  pinSpacing: false
});


// About Section Text Animation

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char) => {
    const bg = char.dataset.bgColor;
    const fg = char.dataset.fgColor;

    
    const text = new SplitType(char, { types: 'words' });

    gsap.fromTo(
        text.words, 
        { 
          color: fg,
          scaleY:0,
          y: -20,
          transformOrigin: 'top',
         },
        { 
            color: bg,
            scaleY: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
                toggleActions: 'play play reverse reverse',
            }
        }
    );
});

// 2nd about highlight animation

gsap.registerPlugin(ScrollTrigger);

const tlTwo = gsap.timeline({
  scrollTrigger: {
    trigger: ".pin-section",
    start: "top top",
    end: "+=500", 
    scrub: true,
    pin: true,
    anticipatePin: 1,
  }
});

const nothighlights = document.querySelectorAll('.not-highlight');

tlTwo.to(nothighlights, {
  opacity: 1,
  duration: 5,
  ease: "power1.out"
})
.to(".reveal-two", {
  opacity: 1,
  duration: 5,
  ease: "power1.out"
}, "<"); 

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".highlight",
  {
    opacity: 0, 
    y: 20 
  }, 
  {
    opacity: 1,
    y: 0, 
    duration: 0.2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".highlight", 
      start: "top 70%", 
      end: "top 48%", 
      scrub: true, 
      toggleActions: "play none none reverse", 
    }
  }
);

// About Section Text Animation

gsap.registerPlugin(ScrollTrigger);
const navbar = document.querySelector('.main-nav');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top top",
    end: "+=500",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onEnter: () => gsap.to(navbar, { opacity: 0, visibility: "hidden", duration: 0.5 }),
    onLeaveBack: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 })
  }
});

const words = document.querySelectorAll('.word');
words.forEach((word, index) => {
  tl.to(word, {
    color: "#f2f2f2",
    duration: 0.3,
    stagger: 0.05,
    ease: "power1.out"
  }, index * 0.05);
});

//BACKGROUND/EXPERIENCE SCROLL MARQUEE

gsap.registerPlugin(ScrollTrigger);

  const marqueeWidth = document.querySelector(".marquee-content").offsetWidth;
  const viewportWidth = window.innerWidth;


  gsap.to(".marquee-content",
    {
    x: -(marqueeWidth + viewportWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".marquee-container",
      start: "top center",
      end: () => "+=" + marqueeWidth,
      scrub: true,
    }
  });


  const marqueeContentTwo = document.querySelector(".marquee-content-two");
  const marqueeWidthTwo = marqueeContentTwo.offsetWidth;
  const viewportWidthTwo = window.innerWidth;
  const firstWordWidthTwo = 2630;  
  
  gsap.fromTo(".marquee-content-two", 
    {
      x: viewportWidthTwo - firstWordWidthTwo,  
    },
    {
      x: +marqueeWidthTwo,  
      ease: "none",
      scrollTrigger: {
        trigger: ".marquee-container-two",
        start: "top center",
        end: () => "+=" + marqueeWidthTwo,
        scrub: true,
      }
    }
  );


//navbar visibility animation


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".contact-info",
  start: "top top", 
  end: "bottom top", 
  onEnter: () => gsap.to(navbar, { opacity: 0, visibility: "hidden", duration: 0.5 }),
  onLeaveBack: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 }),
  once: true 
});

ScrollTrigger.create({
  trigger: ".contact-info",
  start: "top top",
  end: "bottom bottom", 
  onLeave: () => gsap.to(navbar, { opacity: 0, visibility: "hidden", duration: 0.5 })
});

//TOOL SECTION TO PIN SECTION TRANSITION

gsap.registerPlugin(ScrollTrigger);

const toolsSection = document.querySelector('.tools-section');
const pinSection = document.querySelector('.pin-section');

gsap.timeline({
    scrollTrigger: {
        trigger: pinSection,
        start: "top bottom", 
        end: "top top", 
        scrub: true, 
        onUpdate: (self) => {
            const scale = gsap.utils.interpolate(1, 0.8, self.progress);
            gsap.set(toolsSection, { scale: scale, transformOrigin: "center center" });
        }
    }
});



// Zoom Text Animation in Projects Section

gsap.fromTo(".zoom-text",
  {
    scale: 6,
    opacity: 1,
    color: "#0C0C0C",
    backgroundColor: "#0C0C0C",
  },
  {
    scale: .75,
    duration: 1,
    color: "#9d2c2c",
    backgroundColor: "#E8E8E8",
    scrollTrigger: {
      trigger: "#projects",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      anticipatePin: 1 
    }
  }
);

//project reverse color animation

gsap.registerPlugin(ScrollTrigger);


function animateColors(element) {
  gsap.to(element, {
    backgroundColor: "#0c0c0c",  
    color: "#e8e8e8",            
    duration: 0.5,              
  });
}

function revertColors(element) {
  gsap.to(element, {
    backgroundColor: "#e8e8e8",  
    color: "#0c0c0c",            
    duration: 0.5,               
  });
}

const projectContainer = document.querySelector(".project-container");

projectContainer.addEventListener("mouseover", () => animateColors(projectContainer));
projectContainer.addEventListener("mouseleave", () => revertColors(projectContainer));


// project container left content animation

gsap.registerPlugin(ScrollTrigger);


let tlFour = gsap.timeline({
  scrollTrigger: {
    trigger: ".left-container",  
    start: "top 80%",             
    end: "bottom 20%",            
    toggleActions: "play none none reverse", 
  }
});

tlFour.from(".left-content", {
  y: 100,         
  opacity: 0,     
  duration: 1,    
  ease: "power2.out" 
})

  .from(".centered-text", {
    y: 50,        
    opacity: 0,    
    duration: 1,  
    ease: "power2.out" 
  }, "+=.1.5");      

//right container animation fade in

tlFour.from(".right-content", {
  opacity: 0,            
  duration: 1.5,          
  ease: "power2.out",     
});

//project pinned lateral animation

gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray(".left-content img");
const rightElements = gsap.utils.toArray(".right-content .right-element");
gsap.set(rightElements, { yPercent: 100, opacity: 1 });
gsap.set(rightElements[0], { yPercent: 0, opacity: 1 });

const tlThree = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-container",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    anticipatePin: 1 
  }
});

images.forEach((img, i) => {
  if (images[i + 1]) {
    tlThree.to(rightElements[i], { yPercent: -100 }, "+=0.5")
      .to(rightElements[i + 1], { yPercent: 0 }, "<");
  }
});
tlThree.to({}, {}, "+=0.5");

//contact section parallax animation

const originalImgs = gsap.utils.toArray('.contact-img.original');
const newImgs = gsap.utils.toArray('.contact-img.new');

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

originalImgs.forEach(img => {
  const speed = img.dataset.speed;
  gsap.to(img, {
      yPercent: speed * -100,
      ease: 'none',
      scrollTrigger: {
          trigger: originalImgs,
          start: 'top bottom',
          scrub: true
      }
  });
});


newImgs.forEach(img => {
  const speed = img.dataset.speed;
  gsap.to(img, {
      yPercent: speed * 100, 
      ease: 'none',
      scrollTrigger: {
          trigger: newImgs,
          start: 'top bottom',
          scrub: true
      }
  });
});

//local time 

function updateLocalTime() {
  const now = new Date();
  const options = { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const time = now.toLocaleTimeString('en-US', options);
  document.getElementById('local-time').textContent = time;
}

setInterval(updateLocalTime, 1000); 
updateLocalTime();

  
//test 


window.onload = () => {
  initLenis();
  animateBoxes();
};