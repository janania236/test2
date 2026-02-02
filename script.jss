// When YES is clicked
function startParty() {
  // Hide start page
  document.getElementById("start").classList.add("hidden");

  // Show party section
  const partyDiv = document.getElementById("party");
  partyDiv.classList.remove("hidden");

  // Start fireworks/confetti
  startFireworks();

  // Animate text
  const h1 = partyDiv.querySelector("h1");
  setTimeout(() => {
    h1.classList.add("show-text");
  }, 500);

  // Animate photo
  const img = partyDiv.querySelector("img");
  setTimeout(() => {
    img.classList.add("show-photo");
  }, 1000);
}

// When NO is clicked
function notYou() {
  alert("😂 Haha nice try! If you are NOT the birthday boy, this place is not for you 😏");
}

// Fireworks/confetti
function startFireworks() {
  const duration = 5 * 1000; // 5 seconds
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10 };

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: Math.random(), y: Math.random() * 0.6 }
    }));
  }, 250);
}

