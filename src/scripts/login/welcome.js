// KISS   -- start small.  getting started hardest part.  just do it
// and refactor later.  make this piece of shit roll down the road with all the parts falling off
const saveUser = require("./login/loginDataManager.js");

console.log("welcome.js connected");

const welcomeMsg = "<h1>Welcome to Nutshell! Please register/login to continue<br/></h1>";

// button for register a new account to display register form on click
const btn = document.createElement("button");
const textNode = document.createTextNode("Registration Form");
btn.appendChild(textNode);

// reference to DOM body element
const documentBody = document.querySelector("body");

// create a paragraph to hold form
const formParagraph = document.createElement("p");

// create a button for to register an account and trigger validation of username/email address
const registerBtn = document.createElement("button");
const registerTextNode = document.createTextNode("register");
registerBtn.appendChild(registerTextNode);

const registrationForm = `<form><fieldset><legend>Register New Account</legend>
Email: <input type="text" name="email"><br/>
Username: <input type="text" name="username"><br/>
</fieldset></form>`

// function that is called in main.js to put welcome message on DOM as well as register new account button
const welcome = function() {
    const welcomeParagraph = document.createElement("p");
    welcomeParagraph.innerHTML += welcomeMsg;
    documentBody.appendChild(welcomeParagraph);
    documentBody.appendChild(btn);
}

// i neeedd an event listener for button to display a form
btn.addEventListener("click", function displayForm() {
    console.log("button clicked so display form to DOM");
    // set formParagraph's inner html to registrationForm
    formParagraph.innerHTML = registrationForm;
    // append formParagraph to DOM
    documentBody.appendChild(formParagraph);
    formParagraph.appendChild(registerBtn);
    // attach a register button to form and an event listener
});

// event listener for register btn that will validate and then create a new account and send to dashboard
registerBtn.addEventListener("click", function validate() {
    console.log("Invoke validate function to check if username and email are unique.");
    console.log("creating newCustomerAccount object");

    // store this newCustomerAccount as a user in loginDummy.json
    const newCustomerAccount = {
        "email": document.querySelector("input[name=\"email\"]").value,
        "username": document.querySelector("input[name=\"username\"]").value
    }
    console.log(newCustomerAccount);
});

module.exports = welcome;