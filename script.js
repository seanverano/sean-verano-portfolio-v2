

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
  color: "#FF482A",
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
    const cursor = document.querySelector(".cursor");

    movingText.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        height: "100px",
        width: "100px",
        innerHTML: "<i class='fa-solid fa-volume-high'></i>",
        fontSize: "25px",
        background: "#E8E8E8",
        margin: "20px",
      });

      gsap.to(movingText, {
        background: "#0C0C0C",
        color: "#E8E8E8",
        duration: 0.5,
      });
    });

    movingText.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        height: "18px",
        width: "18px",
        innerHTML: "",
        background: "#0C0C0C",
        margin: 0,
      });

      gsap.to(movingText, {
        background: "#E8E8E8",
        color: "#0C0C0C",
        duration: 0.5,
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
                markers: false,
                toggleActions: 'play play reverse reverse',
            }
        }
    );
});

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

// Navbar Visibility Control
ScrollTrigger.create({
  trigger: "#projects",
  start: "top bottom",
  end: "bottom bottom",
  onEnter: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 }),
  onLeave: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 })
});

ScrollTrigger.create({
  trigger: "#project-section",
  start: "top bottom",
  onEnter: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 }),
  onLeave: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 })
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
    scale: 3,
    opacity: 1
  },
  {
    scale: .75,
    duration: 1,
    scrollTrigger: {
      trigger: "#projects",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
    }
  }
);

// Project Section Interaction Animation
document.addEventListener("DOMContentLoaded", () => {
  function animateSection(sectionId) {
    const section = document.querySelector(sectionId);
    const cursor = document.querySelector(".cursor");

    section.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        height: "100px",
        width: "100px",
        innerHTML: "<i class='fa-solid fa-volume-high'></i>",
        fontSize: "25px",
        background: "#E8E8E8",
        margin: "20px",
      });

      gsap.to(section, {
        background: "#0C0C0C",
        color: "#E8E8E8",
        duration: 0.5,
      });
    });

    section.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        height: "18px",
        width: "18px",
        innerHTML: "",
        background: "#0C0C0C",
        margin: 0,
      });

      gsap.to(section, {
        background: "#E8E8E8",
        color: "#0C0C0C",
        duration: 0.5,
      });
    });
  }
  animateSection("#projects-section");
});

// Image Zoom and Hero Section Scaling
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});


//about intro list animation

const phrases = ["Introduction", "Profile", "Overview", "Details", "Background"];
  const textElement = document.getElementById('about-list');
  let index = 0;

  function rotateText() {
    textElement.textContent = phrases[index];
    index = (index + 1) % phrases.length;
  }

  setInterval(rotateText, 1000);

  function spark(event) {
    // Get the container element
    const aboutIntro = document.getElementById('about-intro');
    
    if (aboutIntro) {
        let s = document.createElement('s');
        
        // Get the relative position within #about-intro
        const rect = aboutIntro.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        s.style.left = `${x}px`;
        s.style.top = `${y}px`;

        // Randomly set the scale of the spark
        s.style.transform = `scale(${Math.random() * 2 + 1})`;

        // Add random CSS custom properties
        s.style.setProperty('--x', getRandomTransitionValue());
        s.style.setProperty('--y', getRandomTransitionValue());

        // Append the spark to the container
        aboutIntro.appendChild(s);

        // Remove the spark after the animation ends
        setTimeout(() => {
            if (s.parentElement) {
                s.parentElement.removeChild(s);
            }
        }, 2000); // Match the duration of the animation
    }
}

function getRandomTransitionValue() {
    return `${Math.random() * 400 - 200}px`;
}

// Add event listener to the specific container
const aboutIntro = document.getElementById('about-intro');
if (aboutIntro) {
    aboutIntro.addEventListener('mousemove', spark);
}


//test JS
const heading = document.querySelector('h1');
const headingSplit = new SplitType(heading);
const originalImgs = gsap.utils.toArray('.contact-img.original');
const newImgs = gsap.utils.toArray('.contact-img.new');

// Get all the spans (letters) created by SplitType
const letters = heading.querySelectorAll('.char');

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// For each letter, set up a GSAP animation with ScrollTrigger
letters.forEach((letter, index) => {
  const randomYPercent = getRandom(70, 1100);

  gsap.fromTo(letter, 
      { 
          yPercent: -randomYPercent,
          opacity: 0,
      },
      {
          yPercent: 0,
          opacity: 1,
          scrollTrigger: {
              trigger: heading,
              start: "top bottom",
              end: "bottom center",
              scrub: true,
          }
      }
  );
});

// Animate original images moving up
originalImgs.forEach(img => {
  const speed = img.dataset.speed;
  gsap.to(img, {
      yPercent: speed * -100,
      ease: 'none',
      scrollTrigger: {
          trigger: img,
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
          trigger: img,
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





