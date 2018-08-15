// const chat = require("./chat/chat.js");
const welcome = require("./login/welcome.js");
const dashboard = require("./dashboard/dashboard.js");

// console.log("Hello main.js");

// set to true in order to go to dashboard and false to go to welcome/registration
tempObject  = {
    userName: true
}

sessionStorage.setItem("session", JSON.stringify(tempObject));

let login = JSON.parse(sessionStorage.getItem("session"));

if (login.userName) {
    console.log("Dashboard");
    dashboard();
} else {
    console.log("Welcome/Registration");
    welcome();
}

// chat.createWindow();