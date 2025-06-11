document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesan telah dikirim!");
});

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