/*
 * scripts.js
 *
 * Handles client-side interactions for the Elite Healthcare Consulting website.
 * Provides basic form validation and feedback on submission without the need
 * for a backend server. In a production environment, this would be replaced
 * with actual submission logic communicating with a secure server.
 */

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('consultation-form');
    var responseDiv = document.getElementById('form-response');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Clear previous responses
            responseDiv.textContent = '';

            // Extract values
            var name = form.name.value.trim();
            var email = form.email.value.trim();
            var phone = form.phone.value.trim();

            // Basic validation
            if (!name || !email || !phone) {
                responseDiv.style.color = '#d9534f';
                responseDiv.textContent =
                    'Please fill in all required fields (Name, Email and Phone).';
                return;
            }

            // Provide feedback while "submitting"
            responseDiv.style.color = '#06113C';
            responseDiv.textContent = 'Submitting...';

            // Simulate asynchronous operation
            setTimeout(function () {
                responseDiv.style.color = '#28a745';
                responseDiv.textContent =
                    'Thank you for your application. We will contact you shortly.';
                form.reset();
            }, 1500);
        });
    }
});