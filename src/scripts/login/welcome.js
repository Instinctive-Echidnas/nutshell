// KISS   -- start small.  getting started hardest part.  just do it
// and refactor later.  make this piece of shit roll down the road with all the parts falling off
console.log("welcome.js connected");

const welcomeMsg = "<h1>Welcome to Nutshell! Please register/login to continue<br/></h1>";
const btn = document.createElement("button");
const textNode = document.createTextNode("register new account");
btn.appendChild(textNode);
const documentBody = document.querySelector("BODY");

const formParagraph = document.createElement("formParagraph");



const welcome = function() {
    const welcomeParagraph = document.createElement("p");
    welcomeParagraph.innerHTML += welcomeMsg;
    documentBody.appendChild(welcomeParagraph);
    documentBody.appendChild(btn);
}

// i neeedd an event listener for button to display a form
btn.addEventListener("click", function displayForm() {
    console.log("button clicked so display form to DOM");
    // display form
    formParagraph.innerHTML = "<h2>FORM HERE</h2>";
    documentBody.appendChild(formParagraph);
});

module.exports = welcome;