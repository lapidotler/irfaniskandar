// Function to open the lightbox
function openLightbox(category, workNumber) {
    var lightbox = document.getElementById(category + "-" + workNumber + "-lightbox");
    lightbox.style.display = "block";
}

// Function to close the lightbox
function closeLightbox(category, workNumber) {
    var lightbox = document.getElementById(category + "-" + workNumber + "-lightbox");
    lightbox.style.display = "none";
}