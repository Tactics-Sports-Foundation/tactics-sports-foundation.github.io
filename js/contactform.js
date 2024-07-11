document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var submitButton = form.querySelector('button[type="submit"]');
    var notification = document.createElement('div');
    notification.classList.add('notification');
    form.insertBefore(notification, submitButton.nextSibling); // Insert after submit button

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        var formData = new FormData(form);

        // Simulate successful form submission (no actual email sending in JavaScript)
        // Replace this with actual server-side logic in a real application

        // Display success message
        notification.textContent = 'Your message has been sent successfully.';
        notification.style.display = 'block';

        // Optionally, reset the form after a delay
        setTimeout(function() {
            form.reset();
            notification.style.display = 'none';
        }, 3000); // Reset form after 3 seconds
    });
});