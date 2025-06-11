function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => (section.style.display = "none"));

  const target = document.getElementById(id);
  if (target) target.style.display = "block";
}

let selectedSite = "https://yt1s.ltd/en42?q=";

function setSite(siteUrl) {
  selectedSite = siteUrl;
}

// Form kontak
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Pesan berhasil dikirim!");
      form.reset();
    });
  }
});

// Download media sosial
function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => (section.style.display = "none"));

  const target = document.getElementById(id);
  if (target) target.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Pesan berhasil dikirim!");
      form.reset();
    });
  }
});

function submitWelcome() {
  const name = document.getElementById("user-name").value;
  const email = document.getElementById("user-email").value;

  if (name.trim() === "" || email.trim() === "") {
    alert("Isi nama dan email dulu ya~");
    return;
  }

  localStorage.setItem("schaletUserName", name);
  localStorage.setItem("schaletUserEmail", email);

  document.getElementById("welcome-modal").style.display = "none";

  const profil = document.getElementById("profil");
  if (profil) {
    const greet = document.createElement("p");
    greet.textContent = 'Halo ${name}, selamat menjelajahi web ini 🌸';
    greet.style.fontStyle = "italic";
    greet.style.marginTop = "1rem";
    profil.appendChild(greet);
  }
}

const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("toggle-music");

let isPlaying = true;

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.textContent = "🔇";
  } else {
    music.play();
    toggleBtn.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});