// JavaScript to handle the "Yes" button click
const yesButton = document.querySelector('.yes-button');
const container = document.querySelector('.container');
const yesAnimation = document.querySelector('.yes-animation');

yesButton.addEventListener('click', () => {
  // Hide the proposal container
  container.style.display = 'none';

  // Show the "Yes" animation
  yesAnimation.classList.remove('hidden');

  // Add a confetti effect (optional)
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});

// Confetti JS (optional)
const confetti = () => {
  const confettiSettings = { particleCount: 100, spread: 70, origin: { y: 0.6 } };
  if (window.confetti) {
    window.confetti(confettiSettings);
  }
};