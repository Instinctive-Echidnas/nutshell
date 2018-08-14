// KISS   -- start small.  getting started hardest part.  just do it
// and refactor later.  make this piece of shit roll down the road with all the parts falling off
console.log("welcome.js connected");

const welcomeMsg = "<h1>Welcome to Nutshell! Please register/login to continue<br/></h1>";



const welcome = function() {
    const welcomeParagraph = document.createElement("p");
    welcomeParagraph.innerHTML += welcomeMsg;
    document.querySelector("BODY").appendChild(welcomeParagraph);
}

module.exports = welcome;