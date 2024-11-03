document.addEventListener("DOMContentLoaded", () => {
    const iconButton = document.getElementById("icon-button");
    const clonedButton = document.getElementById("cloned-button");
    const backButton = document.getElementById("back-button");
    const scrollContainer = document.getElementById("scroll-container");
    const iconButtonContent = document.getElementById("icon-button-content");
    const clonedButtonContent = document.getElementById("cloned-button-content");

    // Set initial button sizes and positions
    const setButtonSizesAndPositions = () => {
        iconButton.style.width = "6.8vw";
        iconButton.style.height = "6.8vw";
        clonedButton.style.width = "6.8vw";
        clonedButton.style.height = "6.8vw";
        backButton.style.width = "6.8vw";
        backButton.style.height = "6.8vw";
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
        document.getElementById("page-image").style.display = "none";
        iconButton.style.display = "none";
        clonedButton.style.display = "none";
        backButton.style.display = "block";
        scrollContainer.style.display = "flex";
        content.style.display = "flex";

        // Push state to enable Android back button functionality
        history.pushState({ page: "content" }, "", "#content");
    };

    const goBackToHomePage = () => {
        scrollContainer.style.display = "none";
        iconButtonContent.style.display = "none";
        clonedButtonContent.style.display = "none";
        document.getElementById("page-image").style.display = "block";
        iconButton.style.display = "block";
        clonedButton.style.display = "block";
        backButton.style.display = "none";

        history.pushState({ page: "home" }, "", "#home");
    };

    // Back button functionality for scroll navigation
    const handleBackButtonInScroll = () => {
        if (scrollContainer.scrollLeft > 0) {
            // Scroll back one full page width
            scrollContainer.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        } else {
            // If at the first page, go back to the main page
            goBackToHomePage();
        }
    };

    // Attach event listeners
    iconButton.addEventListener("click", () => navigateToScrollPage(iconButtonContent));
    clonedButton.addEventListener("click", () => navigateToScrollPage(clonedButtonContent));
    backButton.addEventListener("click", handleBackButtonInScroll);

    // Android back button functionality
    window.addEventListener("popstate", (event) => {
        if (event.state && event.state.page === "home") {
            goBackToHomePage();
        } else {
            handleBackButtonInScroll();
        }
    });

    // Set the initial state in history
    history.replaceState({ page: "home" }, "", "#home");
}); 
