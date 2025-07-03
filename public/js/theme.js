// Theme management functionality
(function () {
  // Get theme from localStorage or default to 'light'
  function getTheme() {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  }

  // Set theme and update localStorage
  function setTheme(theme) {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", theme);
    }

    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }

  // Toggle between light and dark themes
  function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  // Initialize theme on page load
  function initTheme() {
    const theme = getTheme();
    setTheme(theme);
  }

  // Apply theme immediately to prevent flash
  initTheme();

  // Make functions available globally
  window.toggleTheme = toggleTheme;
  window.setTheme = setTheme;
  window.getTheme = getTheme;

  // Re-initialize theme when DOM is loaded (backup)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme);
  }
})();
