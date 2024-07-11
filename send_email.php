<!-- send_email.php -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs to prevent injection attacks
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set up email parameters
    $to = "contact@tacticssportsfoundation.org";
    $subject = "Message from Tactics Sports Foundation Contact Form";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Send email
    $success = mail($to, $subject, $body, $headers);

    // Check if mail sent successfully and provide feedback to the user
    if ($success) {
        echo '<p class="notification">Message sent successfully!</p>';
    } else {
        echo '<p class="notification">Failed to send message. Please try again later.</p>';
    }
}
?>
