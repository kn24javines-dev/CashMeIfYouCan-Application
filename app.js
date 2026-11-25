// switches between Home, Database, and About pages
const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.page;

    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    pages.forEach((page) => {
      page.classList.toggle("active", page.id === targetId);
    });
  });
});

// toggles the state diagram space on or off
const toggleBtn = document.getElementById("toggle-diagram-btn");
const diagramSpace = document.getElementById("diagram-space");
let isDiagramVisible = true;

toggleBtn.addEventListener("click", () => {
  isDiagramVisible = !isDiagramVisible;
  diagramSpace.classList.toggle("hidden", !isDiagramVisible);
  toggleBtn.textContent = isDiagramVisible ? "Toggle Visual: ON" : "Toggle Visual: OFF";
});