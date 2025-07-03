// Enhanced project card interactions
function initProjectCards() {
  // Add click handlers to Finance Tracker card
  const financeTrackerCard = document.querySelector(
    '[data-category="full-stack"]'
  );

  if (financeTrackerCard) {
    // Add cursor pointer style
    financeTrackerCard.style.cursor = "pointer";

    // Add click indicator
    const indicator = document.createElement("div");
    indicator.className =
      "absolute top-4 left-4 z-10 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity";
    indicator.textContent = "Click for details";
    financeTrackerCard.appendChild(indicator);

    // Add click handler
    financeTrackerCard.addEventListener("click", function (e) {
      // Prevent if clicking on buttons
      if (e.target.closest("a") || e.target.closest("button")) return;
      toggleProjectDetails();
    });
  }
}

// Badge hover tooltips
function addProjectBadges() {
  const financeTrackerCard = document.querySelector(
    '[data-category="full-stack"]'
  );

  if (financeTrackerCard) {
    const badgeContainer = financeTrackerCard.querySelector(
      ".absolute.top-4.right-4"
    );

    if (badgeContainer) {
      // Add details badge
      const detailsBadge = document.createElement("span");
      detailsBadge.className =
        "px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors";
      detailsBadge.textContent = "DETAILS";
      detailsBadge.onclick = toggleProjectDetails;

      badgeContainer.appendChild(detailsBadge);
    }
  }
}

// Initialize when DOM loads
document.addEventListener("DOMContentLoaded", function () {
  initProjectCards();
  addProjectBadges();
});

// Add to existing functions
window.initProjectCards = initProjectCards;
window.addProjectBadges = addProjectBadges;
