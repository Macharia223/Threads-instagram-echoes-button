document.addEventListener("DOMContentLoaded", () => {
    const iconButton = document.getElementById("icon-button");
    const clonedButton = document.getElementById("cloned-button");
    const backButton = document.getElementById("back-button");
    const scrollContainer = document.getElementById("scroll-container");
    const iconButtonContent = document.getElementById("icon-button-content");
    const clonedButtonContent = document.getElementById("cloned-button-content");

    // Set initial button sizes and positions
    const setButtonSizesAndPositions = () => {
        iconButton.style.width = "12vw";
        iconButton.style.height = "12vw";
        clonedButton.style.width = "12vw";
        clonedButton.style.height = "12vw";
        backButton.style.width = "12vw";
        backButton.style.height = "12vw";
    };

    const setInitialButtonPositions = () => {
        setButtonSizesAndPositions();
        iconButton.style.top = '32.2vh';
        iconButton.style.left = '57.5vw';
        clonedButton.style.top = '90.1vh';
        clonedButton.style.left = '56vw';
        backButton.style.top = '10vh';
        backButton.style.left = '10vw';
    };

    setInitialButtonPositions();

    // Resize event to adjust button sizes and positions
    window.addEventListener("resize", setButtonSizesAndPositions);

    // Navigation functions
    const navigateToScrollPage = (content) => {
        // Hide the main page and buttons, show scroll content and back button
        document.getElementById("page-image").style.display = "none";
        iconButton.style.display = "none";
        clonedButton.style.display = "none";
        backButton.style.display = "block";
        scrollContainer.style.display = "flex";
        content.style.display = "flex";

        // Push state to enable the Android back button functionality
        history.pushState({ page: "content" }, "", "#content");
    };

    const goBackToHomePage = () => {
        // Hide scroll content and back button, show main page and buttons
        scrollContainer.style.display = "none";
        iconButtonContent.style.display = "none";
        clonedButtonContent.style.display = "none";
        document.getElementById("page-image").style.display = "block";
        iconButton.style.display = "block";
        clonedButton.style.display = "block";
        backButton.style.display = "none";

        // Return to the main state in the browser history
        history.pushState({ page: "home" }, "", "#home");
    };

    // Attach event listeners
    iconButton.addEventListener("click", () => navigateToScrollPage(iconButtonContent));
    clonedButton.addEventListener("click", () => navigateToScrollPage(clonedButtonContent));
    backButton.addEventListener("click", goBackToHomePage);

    // Handle the Android back button functionality
    window.addEventListener("popstate", (event) => {
        if (event.state && event.state.page === "home") {
            goBackToHomePage();
        }
    });

    // Set the initial state in history to enable back navigation
    history.replaceState({ page: "home" }, "", "#home");
});
