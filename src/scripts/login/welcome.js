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

// create the logo for dashboard
const logo = document.createElement("img");
// I'm thinking images for live dist need to be in dist folder.  is this so?  Ask Steve.  Had issues with it in other folders and probably because Grunt file isn't copying those over to dist
logo.setAttribute("src", "squirrelNutshell.png");
logo.setAttribute("width", "100");
logo.setAttribute("height", "100");
logo.setAttribute("alt", "Nutshell");
const scriptRef = document.querySelector("script");
const dashboardRef = document.querySelector(".dashboard");
// insert image before script tag and anything else on page
// document.querySelector("body").insertBefore(logo, scriptRef);
loginDivReference.appendChild(logo);


// store welcome message to be displayed
const welcomeMsg = "<h2>Welcome to Nutshell! Please register/login to continue<br/></h2>";

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

/** Event listener for registerBtn -- Validate, Register, Dashboard
 *
 * Purpose:  on click, invoke validate function to check if username and email address are unique.  If they are, create a new user and store the user in loginDummy.json.  After this, the user would be taken to the dashboard.
 *
 */
registerBtn.addEventListener("click", function validate() {
    // create a new customer account to validate and store if unique
    const user = {
        "email": document.querySelector("input[name=\"email\"]").value,
        "username": document.querySelector("input[name=\"username\"]").value,
        // set a default id of 0 and when user is validated, set the actual associated id from .json file
    }

    // validate the new user and test if unique
    loginDataManager.validateUser(user);
});

// export welcome function called in main.js
module.exports = welcome;