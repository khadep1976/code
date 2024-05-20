document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(loginForm);

        fetch('login.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert('Login successful. Redirecting to the home page.');
                window.location.href = 'home.html';
            } else {
                alert('Login failed. Please check your credentials.');
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
