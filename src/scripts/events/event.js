const entryComponent = require("events/eventForm.js");
const eventList = require("events/eventList.js")
const addButton = document.querySelector("#eventForm");
const dataManager = require("events/eventdataManager.js")

//list all of the events currently in the database
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
    document.querySelector("#saveEventButton").addEventListener("click", () => {
        // Get form field values
        // Create object from them
        // Add timestamp
        const newEvent = {
            eventTitle: document.querySelector("#entryTitle").value,
            eventContent: document.querySelector("#eventDescription").value,
            eventDate: Date(Date.now())
        }
        dataManager.saveEventEntry(newEvent)
            .then(() => {
                // Clear the form fields
                entryComponent.clearForm
                listEvents()
            })
    })
});
module.exports = addButton;