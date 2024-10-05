document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close any previously opened FAQ item
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active"); // Close others
        }
      });

      // Toggle the clicked item
      item.classList.toggle("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  const close = document.getElementById("close");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    hamburger.classList.toggle('active');

  });
  close.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });

  document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");

      question.addEventListener("click", () => {
        // Close any previously opened FAQ item
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active"); // Close others
          }
        });

        // Toggle the clicked item
        item.classList.toggle("active");
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".small-heading", {
    x: -120,
    duration: 1.5,
  });

  gsap.from(".worst-decision", {
    x: -120,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".worst-decision", // Trigger animation when .box enters the viewport
      start: "top 80%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });
  gsap.from(".faq-heading", {
    x: -120,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".faq-section", // Trigger animation when .box enters the viewport
      start: "top 80%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });

  gsap.from(".time-heading", {
    x: -120,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".time-heading", // Trigger animation when .box enters the viewport
      start: "top 80%", // Start the animation when the .box is 80% from the top of the viewport
      toggleActions: "play none none none", // Play the animation on scroll
    },
  });
  gsap.from(".title", {
    y: 40,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".sub-title", {
    y: 40,
    opacity: 0,
    delay: 0.5,
    duration: 1,
  });

  gsap.from(".para", {
    y: 40,
    opacity: 0,
    delay: 1,
    duration: 1,
  });

  gsap.from(".free-btn", {
    opacity: 0,
    delay: 1.2,
    duration: 1,
  });

  gsap.from(".card-container", {
    y: 150,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".card-container", // Trigger animation when .box enters the viewport
      start: "top 80%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });

  gsap.from(".para2", {
    y: 150,
    delay: 0.1,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".para2", // Trigger animation when .box enters the viewport
      start: "top 90%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });
  
  gsap.from(".para3", {
    y: 150,
    delay: 0.1,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".para3", // Trigger animation when .box enters the viewport
      start: "top 90%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });

  gsap.from(".academy-heading", {
    y: 150,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".academy-heading", // Trigger animation when .box enters the viewport
      start: "top 90%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });

  gsap.from(".academy-para2", {
    y: 150,
    delay:0.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".academy-para2", // Trigger animation when .box enters the viewport
      start: "top 90%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });
  gsap.from(".academy-para", {
    y: 150,
    delay:0.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".academy-para", // Trigger animation when .box enters the viewport
      start: "top 90%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });

  gsap.from(".academy-image", {
    delay: 0.1,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".academy-image", // Trigger animation when .box enters the viewport
      start: "top 90%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });
  gsap.from(".academy-image2", {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".academy-image2", // Trigger animation when .box enters the viewport
      start: "top 90%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });

  gsap.from(".julie", {
    delay: 1,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".academy-image2", // Trigger animation when .box enters the viewport
      start: "top 90%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });
});
