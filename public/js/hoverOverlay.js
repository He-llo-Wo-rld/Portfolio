// Add hover overlay for Finance Tracker and PropertyMarket
function addHoverOverlay() {
  const financeTrackerCard = document.querySelector(
    '[data-category="full-stack"]'
  );
  const propertyMarketCard = document.querySelector(
    '[data-category="data-visualization"]'
  );

  // Finance Tracker overlay
  if (
    financeTrackerCard &&
    !financeTrackerCard.querySelector(".project-overlay")
  ) {
    const overlay = document.createElement("div");
    overlay.className =
      "project-overlay absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center";

    overlay.innerHTML = `
      <div class="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h4 class="text-xl font-bold mb-3">Personal Finance Tracker</h4>
        <p class="text-sm mb-4 px-4">
          Full-stack application with Google OAuth, MongoDB, and real-time analytics
        </p>
        <div class="flex gap-3 justify-center">
          <button 
            onclick="toggleProjectDetails(); event.stopPropagation();"
            class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors transform hover:scale-105"
          >
            View Details
          </button>
          <a 
            href="https://finance-tracker-murex-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onclick="event.stopPropagation();"
            class="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    `;

    financeTrackerCard.appendChild(overlay);
  }

  // PropertyMarket overlay
  if (
    propertyMarketCard &&
    !propertyMarketCard.querySelector(".project-overlay")
  ) {
    const overlay = document.createElement("div");
    overlay.className =
      "project-overlay absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center";

    overlay.innerHTML = `
      <div class="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h4 class="text-xl font-bold mb-3">PropertyMarket - Educational Demo</h4>
        <p class="text-sm mb-4 px-4">
          Modern property market interface with intelligent search and regional data visualization
        </p>
        <div class="flex gap-3 justify-center">
          <button 
            onclick="togglePropertyMarketDetails(); event.stopPropagation();"
            class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors transform hover:scale-105"
          >
            View Details
          </button>
          <a 
            href="https://england-house-prices-tracker.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onclick="event.stopPropagation();"
            class="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    `;

    propertyMarketCard.appendChild(overlay);
  }
}

// Initialize hover overlay
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(addHoverOverlay, 100); // Small delay to ensure DOM is ready
});

window.addHoverOverlay = addHoverOverlay;
