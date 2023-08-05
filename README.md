# STUDENT-ATTENDANCE-CALCULATOR

This is a Database Web Application that allows college teachers and institution lecturers to calculate each student's attendance in their class for each course or subject they took that year.

```js
/* Rendering and View ===== */
const displayAuthPage = () => {
  applicationView.innerHTML = loginPage;

  /* many of the methods should continue from here ===== */

  const signUpButton = document.querySelector(".sign-up");
  const logInButton = document.querySelector(".log-in");
  const signUpLink = document.querySelector(".auth-signup");
  const loginLink = document.querySelector(".auth-login");

  signUpLink.addEventListener("click", () => {
    e.preventDefault();
    determineAuthPageChange;
  });
};

// logInButton.addEventListener("click", alert("WORKING"));

const determineAuthPageChange = () => {
  if ((loginPage.style.display = "block")) {
    loginPage.style.display = "none";
    signUpPage.style.disply = "block";
  } else return;
};

/* Actions and functions =====*/
const validateInputField = (...inputFields) => {
  const errorMessages = [`${$inputFields} is required`];

  if (!inputFields.value) {
  }
};

const loginUser = () => {};

const signUpUser = () => {};

// validate login form
if (emailValue.value.match(emailFormat) || passwordValue.value >= 8) {
    loginErrorMessages.forEach(
      (errorMessages) => (errorMessages.innerHTML = "")
    );
  } else if (!emailValue.value.match(emailFormat) && passwordValue.value < 8) {
    errorMessages.push("email field is required", "Password field is required");
    loginErrorMessages[0].innerHTML = errorMessages[0];
    loginErrorMessages[1].innerHTML = errorMessages[1];
  } else return false;
```
