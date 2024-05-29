const iconButton = document.getElementById("icon-button");
const clonedButton = document.getElementById("cloned-button");

const navigateToImagePage = () => {
  // Create a new image element to style it before displaying
  const image = document.createElement("img");
  image.src = "/images/Upload 1.jpg"; // Path to the image to display
  
  // Style the image as desired (adjust as needed)
  image.style.width = "100%";
  
  // Replace page content with the styled image
  const pageImageDiv = document.getElementById("page-image");
  pageImageDiv.innerHTML = ""; // Clear existing content
  pageImageDiv.appendChild(image); // Add the styled image
  
  // Hide the buttons
  iconButton.classList.add("hidden");
  clonedButton.classList.add("hidden");
};

iconButton.addEventListener("click", navigateToImagePage);
clonedButton.addEventListener("click", navigateToImagePage);

// Background image styling (moved to script.js for dynamic updates)
const body = document.body;
const imgPath = "/images/Upload 1.jpg"; // Replace with your actual image path

function setCenteredBackground() {
  body.style.backgroundImage = `url(${imgPath})`;
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
  body.style.backgroundRepeat = "no-repeat";
}

window.onload = setCenteredBackground;
window.addEventListener("resize", setCenteredBackground);
