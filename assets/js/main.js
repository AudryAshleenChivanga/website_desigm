document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu
    var menuBtn = document.getElementById("myNavMenu");
    document.querySelector('.nav-menu-btn').addEventListener('click', function() {
        if (menuBtn.className === "nav-menu") {
            menuBtn.className += " responsive";
        } else {
            menuBtn.className = "nav-menu";
        }
    });

    // Header shadow on scroll
    window.onscroll = function() {
        headerShadow();
    };

    function headerShadow() {
        const navHeader = document.getElementById("header");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";
        } else {
            navHeader.style.boxShadow = "none";
            navHeader.style.height = "90px";
            navHeader.style.lineHeight = "90px";
        }
    }

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
    
        // Replace 'YOUR_ENDPOINT_URL' with the actual endpoint URL
        fetch('YOUR_ENDPOINT_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            // Handle success (e.g., showing a success message)
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); // Reset form after successful submission
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle errors (e.g., showing an error message)
            alert('An error occurred. Please try again later.');
        });
    });
}
);
