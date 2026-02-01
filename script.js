const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsContainer = document.getElementById("hearts-container");
const music = document.getElementById("bgMusic");
const card = document.getElementById("card");
const countdown = document.getElementById("countdown");

// 🎯 SET YOUR SPECIAL DATE HERE
const specialDate = new Date("2026-02-14T00:00:00");

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 500);

// Countdown
function updateCountdown() {
  const now = new Date();
  const diff = specialDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "💖 Today is our special day!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdown.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes left`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// YES = Music + Love Letter
yesBtn.addEventListener("click", () => {
  music.muted = false;
  music.play().catch(() => {
    alert("Tap again to play the music 🎵");
  });

  card.innerHTML = `
    <h1 style="color:#ff4d6d;">My Love Letter to You, Lisha ❤️</h1>
    <p>
      On a rainy monsoon evening, the world faded away — and all I could see was you.  
      Our first kiss sealed a promise my heart already knew: that my forever would always begin and end with you.  
      <br><br>
      I promise to walk with you through every storm and every sunshine, laughing at our little jokes and building a lifetime of memories together.  
      <br><br>
      Happy Valentine’s Day, my love. You are my always. 💖
    </p>
    <h2>— Yours, Always, Arijeet Saha 😘</h2>
    <button onclick="document.getElementById('bgMusic').play()">
      ▶️ Play Our Song
    </button>
  `;
});

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
