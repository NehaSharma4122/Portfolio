// script.js
const form = document.querySelector("form[name='contact-form']");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const warningMessages = document.getElementById("warning-messages");

const showError = (input, message) => {
  const errorElement = input.parentElement.querySelector('.error');
  errorElement.innerText = message;
  errorElement.classList.remove('hide');
};

const hideError = (input) => {
  const errorElement = input.parentElement.querySelector('.error');
  errorElement.innerText = '';
  errorElement.classList.add('hide');
};

const validateInputs = () => {
  const inputs = [nameInput, emailInput, phoneInput, messageInput];
  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${input.name} is required`);
      isValid = false;
    } else {
      hideError(input);
    }
  });

  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, 'Email is invalid');
    isValid = false;
  }

  if (!isValidPhone(phoneInput.value)) {
    showError(phoneInput, 'Phone is invalid');
    isValid = false;
  }

  return isValid;
};

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10; // Ensure phone number has exactly 10 digits
};

const submitForm = () => {
  if (validateInputs()) {
    // Proceed with form submission
    console.log('Form submitted successfully!');
    form.submit(); // Submit the form
  } else {
    console.log('Form is not valid. Please check your inputs.');
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm();
});

// Add event listeners to input fields to trigger validation on input change
[nameInput, emailInput, phoneInput, messageInput].forEach(input => {
  input.addEventListener('input', () => {
    validateInputs();
  });
});
