const nameElement = document.getElementById('name');
const nameErrorElement = document.getElementById('form-error-name');

const emailElement = document.getElementById('email');
const emailErrorElement = document.getElementById('form-error-email');

const messageElement = document.getElementById('message');
const messageErrorElement = document.getElementById('form-error-message');

const formElement = document.getElementById('contact-form');

formElement.addEventListener('submit', (e) => {
  clearInputErrors();
  e.preventDefault();
  checkFormInputs();
});

function checkFormInputs() {
  const name = nameElement?.value;
  const email = emailElement?.value;
  const message = messageElement?.value;

  if (!name) {
    setInputErrorText(nameErrorElement, 'Nome inválido');
  }

  if (!name || !email.includes('@') || email.length <= 3) {
    setInputErrorText(emailErrorElement, 'Email inválido');
  }

  if (!message || message.length < 10 || message.length > 500) {
    setInputErrorText(messageErrorElement, 'A mensagem deve ter entre 10 e 500 caracteres.');
  }
}

function setInputErrorText(errorElement, errorMessage) {
  errorElement.innerText = errorMessage;
}

function clearInputErrors() {
  setInputErrorText(nameErrorElement, '');
  setInputErrorText(emailErrorElement, '');
  setInputErrorText(messageErrorElement, '');
}
