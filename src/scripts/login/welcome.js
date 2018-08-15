/**
 * @Author:  Nick Black
 *
 * @Purpose:  display welcome msg to DOM and provide option to register a new account and be taken to the Dashboard.
 *
 *
 */

 // welcome.js requires
 const loginDataManager = require("./loginDataManager.js");

 // get a reference to DOM body element
 const documentBody = document.querySelector("body");

// create a div to hold everything in index.html for login module
const loginDiv = document.createElement("div");
loginDiv.setAttribute("class", "loginClass");
documentBody.appendChild(loginDiv);

// get a reference to loginDiv div
const loginDivReference = document.querySelector(".loginClass");

// get a reference to script element
const scriptTagReference = document.querySelector("script");

// need to insert loginDiv before script tag on body
documentBody.insertBefore(loginDivReference, scriptTagReference);
// documentBody.appendChild(loginDiv);


// store welcome message to be displayed
const welcomeMsg = "<h1>Welcome to Nutshell! Please register/login to continue<br/></h1>";

// button for register a new account to display register form on click
const btn = document.createElement("button");
const textNode = document.createTextNode("Registration Form");
btn.appendChild(textNode);


// create a paragraph to hold form
const formParagraph = document.createElement("p");

// create a button to register an account and trigger validation of username/email address
const registerBtn = document.createElement("button");
const registerTextNode = document.createTextNode("register");
registerBtn.appendChild(registerTextNode);

// registration form string literal
const registrationForm = `<form><fieldset><legend>Register New Account</legend>
Email: <input type="text" name="email"><br/>
Username: <input type="text" name="username"><br/>
</fieldset></form>`

// function that is called in main.js to put welcome message on DOM as well as register new account button
const welcome = function() {
    const welcomeParagraph = document.createElement("p");
    welcomeParagraph.innerHTML += welcomeMsg;
    loginDivReference.appendChild(welcomeParagraph);
    loginDivReference.appendChild(btn);
}

// event listener to display form when btn is clicked
btn.addEventListener("click", function displayForm() {
    console.log("button clicked so display form to DOM");
    // set formParagraph's inner html to registrationForm
    formParagraph.innerHTML = registrationForm;
    // append formParagraph to DOM
    loginDivReference.appendChild(formParagraph);
    formParagraph.appendChild(registerBtn);
    // attach a register button to form and an event listener
});

/** Event listener for registerBtn
 *
 * Purpose:  on click, invoke validate function to check if username and email address are unique.  If they are, create a new user and store the user in loginDummy.json.  After this, the user would be taken to the dashboard.
 *
 */
registerBtn.addEventListener("click", function validate() {
    console.log("Invoke validate function to check if username and email are unique.");
    console.log("creating newCustomerAccount object");

    // store this newCustomerAccount as a user in loginDummy.json
    const newCustomerAccount = {
        "email": document.querySelector("input[name=\"email\"]").value,
        "username": document.querySelector("input[name=\"username\"]").value
    }

    // save the new user to loginDummy.json
    loginDataManager(newCustomerAccount).then(() => {
        console.log("user has been saved!");
    });
});

// export welcome function called in main.js
module.exports = welcome;