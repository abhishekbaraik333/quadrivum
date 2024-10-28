document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");
  const firstFaqItem = faqItems[0]; // Select the first FAQ item

  // Function to handle FAQ toggle
  const toggleFaqItem = (item) => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active"); // Close other FAQ items
      }
    });
    item.classList.add("active"); // Open the specific FAQ item
  };

  // Intersection Observer to observe when the first FAQ comes into the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          toggleFaqItem(firstFaqItem); // Open the first FAQ when it comes into view
          observer.unobserve(entry.target); // Stop observing once opened
        }
      });
    },
    { threshold: 0.5 } // Adjust visibility threshold as needed
  );

  // Observe the first FAQ item
  observer.observe(firstFaqItem);

  // Add click event listener to all FAQ items
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active"); // Close the item if it's open
      } else {
        toggleFaqItem(item); // Open the clicked item
      }
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

  gsap.from(".why-join", {
    x: -120,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".why-join", // Trigger animation when .box enters the viewport
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

  gsap.from(".ti-1", {
    x: -150,
    delay:0.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".ti-1", // Trigger animation when .box enters the viewport
      start: "top 90%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });

  gsap.from(".ti-2", {
    x: 150,
    delay:0.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".ti-2", // Trigger animation when .box enters the viewport
      start: "top 90%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });
  gsap.from(".ti-3", {
    x: -150,
    delay:0.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".ti-3", // Trigger animation when .box enters the viewport
      start: "top 90%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });

  gsap.from(".ti-4", {
    x: 150,
    delay:0.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".ti-4", // Trigger animation when .box enters the viewport
      start: "top 90%", // Start the animation when the .box is 80% from the top of the viewport
    },
  });
});


const cardControllers = document.querySelectorAll("[data-card-controller]");

cardControllers.forEach(controller => {
  controller.addEventListener("click", (e) => {
    const card = e.currentTarget.parentElement.parentElement;
    const isVisible = card.dataset.visible;

    if (isVisible === "false") {
      card.setAttribute("data-visible", true);
    } else {
      card.setAttribute("data-visible", false);
    }
  })
})

document.querySelector('.select-selected').addEventListener('click', function() {
  document.querySelector('.select-options').classList.toggle('show');
});

window.addEventListener('click', function(e) {
  if (!e.target.matches('.select-selected')) {
    document.querySelector('.select-options').classList.remove('show');
  }
});


// Wait until the document is ready
document.addEventListener('DOMContentLoaded', function() {
  // Get all anchor tags inside .select-options
  const links = document.querySelectorAll('.select-options a');

  // Loop through each link and attach a click event listener
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor click behavior

      // Get the target element's ID from the href attribute (e.g., #member1)
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Calculate the center position of the target element
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);

        // Smoothly scroll to the center position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
