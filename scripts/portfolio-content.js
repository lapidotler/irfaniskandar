// Function to handle responsive order of elements
function handleResponsiveOrder() {
    var introContent = document.querySelector('.intro-content');
    var iconContent = document.querySelector('.icon-content');

    // Set default order values
    introContent.style.order = 1;
    iconContent.style.order = 2;

    // Check if the window width is 980px or lower
    if (window.innerWidth <= 980) {
        // Change the order for smaller screens
        introContent.style.order = 2;
        iconContent.style.order = 1;
    }
}

// Initial call to set order on page load
handleResponsiveOrder();

// Attach the function to the window resize event
window.addEventListener('resize', handleResponsiveOrder);