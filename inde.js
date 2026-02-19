// Animate the header logo and title
gsap.fromTo(".logo", {opacity: 0, scale: 0}, {opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: "bounce.out"});
gsap.fromTo("h1", {opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 1, delay: 1, ease: "power4.out"});

// Animate social buttons sliding in from the left, one by one, starting hidden
gsap.fromTo(".youtube", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 0.6, delay: 1.5, ease: "power4.out"});
gsap.fromTo(".facebook", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 0.6, delay: 2, ease: "power4.out"});
gsap.fromTo(".instagram", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 0.6, delay: 2.5, ease: "power4.out"});
gsap.fromTo(".tiktok", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 0.6, delay: 3, ease: "power4.out"});
gsap.fromTo(".whatsapp", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 0.6, delay: 3.5, ease: "power4.out"});
gsap.fromTo(".website", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 0.6, delay: 4, ease: "power4.out"});

// Fade in the footer
gsap.fromTo("footer", {opacity: 0}, {opacity: 1, duration: 1, delay: 4.5});

// Animate products with a flashing effect
gsap.utils.toArray('.product').forEach((product, i) => {
  gsap.fromTo(product, 
    {opacity: 0}, // Start fully transparent
    {
      opacity: 1, // End fully opaque
      duration: 0.2, // Short duration for flash effect
      ease: "power4.out",
      scrollTrigger: {
        trigger: product,
        start: "top 90%", // Adjust start position if needed
        end: "top 70%", // Adjust end position if needed
        toggleActions: "play none none none",
        scrub: true,
        onEnter: () => {
          // Flash effect: brief hide and show
          gsap.to(product, {opacity: 0, duration: 0.1, ease: "power4.out", onComplete: () => {
            gsap.to(product, {opacity: 1, duration: 0.1, ease: "power4.out"});
          }});
        }
      }
    }
  );
});
