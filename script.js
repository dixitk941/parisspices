// Function to handle toggling of mobile navigation
function toggleMobileNav() {
    const hamburger = document.getElementById('hamburger-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
  
    // Check if hamburger is checked
    if (hamburger.checked) {
      mobileNav.style.display = 'block'; // Show mobile navigation
    } else {
      mobileNav.style.display = 'none'; // Hide mobile navigation
    }
  }
  
  // Event listener for hamburger icon click
  document.getElementById('hamburger-toggle').addEventListener('click', toggleMobileNav);
  