// i had to use ../chat as opposed to ./chat which it was
const chat = require("../chat/chat.js");

function dashboard() {
    const dashboardImage = document.createElement("img");
    // I'm thinking images for live dist need to be in dist folder.  is this so?  Ask Steve.  Had issues with it in other folders and probably because Grunt file isn't copying those over to dist
    dashboardImage.setAttribute("src", "squirrelNutshell.png");
    dashboardImage.setAttribute("width", "100");
    dashboardImage.setAttribute("height", "100");
    dashboardImage.setAttribute("alt", "Nutshell");
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "dashboard");
    document.querySelector("body").appendChild(myDiv);
    const scriptRef = document.querySelector("script");
    const dashboardRef = document.querySelector(".dashboard");
    document.querySelector("body").insertBefore(dashboardImage, scriptRef);
    document.querySelector("body").insertBefore(dashboardRef, scriptRef);
    const p = document.createElement("p");
    p.innerHTML = "<h2>Welcome to Nutshell's Dashboard!</h2>";
    document.querySelector(".dashboard").appendChild(p);

    // init Daniel's chat
    chat.createWindow();
}

module.exports = dashboard;