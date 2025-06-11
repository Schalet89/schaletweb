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