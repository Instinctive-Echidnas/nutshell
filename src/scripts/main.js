const welcome = require("./login/welcome.js");
const events = require("events/event.js");
origin;
events;

console.log("Hello main.js");

tempObject  = {
    userName: false
}

sessionStorage.setItem("session", JSON.stringify(tempObject));

let login = JSON.parse(sessionStorage.getItem("session"));

if (login.userName) {
    console.log("Dashboard");
} else {
    console.log("Login: invoking welcome function inside of welcome module");
    welcome();
}
