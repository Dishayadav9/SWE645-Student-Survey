/*
  Author: Disha Yadav
  Purpose: Client-side validation for the SWE 645 Student Survey, including the Raffle requirement.
*/
const form = document.getElementById('studentSurvey');
const raffle = document.getElementById('raffle');
const raffleFeedback = document.getElementById('raffleFeedback');
const formMessage = document.getElementById('formMessage');

function validateRaffle() {
  const rawValues = raffle.value.split(',').map(value => value.trim()).filter(Boolean);
  const numbers = rawValues.map(Number);
  const valid = rawValues.length >= 10 && numbers.every(number => Number.isInteger(number) && number >= 1 && number <= 100);

  raffle.classList.toggle('is-invalid', !valid);
  raffleFeedback.textContent = valid
    ? ''
    : 'Please enter at least 10 comma-separated whole numbers, with each number between 1 and 100.';

  return valid;
}

raffle.addEventListener('input', () => {
  if (raffle.value.trim()) validateRaffle();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  form.classList.add('was-validated');
  formMessage.classList.add('d-none');

  const raffleValid = validateRaffle();
  if (!form.checkValidity() || !raffleValid) {
    event.stopPropagation();
    return;
  }

  formMessage.classList.remove('d-none');
  formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

form.addEventListener('reset', () => {
  form.classList.remove('was-validated');
  raffle.classList.remove('is-invalid');
  raffleFeedback.textContent = '';
  formMessage.classList.add('d-none');
});
