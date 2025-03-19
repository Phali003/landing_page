const textToAnimate =
  "Your one-stop shop for incredible deals across all categories. Unwrap exclusive discounts this season and find everything you’ve been dreaming of—all in one place!";
const animatedTextElement = document.getElementById("animated-text");

let index = 0;

function animateText() {
  animatedTextElement.textContent = textToAnimate.slice(0, index);
  index++;
  if (index > textToAnimate.length) {
    index = 0; // Reset to make it loop infinitely
  }
  setTimeout(animateText, 120);
}

// Start the animation
animateText();
