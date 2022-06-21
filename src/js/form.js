const nameElement = document.getElementById('name');
const nameErrorElement = document.getElementById('form-error-name');

const emailElement = document.getElementById('email');
const emailErrorElement = document.getElementById('form-error-email');

const messageElement = document.getElementById('message');
const messageErrorElement = document.getElementById('form-error-message');

const formSubmitInput = document.getElementById('form-submit-input');

const formElement = document.getElementById('contact-form');

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  clearInputErrors();
  checkFormInputs();
});

function checkFormInputs() {
  const name = nameElement?.value;
  const email = emailElement?.value;
  const message = messageElement?.value;
  let isError = false;

  if (!name) {
    setInputErrorText(nameErrorElement, 'Nome inválido');
    isError = true;
  }

  if (!name || !email.includes('@') || email.length <= 3) {
    setInputErrorText(emailErrorElement, 'Email inválido');
    isError = true;
  }

  if (!message || message.length < 10 || message.length > 500) {
    setInputErrorText(messageErrorElement, 'A mensagem deve ter entre 10 e 500 caracteres.');
    isError = true;
  }

  if (!isError) {
    setInputSubmitText('Obrigado pela sua mensagem!');
  }
}

function setInputErrorText(errorElement, errorMessage) {
  errorElement.innerText = errorMessage;
}

function setInputSubmitText(message) {
  formSubmitInput.value = message;
  formSubmitInput.disabled = true;
}

function clearInputErrors() {
  setInputErrorText(nameErrorElement, '');
  setInputErrorText(emailErrorElement, '');
  setInputErrorText(messageErrorElement, '');
}
