// ===============================
// Typing Animation
// ===============================

const words = [
  "UI/UX Designer",
  "Flutter Developer",
  "Frontend Developer",
  "React Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing");

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!isDeleting) {

    typingText.textContent =
      currentWord.substring(0, charIndex);

    charIndex++;

    if (charIndex > currentWord.length) {

      isDeleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }

  } else {

    typingText.textContent =
      currentWord.substring(0, charIndex);

    charIndex--;

    if (charIndex === 0) {

      isDeleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ===============================
// Cursor Glow Effect
// ===============================

const cursorGlow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  cursorGlow.style.left =
    e.clientX + "px";

  cursorGlow.style.top =
    e.clientY + "px";

});


// ===============================
// Navbar Background On Scroll
// ===============================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.background =
      "rgba(10,10,20,0.75)";

    navbar.style.backdropFilter =
      "blur(20px)";

  } else {

    navbar.style.background =
      "transparent";
  }

});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements =
document.querySelectorAll(
  ".about-card, .skill-card, .project-card, .contact-card"
);

const revealObserver =
new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{
threshold: 0.15
}

);

revealElements.forEach((element) => {

element.classList.add("hidden");

revealObserver.observe(element);

});


// ===============================
// Active Navigation Link
// ===============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let currentSection = "";

sections.forEach((section) => {

const sectionTop =
section.offsetTop - 150;

if (window.scrollY >= sectionTop) {

currentSection =
section.getAttribute("id");

}

});

navLinks.forEach((link) => {

link.classList.remove("active");

if (
link.getAttribute("href") ===
`#${currentSection}`
) {

link.classList.add("active");

}

});

});


// ===============================
// Project Card Tilt Effect
// ===============================

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

card.addEventListener("mousemove", (e) => {

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width) - 0.5) * 15;

const rotateX =
((y / rect.height) - 0.5) * -15;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.04)
`;

});

card.addEventListener("mouseleave", () => {

card.style.transform =
`
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
scale(1)
`;

});

});


// ===============================
// Floating Tech Icons Animation
// ===============================

const floatingIcons =
document.querySelectorAll(".floating");

floatingIcons.forEach((icon, index) => {

icon.style.animation =
`float ${4 + index}s ease-in-out infinite`;

});


// ===============================
// Smooth Scroll
// ===============================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

document
.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior: "smooth"

});

});

});


// ===============================
// Hero Fade-In Animation
// ===============================

window.addEventListener("load", () => {

const heroContent =
document.querySelector(".hero-content");

const heroImage =
document.querySelector(".hero-image");

heroContent.style.opacity = "0";
heroImage.style.opacity = "0";

heroContent.style.transform =
"translateY(40px)";

heroImage.style.transform =
"translateY(40px)";

setTimeout(() => {

heroContent.style.transition =
"1s ease";

heroImage.style.transition =
"1s ease";

heroContent.style.opacity = "1";
heroImage.style.opacity = "1";

heroContent.style.transform =
"translateY(0)";

heroImage.style.transform =
"translateY(0)";

}, 300);

});


// ===============================
// Animated Counter (Optional)
// ===============================

function animateCounter(
element,
target
) {

let count = 0;

const speed = target / 100;

const update = () => {

count += speed;

if (count < target) {

element.textContent =
Math.floor(count);

requestAnimationFrame(update);

} else {

element.textContent =
target;
}

};

update();
}

// Example:
// animateCounter(
// document.getElementById("projectsCount"),
// 15
// );


// ===============================
// Console Signature
// ===============================

console.log(
"%cPortfolio By Sachin Kumar 🚀",
"color:#c084fc;font-size:18px;font-weight:bold;"
);