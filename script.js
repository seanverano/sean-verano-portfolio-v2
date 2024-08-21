function cursor() {
    let cursor = document.querySelector(".cursor");
    let body = document.querySelector("body");

    // NOW WE ARE GOING TO ADD AN EVENT LISTER ON OUR MOUSE

    body.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.x + "px",
        y: e.y + "px",
      });
    });
  }
  cursor();

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
    scrollTrigger: {
      trigger: `.name`,
      start: `bottom top`, 
      end: `top top`, 
      scrub: .25
    }
  });
  
  gsap.to(".name", {
    opacity: 1,
    color: "#FF482A",
    visibility: 'visible',
    duration: 1,
    scrollTrigger: {
        trigger: `.heroImg`,
        start: `center center`,
        end: `+=200`,
        scrub: true,
        onEnter: () => {
            // Start the flicker animation
            document.querySelector("#home .name").style.animationPlayState = "running";
        },
        onLeaveBack: () => {
            // Pause the flicker animation when scrolling up
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

  /*ABOUT TEXT WRITING ANIMATION*/
  gsap.registerPlugin(ScrollTrigger);

  // Select the navbar
  const navbar = document.querySelector('.main-nav');
  
  // Create the GSAP timeline for the text animation in the #about section
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about", // The element to trigger the animation
      start: "top top", // When the top of the trigger element hits the top of the viewport
      end: "+=500", // Duration to keep the pin for a bit longer, adjust as needed
      scrub: true, // Smoothly scrubs the animation
      pin: true, // Pin the trigger element in place
      anticipatePin: 1, // Smooth the pinning effect
      onEnter: () => gsap.to(navbar, { opacity: 0, visibility: "hidden", duration: 0.5 }), // Hide the navbar
      onLeaveBack: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 }) // Show the navbar again when scrolling back
    }
  });
  
  // Animate each word from black to white in the #about section
  const words = document.querySelectorAll('.word');
  words.forEach((word, index) => {
    tl.to(word, {
      color: "#E8E8E8", // Final color
      duration: 0.3, // Duration for each word transition
      stagger: 0.05, // Stagger delay between words
      ease: "power1.out" // Easing function
    }, index * 0.05); // Delay the start of each word's animation
  });
  
  // Show navbar when scrolling to the #projects section
  ScrollTrigger.create({
    trigger: "#projects",
    start: "top bottom", // When the top of #projects hits the bottom of the viewport
    end: "bottom bottom", // End when the bottom of #projects hits the bottom of the viewport
    onEnter: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 }), // Show the navbar
    onLeave: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 }) // Ensure the navbar stays visible
  });
  
  // Show navbar when scrolling to the #project-section
  ScrollTrigger.create({
    trigger: "#project-section",
    start: "top bottom", // When the top of #project-section hits the bottom of the viewport
    onEnter: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 }), // Show the navbar
    onLeave: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 }) // Ensure the navbar stays visible
  });
  // script.js
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(".zoom-text", 
    {
      scale: 3, // Start with a large scale
      opacity: 1
    }, 
    {
      scale: .75, // Scale down to normal size
      duration: 1, // Duration of the zoom effect
      scrollTrigger: {
        trigger: "#projects", // The element to trigger the animation
        start: "top top", // Animation starts when the top of the trigger element hits the top of the viewport
        end: "bottom top", // Animation ends when the bottom of the trigger element hits the top of the viewport
        scrub: true, // Smoothly scrubs the animation
        pin: true, // Pin the trigger element while animating
      }
    }
  );

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

  console.clear();

  console.clear();

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

  document.addEventListener("DOMContentLoaded", () => {
    const contactTitle = document.querySelector(".contact-title");
  
    // Set initial state with blur and opacity
    gsap.set(contactTitle, { 
      filter: "blur(10px)", 
      opacity: 0 
    });
  
    gsap.timeline({
      scrollTrigger: {
        trigger: contactTitle,
        start: "top top",  // Start animation when the top of the contactTitle hits the top of the viewport
        end: "+=900",     // End animation after scrolling 900px
        scrub: true,      // Smoothly animate based on scroll position
        pin: false        // Do not pin the trigger element
      }
    })
    .to(contactTitle, { 
      filter: "blur(0px)", 
      opacity: 1,       // Animate opacity from 0 to 1
      duration: 5 
    }); // Clear blur and adjust opacity as you scroll
  });