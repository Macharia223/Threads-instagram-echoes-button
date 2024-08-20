document.addEventListener("DOMContentLoaded", () => {
    const iconButton = document.getElementById("icon-button");
    const clonedButton = document.getElementById("cloned-button");
    const scrollContainer = document.getElementById("scroll-container");

    const setInitialButtonPositions = () => {
        iconButton.style.top = '60.5vh';
        iconButton.style.left = '80%';
        clonedButton.style.top = '69.vh';
        clonedButton.style.left = '80%';
    };

    // Set positions initially
    setInitialButtonPositions();

    // Add event listener for resize to re-adjust button positions
    window.addEventListener("resize", setInitialButtonPositions);

    // Navigation function remains the same
    const navigateToScrollPage = (content) => {
        // Hide the initial page content and buttons
        document.getElementById("page-image").style.display = "none";
        iconButton.style.display = "none";
        clonedButton.style.display = "none";

        // Hide both content sections initially
        document.getElementById("icon-button-content").style.display = "none";
        document.getElementById("cloned-button-content").style.display = "none";

        // Show the horizontal scroll container and the specific content section
        scrollContainer.style.display = "flex";
        content.style.display = "flex";
    };

    // Attach click event listeners to the buttons
    iconButton.addEventListener("click", () => navigateToScrollPage(document.getElementById("icon-button-content")));
    clonedButton.addEventListener("click", () => navigateToScrollPage(document.getElementById("cloned-button-content")));
});
