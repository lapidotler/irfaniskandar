function validateForm() {
    // Your form validation logic here
    // Return true if the form is valid, false otherwise

    // For now, let's assume the form is always valid
    showThankYouMessage();

    // Prevent the form from submitting (if needed)
    return false;
}

function showThankYouMessage() {
    // Hide the form
    document.getElementById('contactForm').style.display = 'none';

    // Show the Thank You message
    document.getElementById('thankYouMessage').style.display = 'block';

    // Hide the email link (optional)
    const emailLink = document.getElementById('emailLink');
    if (emailLink) {
        emailLink.style.display = 'none';
    }

    // Change the CSS padding of #contact-form
    document.getElementById('contact-form').style.padding = '25px';

    // Check if the email link button is already added
    const emailLinkButton = document.getElementById('emailLinkButton');

    if (!emailLinkButton) {
        // If not, create the button and append it to the contact container
        const button = document.createElement('button');
        button.id = 'emailLinkButton';
        button.className = 'contact-form-button';
        button.innerText = 'Send Email';
        button.onclick = function() {
            window.location.href = 'mailto:southsoide1@gmail.com';
        };

        const contactContainer = document.querySelector('.contact-container');
        contactContainer.appendChild(button);
    }
}