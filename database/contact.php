<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Replace with your email address
    $to = "your-email@example.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\n";

    // Send email
    mail($to, $subject, $message, $headers);

    // Display a thank you message
    $thankYouMessage = "<p>Thank you, $name! Your message has been sent successfully.</p>";
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
    </head>
    <body>
        <div style="text-align: center; padding: 50px;">
            <?php echo isset($thankYouMessage) ? $thankYouMessage : ''; ?>
            <p><a href="index.html">Back to Home</a></p>
        </div>
    </body>
</html>