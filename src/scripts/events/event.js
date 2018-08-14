const entryComponent = require("events/eventForm.js");
const eventList = require("events/eventList.js")
const addButton = document.querySelector("#eventForm");
const dataManager = require("../dataManager.js")

// console.log(dataManager.getAllEvents());
const listEvents = () => {
    dataManager.getAllEvents().then(entry => eventList(entry))
}
listEvents();

//adds event listener to the add new event button, which brings up a form for the user to add event details
addButton.addEventListener("click",()=>{
    eventSectionDiv = document.querySelector("#eventSection");
    let placeHolderDiv = document.createElement("div");
    placeHolderDiv.innerHTML=entryComponent;
    eventSectionDiv.appendChild(placeHolderDiv);
});

module.exports = addButton;