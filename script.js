/**
 * Toggles the mobile menu on and off
 * @param {Event} event The event that triggered the function
 */
function toggleMenu() {
    // Get the menu and the hamburger icon
    const menu = document.querySelector(".menu_links");
    const icon = document.querySelector(".hamburger_icon");

    // Toggle the "open" class on both elements
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
