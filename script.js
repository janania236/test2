function show(page) {
  document.querySelectorAll("div").forEach(d => d.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");
}

function startParty() {
  show("page2");
  confetti({ particleCount: 300, spread: 180 });

  setTimeout(() => show("page3"), 3000);
  setTimeout(() => show("page4"), 6000);
  setTimeout(() => show("page5"), 9000);
}

function blowCandles() {
  document.getElementById("candles").innerText = "💨💨💨";
  confetti({ particleCount: 200, spread: 160 });

  setTimeout(() => show("page6"), 2000);
}

function cutCake() {
  confetti({ particleCount: 400, spread: 200 });
  show("page7");
}
