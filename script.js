const iconButton = document.getElementById("icon-button");
const clonedButton = document.getElementById("cloned-button");
const scrollContainer = document.getElementById("scroll-container");
const pageImageDiv = document.getElementById("page-image");
const iconButtonContent = document.getElementById("icon-button-content");
const clonedButtonContent = document.getElementById("cloned-button-content");

// Debugging: Check if elements are correctly selected
console.log('iconButton:', iconButton);
console.log('clonedButton:', clonedButton);
console.log('scrollContainer:', scrollContainer);
console.log('pageImageDiv:', pageImageDiv);
console.log('iconButtonContent:', iconButtonContent);
console.log('clonedButtonContent:', clonedButtonContent);

const navigateToScrollPage = (content) => {
  // Debugging: Log the current display property
  console.log('Before hiding, pageImageDiv display:', pageImageDiv.style.display);

  // Hide the initial page content and buttons
  pageImageDiv.style.display = "none";
  iconButton.style.display = "none";
  clonedButton.style.display = "none";

  // Debugging: Log the display property after hiding
  console.log('After hiding, pageImageDiv display:', pageImageDiv.style.display);

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

function adjustButtonPositionsOnScroll() {
  const scrollTop = window.scrollY;
  const initialOffsetVertical = 73.5; // Adjust this value based on your button's top position in vh for vertical layout
  const additionalOffsetVertical = 88.5; // Adjusted position for cloned button for vertical layout

  if (scrollContainer.style.overflowX === "auto") {
    // Horizontal layout
    iconButton.style.top = `${initialOffsetVertical}vh`;
    clonedButton.style.top = `${initialOffsetVertical}vh`;
  } else {
    // Vertical layout
    iconButton.style.top = `${initialOffsetVertical}vh`;
    clonedButton.style.top = `${additionalOffsetVertical}vh`;
  }

  // Debugging: Log button positions
  console.log('iconButton top:', iconButton.style.top);
  console.log('clonedButton top:', clonedButton.style.top);
}

// Add event listener for scrolling
window.addEventListener("scroll", adjustButtonPositionsOnScroll);
