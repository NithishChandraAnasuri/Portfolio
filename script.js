// ---------------- Cursor Ball ----------------
const cursor = document.createElement("div");
cursor.classList.add("cursor-ball");
document.body.appendChild(cursor);

// Move Cursor Ball with Mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX - 10}px, ${
    e.clientY - 10
  }px)`;
});

// ---------------- GSAP Animations ----------------
gsap.registerPlugin(ScrollTrigger);

// Select all elements with class .description
const splitTypes = document.querySelectorAll(".description");

splitTypes.forEach((char) => {
  // Apply SplitType to each element
  const text = new SplitType(char, { types: "chars, words" });

  // GSAP animation for scroll effect
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false, // Set to true for debugging
    },
    opacity: 0.001,
    y: 20,
    stagger: 0.1,
  });
});

// ---------------- Lenis Smooth Scrolling Fix ----------------
const lenis = new Lenis({
  smooth: true,
  lerp: 0.1, // Adjust the smoothness
  wheelMultiplier: 1, // Adjust the scroll speed
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Ensure GSAP and Lenis work together
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// ---------------- Barba.js Smooth Page Transitions ----------------
barba.init({
  transitions: [
    {
      name: "fade",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.5,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          duration: 0.5,
        });
      },
    },
  ],
});
