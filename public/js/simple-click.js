// Simple click handler for Finance Tracker
document.addEventListener("DOMContentLoaded", function () {
  // Wait a bit for other scripts to load
  setTimeout(function () {
    // Find Finance Tracker card by title
    const cards = document.querySelectorAll(".group.relative.bg-white");

    cards.forEach((card) => {
      const title = card.querySelector("h3");
      if (title && title.textContent.includes("Personal Finance Tracker")) {
        // Add click handler to the card
        card.addEventListener("click", function (e) {
          // Don't trigger if clicking on buttons or links
          if (e.target.closest("a") || e.target.closest("button")) {
            return;
          }

          // Check if modal functions exist
          if (typeof window.toggleProjectDetails === "function") {
            window.toggleProjectDetails();
          } else {
            // Fallback: create simple alert
            alert(
              "Finance Tracker Details:\n\n" +
                "• Full-stack Next.js 14 application\n" +
                "• Google OAuth + email authentication\n" +
                "• MongoDB database with Mongoose\n" +
                "• Real-time charts with Recharts\n" +
                "• TypeScript for type safety\n" +
                "• Deployed on Vercel\n\n" +
                'Click "Live Demo" to try it!'
            );
          }
        });

        // Add visual indicator
        card.style.cursor = "pointer";
        card.title = "Click to view project details";

        console.log("Finance Tracker card enhanced with click handler");
      }
    });
  }, 500);
});
