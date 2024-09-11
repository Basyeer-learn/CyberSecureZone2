 function checkAnswer(button, isCorrect) {
            if (isCorrect) {
                button.style.backgroundColor = '#90EE90';
                alert('Correct! Well done.');
            } else {
                button.style.backgroundColor = '#FF6F61';
                alert('Incorrect. Remember to always be cautious with phishing scams.');
            }
        }
		// script.js
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('nav').classList.add('scrolled');
});

const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const strengthText = document.getElementById('strengthLevel');
const strengthBar = document.getElementById('strengthBar');
const capsLockWarning = document.getElementById('capsLockWarning');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.src = type === 'password' ? 'Show.png' : 'Hide.png';
});

passwordInput.addEventListener('input', function () {
    const value = passwordInput.value;
    let strength = 0;

    if (value.length > 5) strength += 1;
    if (value.length > 10) strength += 1;
    if (/[A-Z]/.test(value)) strength += 1;
    if (/[0-9]/.test(value)) strength += 1;
    if (/[^A-Za-z0-9]/.test(value)) strength += 1;

    switch (strength) {
        case 1:
        case 2:
            strengthText.textContent = 'Weak';
            strengthText.style.color = '#FF0000';
            strengthBar.style.width = '20%';
            strengthBar.style.backgroundColor = '#FF0000';
            break;
        case 3:
            strengthText.textContent = 'Medium';
            strengthText.style.color = '#FFA500';
            strengthBar.style.width = '50%';
            strengthBar.style.backgroundColor = '#FFA500';
            break;
        case 4:
            strengthText.textContent = 'Strong';
            strengthText.style.color = '#00FF00';
            strengthBar.style.width = '80%';
            strengthBar.style.backgroundColor = '#00FF00';
            break;
        case 5:
            strengthText.textContent = 'Very Strong';
            strengthText.style.color = '#00FFAB';
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = '#00FFAB';
            break;
        default:
            strengthText.textContent = 'Weak';
            strengthText.style.color = '#FF0000';
            strengthBar.style.width = '0%';
            strengthBar.style.backgroundColor = '#FF0000';
    }
});

passwordInput.addEventListener('keyup', function (e) {
    if (e.getModifierState('CapsLock')) {
        capsLockWarning.style.display = 'block';
    } else {
        capsLockWarning.style.display = 'none';
    }
});
