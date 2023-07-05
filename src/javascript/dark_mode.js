  // Get the SVG elements
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');

// Add event listeners to the SVG elements
moon.addEventListener('click', () => {
    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light'
    updateMode();
});
  
sun.addEventListener('click', () => {
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark'
    updateMode();
});

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// Function to update the mode based on localStorage value
function updateMode() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

// On page load, update the mode
updateMode();