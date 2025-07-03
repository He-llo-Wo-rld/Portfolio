// Project Details Modal
function createProjectDetailsModal() {
  const modalHTML = `
    <div id="project-details-modal" class="fixed inset-0 z-50 hidden bg-black bg-opacity-50 backdrop-blur-sm">
      <div class="flex items-center justify-center min-h-screen p-4">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold">Personal Finance Tracker - Project Details</h2>
              <button onclick="closeProjectDetails()" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-semibold mb-4">Key Features:</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Dual authentication: Google OAuth & email/password login
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Real-time transaction tracking and categorization
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Interactive charts and financial analytics
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Session-based authentication with secure cookies
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    MongoDB integration with Mongoose ODM
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold mb-4">Technical Implementation:</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    Next.js 14 with TypeScript for type-safe development
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    MongoDB database with optimized queries and indexing
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    NextAuth.js with Google OAuth & credential providers
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    bcryptjs for secure password hashing
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    Recharts for interactive data visualizations
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div class="grid md:grid-cols-4 gap-4">
                <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">🔐</div>
                  <div class="text-sm font-medium">OAuth & Auth</div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">Google + JWT</div>
                </div>
                <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">🚀</div>
                  <div class="text-sm font-medium">Fast Performance</div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">SSR & Optimization</div>
                </div>
                <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">📱</div>
                  <div class="text-sm font-medium">Responsive</div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">Mobile-First</div>
                </div>
                <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">🔒</div>
                  <div class="text-sm font-medium">Data Security</div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">Encrypted & Validated</div>
                </div>
              </div>
            </div>
            
            <div class="mt-6 text-center">
              <a 
                href="https://finance-tracker-murex-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Try Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

function toggleProjectDetails() {
  const modal = document.getElementById("project-details-modal");
  if (!modal) {
    createProjectDetailsModal();
  }

  const modalElement = document.getElementById("project-details-modal");
  modalElement.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeProjectDetails() {
  const modal = document.getElementById("project-details-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// PropertyMarket Details Modal
function createPropertyMarketDetailsModal() {
  const modalHTML = `
    <div id="property-market-details-modal" class="fixed inset-0 z-50 hidden bg-black bg-opacity-50 backdrop-blur-sm">
      <div class="flex items-center justify-center min-h-screen p-4">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold">PropertyMarket - Educational Demo - Project Details</h2>
              <button onclick="closePropertyMarketDetails()" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-semibold mb-4">Key Features:</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Intelligent search by postcode or region
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Real-time search suggestions with keyboard navigation
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    National property statistics dashboard
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Regional price comparisons across England's 9 regions
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Interactive data visualization with market trends
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold mb-4">Technical Implementation:</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    Next.js 14 with App Router for modern web architecture
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    TypeScript for enhanced type safety and development experience
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    shadcn/ui for consistent and accessible component library
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    Educational mock data with realistic patterns
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    WCAG compliance for accessibility
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div class="grid md:grid-cols-4 gap-4">
                <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">🔍</div>
                  <div class="text-sm font-medium">Smart Search</div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">Postcode & Region</div>
                </div>
                <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">📊</div>
                  <div class="text-sm font-medium">Data Visualization</div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">Interactive Charts</div>
                </div>
                <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">🗺️</div>
                  <div class="text-sm font-medium">Regional Analysis</div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">9 England Regions</div>
                </div>
                <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">♿</div>
                  <div class="text-sm font-medium">Accessible Design</div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">WCAG Compliant</div>
                </div>
              </div>
            </div>
            
            <div class="mt-6 text-center">
              <a 
                href="https://england-house-prices-tracker.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Try Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

function togglePropertyMarketDetails() {
  const modal = document.getElementById("property-market-details-modal");
  if (!modal) {
    createPropertyMarketDetailsModal();
  }

  const modalElement = document.getElementById("property-market-details-modal");
  modalElement.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closePropertyMarketDetails() {
  const modal = document.getElementById("property-market-details-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// Close modal when clicking outside - update to handle both modals
document.addEventListener("click", function (e) {
  const financeModal = document.getElementById("project-details-modal");
  const propertyModal = document.getElementById(
    "property-market-details-modal"
  );

  if (financeModal && e.target === financeModal) {
    closeProjectDetails();
  }

  if (propertyModal && e.target === propertyModal) {
    closePropertyMarketDetails();
  }
});

// Close modal with Escape key - update to handle both modals
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeProjectDetails();
    closePropertyMarketDetails();
  }
});

// Make functions globally available
window.toggleProjectDetails = toggleProjectDetails;
window.closeProjectDetails = closeProjectDetails;
window.togglePropertyMarketDetails = togglePropertyMarketDetails;
window.closePropertyMarketDetails = closePropertyMarketDetails;
