function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  
  // Save user theme preference
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Animate and update all theme toggle buttons
  const buttons = document.querySelectorAll(".theme-toggle-btn");
  buttons.forEach((btn) => {
    btn.classList.add("spin");
    btn.textContent = isDark ? "☀️" : "🌙";
    
    setTimeout(() => {
      btn.classList.remove("spin");
    }, 500);
  });
}

// Load saved theme preference on page startup
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
      btn.textContent = "☀️";
    });
  }
});