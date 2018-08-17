/**
 * Dashboard should require every individual module that we want displayed outside of login/welcome/registration page
 */

// i had to use ../chat as opposed to ./chat which it was
const chat = require("../chat/chat.js");
const chatListeners = require("../chat/chatListeners.js");
const startTask = require("../tasks/task.js");

const event = require("../events/event.js");

// passing in the username from session storage for custom welcome
function dashboard(username) {
    // before I load dashboard, I need to clear the dom container in order to get rid of login/registration information when new user created
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "dashboard");
    document.querySelector("body").appendChild(myDiv);
    // clear loginClass container
    document.querySelector(".loginClass").innerHTML = "";

    // clear DOM information from welcome/registration/login
    const child = document.querySelector(".loginClass");
    child.parentNode.removeChild(child)

    // create the logo for dashboard
    const logo = document.createElement("img");
    // I'm thinking images for live dist need to be in dist folder.  is this so?  Ask Steve.  Had issues with it in other folders and probably because Grunt file isn't copying those over to dist
    logo.setAttribute("src", "squirrelNutshell.png");
    logo.setAttribute("width", "100");
    logo.setAttribute("height", "100");
    logo.setAttribute("alt", "Nutshell");
    logo.setAttribute("class", "logo");
    const scriptRef = document.querySelector("script");
    const dashboardRef = document.querySelector(".dashboard");
    // insert dashboard container before script tag but after image
    dashboardRef.appendChild(logo);
    document.querySelector("body").insertBefore(dashboardRef, scriptRef);
    const p = document.createElement("p");
    // using username argument for custom welcome
    p.innerHTML = `<h2>Welcome to your dashboard, ${username}!</h2>`;
    document.querySelector(".dashboard").appendChild(p);

//_______________________________________________INIT DANIEL'S CHAT__________________________________________
    chat.createWindow();
    chatListeners.postButton();
    chatListeners.deleteButton();
    chatListeners.editButton();
    chatListeners.saveEditButton();
    event();
    startTask();
}
//_______________________________________________END OF CHAT__________________________________________


    console.log("starting Helen");

//The task section 
    

module.exports = dashboard;