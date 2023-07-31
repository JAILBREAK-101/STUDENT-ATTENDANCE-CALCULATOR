/* Authentication Script file */
import { applicationView } from "./script.js";

const loginPage = `
    <div class = "auth">

        <section class="auth--header">

            <h2 class="auth--header-text">Login</h2>
            <p class="auth--info-text">Enter your credentials to continue to the attendance calculator. </p>
        
        </section>

        <section class = "">

            <form class="" action="#" method="post">
                <fieldset class = "form-field">
                    <legend><label class="form-label" for = "email" >Email</label></legend>
                    <input class="form-input email" type="text" id="email" name="email" placeholder="Type in your Email Address" />
                </fieldset>
                <span class="form-error"></span>

                <fieldset class = "">
                    <legend><label class="form-label" for="password" >Password</label></legend>
                    <input class="form-input password" type="text" id="password" name="password" placeholder="Type in your Password" />
                </fieldset>
                <span class="form-error"></span>

                <div><a href="#" class="auth-link">Forgot Password?</a>

                <div class="button-container"> 
                    <input type="submit" class = "auth-button log-in" value="Login" />
                </div>

                <div>Don't have an account?<button class="auth-link auth-signup">Sign Up</button></div>
            </form>
            
        </section>

    </div>
`;

const signUpPage = `
    <div class = "auth">
        
        <section class="auth--header">
    
            <h2 class="auth--header-text">Sign Up</h2>
            <p class="auth--info-text">Enter your credentials to get started with the attendance calculator. </p>
        
        </section>
    
        <section class = "">
        
            <form class="" action="#" method="post">
                <fieldset class = "form-field">
                    <legend><label class="form-label" for="fullname" >Fullname</label></legend>
                    <input class="form-input fullname" type="text" id="fullname" name="fullname" placeholder="" />
                </fieldset>
                <span class="form-error"></span>

                <fieldset class = "">
                    <legend><label class="form-label" for="email" >Email</label></legend>
                    <input class="form-input email" type="text" id="email" name="email" placeholder="" />
                </fieldset>
                <span class="form-error"></span>

                <fieldset class = "">
                    <legend><label class="form-label" for = "password" >Password</label></legend>
                    <input class="form-input password" type="text" id="password" name="password" placeholder="" />
                </fieldset>
                <span class="form-error"></span>

                <label for="tac" class=""><input type="checkbox" id="tac" value="agree" name="tac" class="" />Do you agree to our terms and conditions?</label>
        
                <div class="button-container"> 
                    <input type="submit" class = "auth-button sign-up" value="Sign Up" />
                </div>

                <div>Have an account?<button class="auth-link auth-login">Login</button></div>   
            </form>
            
        </section>
    
    </div>
`;

/* Utils, Variables, Objects and style classes ===== */
let displayValue = "block";

const pageDisplayClass = {
  display: displayValue === "block" ? displayValue === "none" : null,
};

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

/* condition to determine which page is on and buttons to work */

/* On page load */
onload = displayAuthPage();
