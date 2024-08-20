document.addEventListener("DOMContentLoaded", () => {
    const iconButton = document.getElementById("icon-button");
    const clonedButton = document.getElementById("cloned-button");
    const scrollContainer = document.getElementById("scroll-container");
    const pageImageDiv = document.getElementById("page-image");
    const iconButtonContent = document.getElementById("icon-button-content");
    const clonedButtonContent = document.getElementById("cloned-button-content");

    const navigateToScrollPage = (content) => {
        // Hide the initial page content and buttons
        pageImageDiv.style.display = "none";
        iconButton.style.display = "none";
        clonedButton.style.display = "none";

        // Show the horizontal scroll container and the specific content section
        scrollContainer.style.display = "flex";
        content.style.display = "flex";
        scrollContainer.style.overflowX = "auto";
    };

    iconButton.addEventListener("click", () => {
        navigateToScrollPage(iconButtonContent);
    });

    clonedButton.addEventListener("click", () => {
        navigateToScrollPage(clonedButtonContent);
    });

    // Update positions on window resize
    window.addEventListener("resize", () => {
        iconButton.style.top = "60vh";
        clonedButton.style.top = "70vh";
    });
});
