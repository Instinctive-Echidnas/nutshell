/**
 * Purpose:  To tie together each resource in the DB and display it to DOM in an ordered manner
 */

const chat = require("../chat/chat.js");
const chatListeners = require("../chat/chatListeners.js");
const startTask = require("../tasks/task.js");
const article = require("../article/article.js");
const editedtask = require("../tasks/editedtask.js");
const event = require("../events/event.js");

// passing in the username from session storage for custom welcome message
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

    // logout button for dashboard needs event listener to clear session storage
    const logoutBtn = document.createElement("button");
    logoutBtn.setAttribute("class", "logoutButton");
    const logoutTextNode = document.createTextNode("logout");
    logoutBtn.appendChild(logoutTextNode);
    dashboardRef.appendChild(logoutBtn);

    logoutBtn.addEventListener("click", function logout() {
        // clear session storage and call welcome() after clearing page
        sessionStorage.removeItem("session");
        location.reload();
    });

    // create a container div for all of the modules to be targeted by flexbox styling
    const moduleContainer = document.createElement("div");
    moduleContainer.setAttribute("class", "moduleContainer");
    dashboardRef.appendChild(moduleContainer);

    /**
     * Divs for respective modules here
     */

    // task div -- in startTask() function, append everything to .taskDiv
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "taskDiv");
    moduleContainer.appendChild(taskDiv);

    // chat div
    const chatDiv = document.createElement("div");
    chatDiv.setAttribute("class", "chatDiv");
    // chatDiv.textContent = "chatterbox";
    moduleContainer.appendChild(chatDiv);

    // article div
    const articleDiv = document.createElement("div");
    articleDiv.setAttribute("class", "articleDiv");
    // articleDiv.textContent = "articles";
    moduleContainer.appendChild(articleDiv);

    // event div
    const eventDiv = document.createElement("div");
    eventDiv.setAttribute("class", "eventDiv");
    moduleContainer.appendChild(eventDiv);

    // users div
    const usersDiv = document.createElement("div");
    usersDiv.setAttribute("class", "usersDiv");
    usersDiv.textContent = "users";
    moduleContainer.appendChild(usersDiv);

    // friends div
    const friendsDiv = document.createElement("div");
    friendsDiv.setAttribute("class", "friendsDiv");
    friendsDiv.textContent = "friends";
    moduleContainer.appendChild(friendsDiv);

    // messages div
    const messagesDiv = document.createElement("div");
    messagesDiv.setAttribute("class", "messagesDiv");
    messagesDiv.textContent = "messages";
    moduleContainer.appendChild(messagesDiv);

//_______________________________________________INIT DANIEL'S CHAT__________________________________________
    chat.createWindow();
    chatListeners.postButton();
    chatListeners.deleteButton();
    chatListeners.editButton();
    chatListeners.saveEditButton();
    event();
    startTask();
    article();
    //_______________________________________________END OF CHAT__________________________________________

}

module.exports = dashboard;