// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Toggle Dark Mode';
    darkModeButton.classList.add('dark-mode-btn');
    darkModeButton.onclick = toggleDarkMode;
    document.body.appendChild(darkModeButton);
});
