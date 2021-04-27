// Hamburger navigation

let navToggle = document.querySelector(".nav-toggle");
let hamburger = document.querySelector(".hamburger");
let closeButton = document.querySelector(".close");
let nav = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  nav.classList.add("nav-items-visible");
  hamburger.style.display = "none";
  closeButton.style.display = "block";
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("nav-items-visible");
  hamburger.style.display = "block";
  closeButton.style.display = "none";
});

// Form validation

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let textareaInput = document.getElementById("message");
let nameError = document.querySelector(".error-message-name");
let emailError = document.querySelector(".error-message-email");
let textareaError = document.querySelector(".error-message-textarea");
let form = document.getElementsByTagName("form")[0];

nameInput.addEventListener('input', (event) => {
  if (!nameInput.validity.valueMissing) {
    nameError.innerHTML = '';
    nameInput.classList.remove('error-input');
  } else {
    showError(nameInput, nameError);
  }
})

emailInput.addEventListener('input', (event) => {
  if (!emailInput.validity.valueMissing) {
    emailError.innerHTML = '';
    emailInput.classList.remove('error-input');
  } else {
    showError(emailInput, emailError);
  }
})

textareaInput.addEventListener('input', (event) => {
  if (!textareaInput.validity.valueMissing) {
    textareaError.innerHTML = '';
    textareaInput.classList.remove('error-input');
  } else {
    showError(textareaInput, textareaError);
  }
})

form.addEventListener('submit', (event) => {
  if (nameInput.validity.valueMissing) {
    showError(nameInput, nameError);
    event.preventDefault();
  }
  if (emailInput.validity.valueMissing || emailInput.validity.typeMismatch) {
    showError(emailInput, emailError);
    event.preventDefault();
  }
  if (textareaInput.validity.valueMissing) {
    showError(textareaInput, textareaError);
    event.preventDefault();
  }
})

function showError(event, error) {
  event.classList.add('error-input');
  error.classList.add('error-active');
  if (event.validity.valueMissing) {
    error.innerHTML = "This field is required"
  } else if (!event.validity.valid) {
    error.innerHTML = "You must enter a valid email"
  }
}
