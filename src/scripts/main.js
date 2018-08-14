chat = require("./chat/chat.js");

console.log("Hello main.js");

tempObject  = {
    userName: false
}

sessionStorage.setItem("session", JSON.stringify(tempObject));

let login = JSON.parse(sessionStorage.getItem("session"));

if (login.userName) {
    console.log("Dashboard");
} else {
    console.log("Login");
}

chat.createWindow("Hello");