//   js code to toggle sidebar
// Get the necessary elements
const sidebarOpen = document.querySelector('.sidebarOpen');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

// Add click event listener to the toggle button
sidebarOpen.addEventListener('click', () => {
  nav.classList.add('active');
});

// Add click event listener to the body
body.addEventListener('click', (e) => {
  // Check if the clicked element is not the sidebar or the toggle button
  if (!e.target.matches('.sidebarOpen, .menu')) {
    nav.classList.remove('active');
  }
});

