document.addEventListener("DOMContentLoaded", () => {
    const iconButton = document.getElementById("icon-button");
    const clonedButton = document.getElementById("cloned-button");
    const backButton = document.getElementById("back-button");
    const scrollContainer = document.getElementById("scroll-container");

    // Function to dynamically set button sizes relative to viewport
    const setButtonSizes = () => {
        const buttonSizeVW = 12; // 12vw for width
        const buttonSizeVH = 15; // 15vh for height

        // Use vw and vh without px for a fully relative approach
        iconButton.style.width = `${buttonSizeVW}vw`;
        iconButton.style.height = `${buttonSizeVH}vh`;
        clonedButton.style.width = `${buttonSizeVW}vw`;
        clonedButton.style.height = `${buttonSizeVH}vh`;
        backButton.style.width = `${buttonSizeVW}vw`;
        backButton.style.height = `${buttonSizeVH}vh`;
    };

    // Set initial button sizes and positions
    const setInitialButtonPositions = () => {
        setButtonSizes();
        iconButton.style.top = '32.2vh';
        iconButton.style.left = '57.5vw';
        clonedButton.style.top = '90.1vh';
        clonedButton.style.left = '56vw';
        backButton.style.top = '10vh';
        backButton.style.left = '10vw';
    };

    // Call functions on load and resize
    setInitialButtonPositions();
    window.addEventListener("resize", () => {
        setButtonSizes();
    });

    // Navigation functions
    const navigateToScrollPage = (content) => {
        document.getElementById("page-image").style.display = "none";
        iconButton.style.display = "none";
        clonedButton.style.display = "none";
        backButton.style.display = "block"; // Show the back button
        scrollContainer.style.display = "flex";
        content.style.display = "flex";
    };

    const goBackToHomePage = () => {
        scrollContainer.style.display = "none";
        document.getElementById("page-image").style.display = "block";
        iconButton.style.display = "block";
        clonedButton.style.display = "block";
        backButton.style.display = "none"; // Hide the back button
    };

    // Attach event listeners
    iconButton.addEventListener("click", () => navigateToScrollPage(document.getElementById("icon-button-content")));
    clonedButton.addEventListener("click", () => navigateToScrollPage(document.getElementById("cloned-button-content")));
    backButton.addEventListener("click", goBackToHomePage);
});
    // Listen for Android back button if applicable
    window.addEventListener("popstate", backToMainPage);
});
