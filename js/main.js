const dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
  // Random initial position
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  dot.style.left = x + "px";
  dot.style.top = y + "px";

  // Random movement direction
  const dx = (Math.random() - 0.5) * 0.8;
  const dy = (Math.random() - 0.5) * 0.8;

  function moveDot() {
    x += dx;
    y += dy;

    // Wrap around screen edges
    if (x > window.innerWidth) x = 0;
    if (x < 0) x = window.innerWidth;
    if (y > window.innerHeight) y = 0;
    if (y < 0) y = window.innerHeight;

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    requestAnimationFrame(moveDot);
  }

  moveDot();
});

const words = ["Computer Science", "Fullstack Developer"];
const label = document.getElementById("myCourse");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);

  label.textContent = currentText;

  if (!isDeleting) {
    if (charIndex < currentWord.length) {
      charIndex++;
    } else {
      isDeleting = true;
      setTimeout(typeEffect, 2500);
      return;
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 35 : 50);
}

typeEffect();
