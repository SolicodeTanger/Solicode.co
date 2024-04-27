var themeToggleDarkIcon = document.getElementById('sun');
var themeToggleLightIcon = document.getElementById('moon');

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // Toggle body class
    document.body.classList.toggle('dark');

    // Set local storage value
    localStorage.setItem('color-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.add('hidden'); // Hide the light icon initially
    document.body.classList.add('dark'); // Set body class based on local storage
} else {
    themeToggleDarkIcon.classList.add('hidden'); // Hide the dark icon initially
    document.body.classList.remove('dark'); // Set body class based on local storage
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {
    toggleDarkMode();
});
