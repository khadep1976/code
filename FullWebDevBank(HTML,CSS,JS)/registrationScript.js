document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(registrationForm);

        fetch('register.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert('Registration successful. Please log in.');
                window.location.href = 'login.html';
            } else {
                alert('Registration failed. Please try again.');
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
