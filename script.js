

// Hero Section Animation

gsap.to("#page", {
  scrollTrigger: {
    trigger: `.heroImg`,
    start: `top 10%`,
    end: `bottom top`,
    pin: true,
    scrub: 0.5
  }
});

gsap.to(".heroImg", {
  opacity: 0,
  scale: 0, 
  scrollTrigger: {
    trigger: `.name`,
    start: `top top`,
    end: `bottom top`,
    scrub: .25
  }
});

gsap.to(".name", {
  opacity: 1,
  color: "#FF4D4D",
  visibility: 'visible',
  duration: .5,
  scrollTrigger: {
    trigger: `.heroImg`,
    start: `center center`,
    end: `+=200`,
    scrub: true,
    onEnter: () => {
      document.querySelector("#home .name").style.animationPlayState = "running";
    },
    onLeaveBack: () => {
      document.querySelector("#home .name").style.animationPlayState = "paused";
    }
  }
});

gsap.to(".hidden", {
  opacity: 1,
  visibility: 'visible',
  scrollTrigger: {
    trigger: `.name`,
    start: `bottom center`,
    end: `+=200`,
    scrub: 0.25
  }
});


// Moving Text Animation
document.addEventListener("DOMContentLoaded", () => {
  function animateMovingText() {
    const movingText = document.querySelector(".moving-text");
    const movingTextTitle = document.querySelector(".moving-text-title");
    const toolsSection = document.querySelector(".tools-section");
    const cursor = document.querySelector(".cursor");

    // Combine selectors for the animation target
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


// About Section Text Animation
gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char) => {
    const bg = char.dataset.bgColor;
    const fg = char.dataset.fgColor;

    // Change SplitType type from 'chars' to 'words'
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
                end: 'top 20%',
                scrub: true,

                toggleActions: 'play play reverse reverse',
            }
        }
    );
});
// 2nd about highlight animation

gsap.registerPlugin(ScrollTrigger);

// Create the timeline for the animation
const tlTwo = gsap.timeline({
  scrollTrigger: {
    trigger: ".pin-section",
    start: "top top",
    end: "+=500", // Adjust this to control the end of the scroll animation
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

// Animate .highlight elements
gsap.registerPlugin(ScrollTrigger);

// Create a GSAP timeline for the highlights
gsap.fromTo(".highlight",
  {
    opacity: 0, 
    y: 20 // Start with a slight offset for a popping effect
  }, 
  {
    opacity: 1,
    y: 0, // End position
    duration: 0.2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".highlight", // Use a common trigger
      start: "top 70%", // Start when the top of the first .highlight reaches 70% of the viewport height
      end: "top 48%", // End when the top of the first .highlight reaches 48% of the viewport height
      scrub: true, // Smooth animation as you scroll
      toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
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
    color: "#E8E8E8",
    duration: 0.3,
    stagger: 0.05,
    ease: "power1.out"
  }, index * 0.05);
});



gsap.registerPlugin(ScrollTrigger);

// Hide navbar when .contact-info section is in view
ScrollTrigger.create({
  trigger: ".contact-info",
  start: "top top", // Trigger when the top of .contact-info reaches the top of the viewport
  end: "bottom top", // Continue until the bottom of .contact-info reaches the top of the viewport
  onEnter: () => gsap.to(navbar, { opacity: 0, visibility: "hidden", duration: 0.5 }),
  onLeaveBack: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 }),
  once: true // Ensure this trigger only fires once and doesn't reapply when scrolling back
});

// Ensure that the navbar remains hidden when scrolling down past .contact-info
ScrollTrigger.create({
  trigger: ".contact-info",
  start: "top top",
  end: "bottom bottom", // End when the .contact-info section is completely out of the viewport
  onLeave: () => gsap.to(navbar, { opacity: 0, visibility: "hidden", duration: 0.5 })
});
// Zoom Text Animation in Projects Section
gsap.fromTo(".zoom-text",
  {
    scale: 30,
    opacity: 1,
    color: "#0C0C0C",
    backgroundColor: "#0C0C0C",
  },
  {
    scale: .75,
    duration: 1,
    color: "#FF4D4D",
    backgroundColor: "#E8E8E8",
    scrollTrigger: {
      trigger: "#projects",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
    }
  }
);

//test project color animation

gsap.registerPlugin(ScrollTrigger);

// Function to animate colors on hover
function animateColors(element) {
  gsap.to(element, {
    backgroundColor: "#0c0c0c",  // New background color on hover
    color: "#e8e8e8",            // New text color on hover
    duration: 0.5,               // Animation duration
  });
}

// Function to revert colors on mouse leave
function revertColors(element) {
  gsap.to(element, {
    backgroundColor: "#e8e8e8",  // Original background color
    color: "#0c0c0c",            // Original text color
    duration: 0.5,               // Animation duration
  });
}

// Event listeners for hover and leave
const projectContainer = document.querySelector(".project-container");

projectContainer.addEventListener("mouseover", () => animateColors(projectContainer));
projectContainer.addEventListener("mouseleave", () => revertColors(projectContainer));


// project container left content animation

gsap.registerPlugin(ScrollTrigger);

// Create a GSAP timeline
let tlFour = gsap.timeline({
  scrollTrigger: {
    trigger: ".left-container",   // Trigger the animation when .left-container comes into view
    start: "top 80%",             // Start the animation when the top of .left-container reaches 80% of the viewport
    end: "bottom 20%",            // End the animation when the bottom of .left-container reaches 20% of the viewport
    toggleActions: "play none none reverse", // Play the animation forward when entering, reverse when leaving
  }
});

// Slide up the entire .left-content
tlFour.from(".left-content", {
  y: 100,         // Slide up from 100px below
  opacity: 0,     // Start from 0 opacity (invisible)
  duration: 1,    // Duration of the animation
  ease: "power2.out" // Easing for smooth animation
})

// Add a 2-second delay and then show the .centered-text
  .from(".centered-text", {
    y: 50,         // Slide up from 50px below
    opacity: 0,    // Start from 0 opacity (invisible)
    duration: 1,   // Duration of the animation
    ease: "power2.out" // Easing for smooth animation
  }, "+=.1");       // "+=

//right container animation fade in

tlFour.from(".right-content", {
  opacity: 0,             // Start fully transparent
  duration: 1.5,          // Duration of the fade-in effect
  ease: "power2.out",     // Easing for smooth animation
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

// Animate new images moving down (opposite direction)
newImgs.forEach(img => {
  const speed = img.dataset.speed;
  gsap.to(img, {
      yPercent: speed * 100, // Reverse the direction by using positive value
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

setInterval(updateLocalTime, 1000); // Update every second
updateLocalTime();


//test

/* -- Text effect -- */

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
  const firstWordWidthTwo = 1310;  // Estimate or measure the width of the first word
  
  gsap.fromTo(".marquee-content-two", 
    {
      x: viewportWidthTwo - firstWordWidthTwo,  // Start with the second word in view
    },
    {
      x: +marqueeWidthTwo,  // Continue scrolling until the entire content is out of view
      ease: "none",
      scrollTrigger: {
        trigger: ".marquee-container-two",
        start: "top center",
        end: () => "+=" + marqueeWidthTwo,
        scrub: true,
      }
    }
  );
  
  //test 


