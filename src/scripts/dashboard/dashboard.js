/**
 * Dashboard should require every individual module that we want displayed outside of login/welcome/registration page
 */

// i had to use ../chat as opposed to ./chat which it was
const chat = require("../chat/chat.js");
const startTask = require("../tasks/task.js");

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
    taskDiv.textContent = "tasks";
    moduleContainer.appendChild(taskDiv);


    // chat div
    const chatDiv = document.createElement("div");
    chatDiv.setAttribute("class", "chatDiv");
    chatDiv.textContent = "chatterbox";
    moduleContainer.appendChild(chatDiv);

    // article div
    const articleDiv = document.createElement("div");
    articleDiv.setAttribute("class", "articleDiv");
    articleDiv.textContent = "articles";
    moduleContainer.appendChild(articleDiv);

    // event div
    const eventDiv = document.createElement("div");
    eventDiv.setAttribute("class", "eventDiv");
    eventDiv.textContent = "events";
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

    //vvvvvvvvvvvvvvvvv THIS IS THE EVENT LISTERNER FOR THE CHAT POST vvvvvvvvvvvvvvvvvvvvvvv
    document.querySelector("body").addEventListener("click", (evt) => {
        let x = evt.target.id;
        if (x === "postButton") {
            chat.postMessage();
        }
    })

    //vvvvvvvvvvvvvvvvv THIS IS THE EVENT LISTERNER FOR THE CHAT DELETE vvvvvvvvvvvvvvvvvvvvvvv
    document.querySelector("body").addEventListener("click", (evt) => {
        console.log(evt)
        console.log(evt.target.id)
        if (evt.target.id.includes(`deletechatButton--${evt.target.id.split("--")[1]}`)) {
            console.log("delete button clicked");
            const id = parseInt(evt.target.id.split("--")[1]);
            console.log(id);
            event.target.parentElement.remove();
            chat.deleteMessage(id)
        }
    })
    //vvvvvvvvvvvvvvvvv THIS IS THE EVENT LISTERNER FOR EDITING THE EXISTING CHAT vvvvvvvvvvvvvvvvvvvvvvv
    document.querySelector("body").addEventListener("click", (evt) => {
        console.log(evt)
        console.log(evt.target.id)
        if (evt.target.id.includes(`editchatButton--${evt.target.id.split("--")[1]}`)) {
            console.log("edit button clicked");
            const id = parseInt(evt.target.id.split("--")[1]);
            console.log(id);
            event.target.parentElement.remove();
            chat.editMessage(id)
        }
    })
//_______________________________________________END OF CHAT__________________________________________



//The task section 
    startTask();

}

module.exports = dashboard;