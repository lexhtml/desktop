const shortcuts = document.querySelectorAll('.shortcut');

shortcuts.forEach(shortcut => {
    const icon = shortcut.querySelector('img');

    shortcut.addEventListener('mouseover', () => icon.style.backgroundColor = "rgba(255, 255, 255, 0.137)");
    shortcut.addEventListener('mouseout', () => icon.style.backgroundColor = "");
});