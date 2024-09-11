// Function to check quiz answers
function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.style.backgroundColor = '#90EE90';
        alert('Correct! You\'re doing great with your social media security knowledge.');
    } else {
        button.style.backgroundColor = '#FF6F61';
        alert('Incorrect. Keep learning to enhance your social media security!');
    }
}

// Sticky navbar effect
window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};