document.addEventListener("DOMContentLoaded", () => {
    const iconButton = document.getElementById("icon-button");
    const clonedButton = document.getElementById("cloned-button");
    const backButton = document.getElementById("back-button");
    const scrollContainer = document.getElementById("scroll-container");
    const pageImage = document.getElementById("page-image");

    const setInitialButtonPositions = () => {
        const buttonSize = Math.min(window.innerWidth * 0.12, 60);  // Limits to a max of 60px

        // Set button dimensions
        iconButton.style.width = `${buttonSize}px`;
        iconButton.style.height = `${buttonSize}px`;
        clonedButton.style.width = `${buttonSize}px`;
        clonedButton.style.height = `${buttonSize}px`;
        backButton.style.width = `${buttonSize}px`;
        backButton.style.height = `${buttonSize}px`;
    };

    const navigateToScrollPage = (content) => {
        pageImage.style.display = "none";
        iconButton.style.display = "none";
        clonedButton.style.display = "none";
        backButton.classList.remove("hidden");

        document.getElementById("icon-button-content").style.display = "none";
        document.getElementById("cloned-button-content").style.display = "none";

        scrollContainer.style.display = "flex";
        content.style.display = "flex";
    };

    const backToMainPage = () => {
        pageImage.style.display = "block";
        iconButton.style.display = "block";
        clonedButton.style.display = "block";
        backButton.classList.add("hidden");

        scrollContainer.style.display = "none";
        document.getElementById("icon-button-content").style.display = "none";
        document.getElementById("cloned-button-content").style.display = "none";
    };

    // Set positions initially
    setInitialButtonPositions();

    // Add event listener for resize to re-adjust button positions
    window.addEventListener("resize", setInitialButtonPositions);

    // Attach click event listeners to the buttons
    iconButton.addEventListener("click", () => navigateToScrollPage(document.getElementById("icon-button-content")));
    clonedButton.addEventListener("click", () => navigateToScrollPage(document.getElementById("cloned-button-content")));
    backButton.addEventListener("click", backToMainPage);

    // Listen for Android back button if applicable
    window.addEventListener("popstate", backToMainPage);
});
