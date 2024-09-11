// Add scroll effect to navbar when page loads
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('nav').classList.add('scrolled');
});

// Function to shuffle an array (used to randomize answer order)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to check the answers for the quiz
function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add('correct');
        button.classList.remove('incorrect');
        alert('Correct! Great job.');
    } else {
        button.classList.add('incorrect');
        button.classList.remove('correct');
        alert('Incorrect. Try again.');
    }

    // Disable all buttons in the current quiz question after one is clicked
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed'; // Change cursor to indicate disabled state
    });
}

// Function to initialize the quiz
function initializeQuiz() {
    document.querySelectorAll('.quiz-question').forEach(question => {
        const buttons = Array.from(question.querySelectorAll('button'));
        const correctIndex = parseInt(question.getAttribute('data-correct-answer'), 10);
        const correctButton = buttons[correctIndex];
        
        // Randomize button order
        shuffleArray(buttons);

        // Append shuffled buttons to the question
        buttons.forEach(button => {
            question.appendChild(button);
            button.addEventListener('click', () => {
                const isCorrect = button === correctButton;
                checkAnswer(button, isCorrect);
            });
        });
    });
}

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', initializeQuiz);
