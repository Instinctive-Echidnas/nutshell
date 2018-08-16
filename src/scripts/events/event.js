const entryComponent = require("events/eventForm.js");
const eventList = require("events/eventList.js")
const addButton = document.querySelector("#eventForm");
const dataManager = require("events/eventdataManager.js")

//list all of the events currently in the database
const listEvents = () => {
    dataManager.getAllEvents().then(entry => eventList(entry))
}
listEvents();

//after the list is loaded, then the event listener for the delete button is put into place. This uses event bubbling(the event listener is attached to the dom element on rather than on every single delete button individually) in order to prevent it from breaking when the innerHTML of the div section is updated on reload.
document.querySelector("#eventSection").addEventListener("click", evt => {
    if (evt.target.classList.contains("event__delete")) {
        const id = parseInt(evt.target.id.split("--")[1])
        dataManager.deleteEvent(id).then(()=>{entryComponent.clearForm,listEvents()})
    }
});
//after the delete button is working, we will do the edit button in a similar fashion by bubbling the event to the encapsulating dom element rather than all of the individual edit buttons.
document.querySelector("#eventSection").addEventListener("click", evt => {
    if (evt.target.classList.contains("event__edit")) {

        const id = parseInt(evt.target.id.split("--")[1])
        let newContent = document.querySelector(`article.event__content--${id}`).textContent
        let newName = document.querySelector(`#event__header--${id}`).innerHTML
        let newDate = document.querySelector(`#event__time--${id}`).textContent

        eventSectionDiv = document.querySelector(`.event--${id}`);
        let placeHolderDiv = document.createElement("div");
        placeHolderDiv.innerHTML=entryComponent;
        eventSectionDiv.appendChild(placeHolderDiv);

        placeHolderDiv.innerHTML= `<fieldset class="eventsField">
                                        <label for="eventTitle">Title</label>
                                        <input required type="text" id="eventEditTitle" value="${newName}">
                                    </fieldset>
                                    <fieldset class="eventsField">
                                        <label for="eventsContent">Event Description</label>
                                        <textarea id="eventEditDescription">${newContent}</textarea>
                                    </fieldset>
                                    <fieldset class="eventsField">
                                        <label for="eventDate">Date</label>
                                        <input required type="date" id="eventEditDate"> Previous Date:${newDate}
                                    </fieldset>
                                    <button id="saveEditEventButton">Save Edit</button>`;
                                    document.querySelector("#saveEditEventButton").addEventListener("click",()=>{
                                     const editedEvent = {
                                        eventTitle: document.querySelector("#eventEditTitle").value,
                                        eventContent: document.querySelector("#eventEditDescription").value,
                                        eventDate: document.querySelector("#eventEditDate").value
                                    }
                                    dataManager.editEvent(id,editedEvent)
                                    .then(() => {
                                        // Clear the event list and repopulate it with the new data
                                        entryComponent.clearForm
                                        listEvents()
                                    })
                                    })
    }
});

document.querySelector("#eventSection").addEventListener("click", evt => {
    if (evt.target.classList.contains("saveEditEventButton")) {
        console.log(evt.target)
            // const editedEvent = {
            //     eventTitle: document.querySelector("#eventEditTitle").value,
            //     eventContent: document.querySelector("#eventEditDescription").value,
            //     eventDate: document.querySelector("#eventEditDate").value
            // }
            // console.log(editedEvent)
    }
})

//adds event listener to the add new event button, which brings up a form for the user to add event details
addButton.addEventListener("click",()=>{
    //creates a new div element to hold the event form
    eventSectionDiv = document.querySelector("#eventSection");
    let placeHolderDiv = document.createElement("div");
    placeHolderDiv.innerHTML=entryComponent;
    eventSectionDiv.appendChild(placeHolderDiv);

    //adds event listener to the save event button
    document.querySelector("#saveEventButton").addEventListener("click", () => {
        //function to create the object that will be pushed into the database
        const newEvent = {
            eventTitle: document.querySelector("#eventTitle").value,
            eventContent: document.querySelector("#eventDescription").value,
            eventDate: document.querySelector("#eventDate").value
        }
        //saving the object into the database
        dataManager.saveEvent(newEvent)
            .then(() => {
                // Clear the event list and repopulate it with the new data
                entryComponent.clearForm
                listEvents()
            })
    })
});
module.exports = addButton;