/*LENIS LIBRARY*/

let lenis;

initLenis = () => {
  lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};

//ensures that the user won't scroll to other sections before the preloader and after the homepage animations

function disableScroll() {
  document.body.classList.add("no-scroll");
}

function enableScroll() {
  document.body.classList.remove("no-scroll");
}

disableScroll();

setTimeout(enableScroll, 9100);

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
    amount: 0.5,
  },
  ease: "power4.inOut",
});

//home/landing page animation

gsap.from(".header-name-two", {
  duration: 1.5,
  delay: 4,
  x: "100%",
  ease: "power4.inOut",
});

gsap.from([".name", ".name-two"], {
  duration: 1.5,
  delay: 5,
  y: 700,
  stagger: {
    amount: 0.5,
    start: 0.2,
  },
  ease: "power4.inOut",
});

gsap.from(".role", {
  duration: 1.5,
  delay: 6.5,
  x: "150%",
  ease: "power4.inOut",
});

gsap.from(".role-text", {
  duration: 1.5,
  delay: 7,
  opacity: 0,
  ease: "power4.inOut",
});

gsap.from(".main-nav", {
  duration: 1.5,
  delay: 8,
  opacity: 0,
  ease: "power4.inOut",
});

//about-intro zoom animation

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
      once: true,
    },
  });

  tl.to(".about-hero-img", {
    scale: 2,
    z: 350,
    transformOrigin: "center center",
    ease: "power1.inOut",
  })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      "<"
    )
    .fromTo(
      ".about-title",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power1.inOut" }
    );
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
    anticipatePin: 1,
  },
});

tlFive
  .from(".left-tool-container", {
    opacity: 0,
    duration: 2,
  })
  .from(
    ".right-tool-container",
    {
      opacity: 0,
      y: 200,
      duration: 2,
    },
    "<+=1"
  )
  .from(
    ".background-text",
    {
      opacity: 0,
      duration: 1,
    },
    "<+=2"
  )
  .from(
    ".diff-font",
    {
      opacity: 0,
      duration: 1,
    },
    "<+=1"
  )
  .from(
    ".btn-four-container",
    {
      opacity: 0,
      y: 20,
      duration: 1,
    },
    "<+=1"
  );

// TOOLS GRID HOVER ANIMATION

const grid = document.querySelector(".grid"),
  gridBox = grid.querySelectorAll(".grid-box");

animateBoxes = () => {
  gridBox.forEach((box) => {
    box.style.filter = "grayscale(100%)";
    box.style.transform = "scale(0.4)";

    box.addEventListener("mouseenter", () => {
      gridBox.forEach((otherBox) => {
        if (otherBox !== box) {
          otherBox.style.filter = "grayscale(100%)";
          otherBox.style.transform = "scale(0.2)";
        } else {
          otherBox.style.filter = "grayscale(0)";
          otherBox.style.transform = "scale(0.6)";
        }
      });
    });

    box.addEventListener("mouseleave", () => {
      gridBox.forEach((otherBox) => {
        otherBox.style.filter = "grayscale(100%)";
        otherBox.style.transform = "scale(0.4)";
      });
    });
  });
};

//HOME TO ABOUT TRANSITION

gsap.registerPlugin(ScrollTrigger);

const homeSection = document.querySelector("#about-intro");
const revealSection = document.querySelector(".reveal-one");

const tlSix = gsap.timeline({
  scrollTrigger: {
    trigger: revealSection,
    start: "top bottom",
    end: "top center",
    scrub: true,
    onEnter: () => {
      gsap.set(revealSection, { visibility: "visible", opacity: 1 });
    },
  },
});

tlSix.to(
  homeSection,
  {
    scale: 0.1,
    opacity: 1,
    ease: "power2.inOut",
  },
  0
);

tlSix.fromTo(
  revealSection,
  {
    opacity: 1,
    y: "5%",
  },
  {
    opacity: 1,
    y: "0%",
    ease: "power2.out",
  },
  0
);

gsap.set(homeSection, { autoAlpha: 1 });

ScrollTrigger.create({
  trigger: homeSection,
  start: "top top",
  end: () => `+=${revealSection.offsetHeight}`,
  pin: true,
  pinSpacing: false,
});

// About Section Text Animation

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char) => {
  const bg = char.dataset.bgColor;
  const fg = char.dataset.fgColor;

  const text = new SplitType(char, { types: "words" });

  gsap.fromTo(
    text.words,
    {
      color: fg,
      scaleY: 0,
      y: -20,
      transformOrigin: "top",
    },
    {
      color: bg,
      scaleY: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: char,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        toggleActions: "play play reverse reverse",
      },
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
  },
});

const nothighlights = document.querySelectorAll(".not-highlight");

tlTwo
  .to(nothighlights, {
    opacity: 1,
    duration: 5,
    ease: "power1.out",
  })
  .to(
    ".reveal-two",
    {
      opacity: 1,
      duration: 5,
      ease: "power1.out",
    },
    "<"
  );

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".highlight-one",
  {
    opacity: 0,
    y: 20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".highlight-one",
      start: "top 70%",
      end: "top 48%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  ".highlight-two",
  {
    opacity: 0,
    y: 20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".highlight-two",
      start: "top 70%",
      end: "top 48%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  ".highlight-three",
  {
    opacity: 0,
    y: 20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".highlight-three",
      start: "top 70%",
      end: "top 48%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

//BACKGROUND/TECHNOLOGY SCROLL MARQUEE

gsap.registerPlugin(ScrollTrigger);

const marqueeWidth = document.querySelector(".marquee-content").offsetWidth;
const viewportWidth = window.innerWidth;

gsap.to(".marquee-content", {
  x: -(marqueeWidth + viewportWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".marquee-container",
    start: "top center",
    end: () => "+=" + marqueeWidth,
    scrub: true,
  },
});

const marqueeContentTwo = document.querySelector(".marquee-content-two");
const marqueeWidthTwo = marqueeContentTwo.offsetWidth;
const viewportWidthTwo = window.innerWidth;
const firstWordWidthTwo = 2630;

gsap.fromTo(
  ".marquee-content-two",
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
    },
  }
);

//navbar visibility animation

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const mainNav = document.querySelector(".main-nav");

  ScrollTrigger.create({
    trigger: "#contacts",
    start: "top center",
    end: "bottom center",
    onEnter: () =>
      gsap.to(mainNav, { opacity: 0, visibility: "hidden", duration: 0.5 }),
    onLeaveBack: () =>
      gsap.to(mainNav, { opacity: 1, visibility: "visible", duration: 0.5 }),
  });
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const navOne = document.querySelector(".ul-one");

  ScrollTrigger.create({
    trigger: "#about-intro",
    start: "top center",
    end: "bottom center",
    onEnter: () =>
      gsap.to(navOne, { opacity: 0, visibility: "hidden", duration: 0.5 }),
    onLeaveBack: () =>
      gsap.to(navOne, { opacity: 1, visibility: "visible", duration: 0.5 }),
  });
});

//TOOL SECTION TO PIN SECTION TRANSITION

gsap.registerPlugin(ScrollTrigger);

const toolsSection = document.querySelector(".tools-section");
const pinSection = document.querySelector(".pin-section");

gsap.timeline({
  scrollTrigger: {
    trigger: pinSection,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      const scale = gsap.utils.interpolate(1, 0.8, self.progress);
      const borderRadius = gsap.utils.interpolate(0, 90, self.progress);
      gsap.set(toolsSection, {
        scale: scale,
        borderRadius: `${borderRadius}px`,
        transformOrigin: "center center",
      });
    },
  },
});

// Zoom Text Animation in Projects Section

gsap.fromTo(
  ".zoom-text",
  {
    scale: 6,
    opacity: 1,
    color: "#0C0C0C",
    backgroundColor: "#0C0C0C",
  },
  {
    scale: 0.75,
    duration: 1,
    color: "#FF5A4D",
    backgroundColor: "#f2f2f2",
    scrollTrigger: {
      trigger: "#projects",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      once: true,
    },
  }
);

// project container left content animation

gsap.registerPlugin(ScrollTrigger);

let tlFour = gsap.timeline({
  scrollTrigger: {
    trigger: ".left-container",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});

tlFour
  .from(".left-content", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  })

  .from(
    ".centered-text",
    {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "+=.1.5"
  );

//right container animation fade in

tlFour.from(".right-content", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

//project pinned lateral animation

gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray(".left-content img");
const rightElements = gsap.utils.toArray(
  ".right-content .right-element-one, .right-content .right-element-two, .right-content .right-element-three"
);

gsap.set(rightElements, { yPercent: 100, opacity: 1 });
gsap.set(rightElements[0], { yPercent: 0, opacity: 1 });

const tlThree = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-container",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    anticipatePin: 1,
  },
});

images.forEach((img, i) => {
  if (rightElements[i + 1]) {
    tlThree
      .to(rightElements[i], { yPercent: -100 }, "+=0.5")
      .to(rightElements[i + 1], { yPercent: 0 }, "<");
  }
});

tlThree.to({}, {}, "+=0.5");

//contact section parallax animation

const originalImgs = gsap.utils.toArray(".contact-img.original");
const newImgs = gsap.utils.toArray(".contact-img.new");

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

originalImgs.forEach((img) => {
  const speed = img.dataset.speed;
  gsap.to(img, {
    yPercent: speed * -100,
    ease: "none",
    scrollTrigger: {
      trigger: originalImgs,
      start: "top bottom",
      scrub: true,
    },
  });
});

newImgs.forEach((img) => {
  const speed = img.dataset.speed;
  gsap.to(img, {
    yPercent: speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: newImgs,
      start: "top bottom",
      scrub: true,
    },
  });
});

//local time

function updateLocalTime() {
  const now = new Date();
  const options = {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const time = now.toLocaleTimeString("en-US", options);
  document.getElementById("local-time").textContent = time;
}

setInterval(updateLocalTime, 1000);
updateLocalTime();

//Footer Roll In Aniamation

gsap.registerPlugin(ScrollTrigger);

const footerAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".open-marquee",
    start: "bottom bottom",
    end: "bottom top",
    scrub: true,
  },
});

footerAnimation.from(".footer-container", {
  y: "100%",
  rotation: 10,
  opacity: 0,
  ease: "power2.out",
});

window.onload = () => {
  initLenis();
  animateBoxes();
};
