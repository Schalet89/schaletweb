function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(sec => sec.style.display = "none");

  const target = document.getElementById(id);
  if (target) target.style.display = "block";
}

// Form kontak
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesan terkirim!");
});

// Download media
function downloadMedia() {
  const url = document.getElementById("media-url").value.trim();
  const site = document.getElementById("target-site").value;
  if (!url) return alert("Masukkan URL dulu");
  const fullUrl = site + encodeURIComponent(url);
  window.open(fullUrl, "_blank");
}