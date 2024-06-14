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

    // Hide both content sections initially
    iconButtonContent.style.display = "none";
    clonedButtonContent.style.display = "none";

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

  const adjustButtonPositionsOnScroll = () => {
    const initialOffsetVertical = 63.5; // Adjust this value based on your button's top position in vh for vertical layout
    const additionalOffsetVertical = 75.3; // Adjusted position for cloned button for vertical layout

    if (scrollContainer.style.overflowX === "auto") {
      // Horizontal layout
      iconButton.style.top = `${initialOffsetVertical}vh`;
      clonedButton.style.top = `${initialOffsetVertical}vh`;
    } else {
      // Vertical layout
      iconButton.style.top = `${initialOffsetVertical}vh`;
      clonedButton.style.top = `${additionalOffsetVertical}vh`;
    }
  };

  // Set initial positions
  adjustButtonPositionsOnScroll();

  // Add event listener for scrolling
  window.addEventListener("scroll", adjustButtonPositionsOnScroll);
  // Add event listener for resize to handle any screen size changes
  window.addEventListener("resize", adjustButtonPositionsOnScroll);
});
