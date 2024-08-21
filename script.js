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
    color: "#F5D300",
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
          background: "white",
          margin: "20px",
        });
  
        gsap.to(movingText, {
          background: "#141414",
          color: "#E8E8E8",
          duration: 0.5,
        });
      });
  
      movingText.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          height: "18px",
          width: "18px",
          innerHTML: "",
          background: "#141414",
          margin: 0,
        });
  
        gsap.to(movingText, {
          background: "#E8E8E8",
          color: "#141414",
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
  
  // Create the GSAP timeline for the text animation
  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: "#about", // The element to trigger the animation
          start: "top top", // When the top of the trigger element hits the top of the viewport
          end: "+=500", // Duration to keep the pin for a bit longer, adjust as needed
          scrub: true, // Smoothly scrubs the animation
          pin: true, // Pin the trigger element in place
          anticipatePin: 1, // Smooth the pinning effect
          onEnter: () => navbar.classList.add('hidden'), // Add class to hide the navbar
          onLeaveBack: () => navbar.classList.remove('hidden') // Remove class to show the navbar
      }
  });
  
  // Animate each word from black to white
  const words = document.querySelectorAll('.word');
  words.forEach((word, index) => {
      tl.to(word, {
          color: "white", // Final color
          duration: 0.3, // Duration for each word transition
          stagger: 0.05, // Stagger delay between words
          ease: "power1.out" // Easing function
      }, index * 0.05); // Delay the start of each word's animation
  });