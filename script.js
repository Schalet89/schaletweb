function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

function showSection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  toggleSidebar();
}

function showJapaneseContent() {
  const content = document.getElementById("japanese-content");
  content.classList.toggle("hidden");
}