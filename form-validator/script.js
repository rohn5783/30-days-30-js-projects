document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            // In a real application, you would submit the form here.
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        isValid &= validateField('username', 'Username is required and must be at least 3 characters.');
        isValid &= validateField('email', 'A valid email is required.');
        isValid &= validateField('password', 'Password is required and must be at least 8 characters.');
        return isValid;
    }

    function validateField(id, message) {
        const field = document.getElementById(id);
        const errorContainer = field.nextElementSibling;

        if (!field.checkValidity()) {
            field.parentElement.classList.add('error');
            errorContainer.textContent = message;
            return false;
        } else {
            field.parentElement.classList.remove('error');
            errorContainer.textContent = '';
            return true;
        }
    }
});
