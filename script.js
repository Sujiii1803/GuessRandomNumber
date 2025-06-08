const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

submitGuess.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    message.style.color = '#e74c3c';
  } else if (userGuess === randomNumber) {
    message.textContent = `🎉 Congratulations! You guessed the number in ${attempts} attempts.`;
    message.style.color = '#2ecc71';
  } else if (userGuess < randomNumber) {
    message.textContent = '⬆️ Too low! Try a higher number.';
    message.style.color = '#f39c12';
  } else {
    message.textContent = '⬇️ Too high! Try a lower number.';
    message.style.color = '#f39c12';
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = '';
  guessInput.focus();
});
