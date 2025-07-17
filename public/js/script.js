// Sidebar open/close logic
const openSidebarBtn = document.getElementById("openSidebarBtn");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const mobileSidebar = document.getElementById("mobileSidebar");
const sidebarPanel = document.getElementById("sidebarPanel");

openSidebarBtn.addEventListener("click", () => {
  mobileSidebar.classList.remove("hidden");
  setTimeout(() => {
    sidebarPanel.classList.remove("translate-x-full");
  }, 10);
});

closeSidebarBtn.addEventListener("click", () => {
  sidebarPanel.classList.add("translate-x-full");
  setTimeout(() => {
    mobileSidebar.classList.add("hidden");
  }, 300);
});

// Close sidebar when clicking outside the panel
mobileSidebar.addEventListener("click", (e) => {
  if (e.target === mobileSidebar) {
    sidebarPanel.classList.add("translate-x-full");
    setTimeout(() => {
      mobileSidebar.classList.add("hidden");
    }, 300);
  }
});

// Submenu logic

function openSubmenu(id) {
  document.getElementById(id).classList.remove('hidden');
}
function closeSubmenu(id) {
  document.getElementById(id).classList.add('hidden');
}
