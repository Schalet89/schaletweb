function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => (section.style.display = "none"));

  const target = document.getElementById(id);
  if (target) target.style.display = "block";
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
function downloadMedia() {
  const url = document.getElementById("media-url").value.trim();
  const site = document.getElementById("target-site").value;
  if (!url) {
    alert("Masukkan URL terlebih dahulu.");
    return;
  }
  const fullUrl = site + encodeURIComponent(url);
  window.open(fullUrl, "_blank");
}