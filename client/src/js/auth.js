const signUp = document.querySelector(".sign-up");
const login = document.querySelector(".login");

const loginForm = document.querySelector(".login form");
const signUpForm = document.querySelector(".sign-up form");

const signUpLink = document.querySelector(".auth-signup");
const loginLink = document.querySelector(".auth-login");

const loginErrorMessages = document.querySelectorAll(".login .form-error");
const signUpErrorMessages = document.querySelectorAll(".sign-up .form-error");

const emailFormat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
const passwordMinLength = 8;
const passwordMaxLength = 30;

const switchPages = (currentPage, displayPage) => {
  if (currentPage.style.display !== "none") {
    displayPage.style.display = "block";
    currentPage.style.display = "none";
  }
};

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  switchPages(signUp, login);
});

signUpLink.addEventListener("click", (e) => {
  e.preventDefault();
  switchPages(login, signUp);
});

onload = signUp.style.display = "none";

/* form validation and submission */
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = document.querySelector(".login .email");
  const passwordValue = document.querySelector(".login .password");
  let errorMessages = [];

  if (emailValue.value === "" || emailValue.value == null) {
    errorMessages.push("Email is required");
    loginErrorMessages[0].innerHTML = errorMessages[0];
  }

  if (!emailValue.value.match(emailFormat)) {
    errorMessages.push("Incorrect email format");
    loginErrorMessages[0].innerHTML = errorMessages[1];
  }

  if (passwordValue.value === "" || passwordValue.value == null) {
    errorMessages.push("Password is required");
    loginErrorMessages[1].innerHTML = errorMessages[2];
  }

  if (passwordValue.value < 8) {
    errorMessages.push("Password length should be greater than 8 characters");
    loginErrorMessages[1].innerHTML = errorMessages[3];
  } else if (passwordValue.value > 30) {
    errorMessages.push(
      "Password length should not be greater than 30 characters"
    );
    loginErrorMessages[1].innerHTML = errorMessages[4];
  } else {
    loginErrorMessages.forEach((errorMessage) => (errorMessage.innerText = ""));
    console.log(passwordValue.value, emailValue.value);
  }

  //   backend
});

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
