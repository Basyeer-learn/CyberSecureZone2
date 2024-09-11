document.addEventListener('DOMContentLoaded', function () {
    // Handle navbar scrolling effect
    window.addEventListener('scroll', function () {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Auto-scroll effect on load
    document.querySelector('nav').classList.add('scrolled');

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    const thankYouIsland = document.getElementById('thank-you-island');
    const overlay = document.getElementById('overlay');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting automatically
        const formData = new FormData(contactForm);

        // Post form data to Formspree
        fetch('https://formspree.io/f/mgvwqzol', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                showThankYou(); // Show thank-you popup
            } else {
                alert('Oops! Something went wrong.');
            }
        }).catch(() => alert('Oops! Something went wrong.'));
    });

    // Show thank-you message
    function showThankYou() {
        thankYouIsland.style.display = 'block';
        overlay.style.display = 'block';
        contactForm.reset(); // Reset form fields
    }

    // Close thank-you message
    window.closeThankYou = function () {
        thankYouIsland.style.display = 'none';
        overlay.style.display = 'none';
    };

    // Resubmit form
    window.submitAgain = function () {
        closeThankYou(); // Close thank-you popup
        contactForm.scrollIntoView({ behavior: 'smooth' });
    };
});
