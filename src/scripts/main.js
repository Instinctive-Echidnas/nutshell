// const chat = require("./chat/chat.js");
const welcome = require("./login/welcome.js");
const dashboard = require("./dashboard/dashboard.js");

// set login as reference to session storage item
let login = JSON.parse(sessionStorage.getItem("session"));

// if login is null we know they need to go to the welcome page and register
if (login === null) {
    console.log("No session storage information--please register");
    welcome();
} else {
    // login is not null so let us take the user to the dashboard
    console.log("taking you to the dashboard: " + login.username);
   // we must have session storage which means there is an active user
   dashboard(login.username);
}