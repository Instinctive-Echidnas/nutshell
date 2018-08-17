const chat = require("./chat.js");
const chatDBCalls = require("./chatDBCalls.js");

chatListeners = {
//vvvvvvvvvvvvvvvvv THIS IS THE EVENT LISTERNER FOR THE CHAT POST vvvvvvvvvvvvvvvvvvvvvvv
    postButton: () => {document.querySelector("body").addEventListener("click", (evt) => {
        let x = evt.target.id;
        if (x === "postButton") {
            console.log("Post  Button Function clicked");
            chat.postMessage();
        }
    })
    },
//vvvvvvvvvvvvvvvvv THIS IS THE EVENT LISTERNER FOR THE CHAT DELETE vvvvvvvvvvvvvvvvvvvvvvv
    deleteButton: () => {document.querySelector("body").addEventListener("click", (evt) => {
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
    },
//vvvvvvvvvvvvvvvvv THIS IS THE EVENT LISTERNER FOR EDITING THE EXISTING CHAT vvvvvvvvvvvvvvvvvvvvvvv
    editButton: () => {document.querySelector("body").addEventListener("click", (evt) => {
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
        // document.querySelector("#eventSection").addEventListener("click", evt => {
    //     if (evt.target.classList.contains("event__edit")) {

    //         const id = parseInt(evt.target.id.split("--")[1])
    //         let newContent = document.querySelector(`article.event__content--${id}`).textContent
    //         let newName = document.querySelector(`#event__header--${id}`).innerHTML
    //         let newDate = document.querySelector(`#event__time--${id}`).textContent

    //         eventSectionDiv = document.querySelector(`.event--${id}`);
    //         let placeHolderDiv = document.createElement("div");
    //         placeHolderDiv.innerHTML=entryComponent;
    //         eventSectionDiv.appendChild(placeHolderDiv);
    //             //creates the form for editing the event content
    //         placeHolderDiv.innerHTML= `<fieldset class="eventsField">
    //                                         <label for="eventTitle">Title</label>
    //                                         <input required type="text" id="eventEditTitle" value="${newName}">
    //                                     </fieldset>
    //                                     <fieldset class="eventsField">
    //                                         <label for="eventsContent">Event Description</label>
    //                                         <textarea id="eventEditDescription">${newContent}</textarea>
    //                                     </fieldset>
    //                                     <fieldset class="eventsField">
    //                                         <label for="eventDate">Date</label>
    //                                         <input required type="date" id="eventEditDate"> Previous Date:${newDate}
    //                                     </fieldset>
    //                                     <button id="saveEditEventButton">Save Edit</button>
    //                                     <button id="cancelEditEventButton">Cancel Edit</button>
    //                                     `;
    //                                     //adding an event listener to the save edit button that creates a new object that has the same keys as the original database object and updates the object in the database using the event's id number
    //                                     document.querySelector("#saveEditEventButton").addEventListener("click",()=>{
    //                                      const editedEvent = {
    //                                         eventTitle: document.querySelector("#eventEditTitle").value,
    //                                         eventContent: document.querySelector("#eventEditDescription").value,
    //                                         eventDate: document.querySelector("#eventEditDate").value
    //                                     }
    //                                     dataManager.editEvent(id,editedEvent)
    //                                     .then(() => {
    //                                         // Clear the event list and repopulate it with the new data
    //                                         entryComponent.clearForm
    //                                         listEvents()
    //                                     })
    //                                     })
    //                                     //adding an event listener that targets the cancel edit button so that the edit div is removed from the dom without changing any of the values that exist in the database
    //                                     document.querySelector("#cancelEditEventButton").addEventListener("click",()=>{
    //                                         const editSectionSelector=document.querySelector("#cancelEditEventButton").parentNode
    //                                         editSectionSelector.parentNode.removeChild(editSectionSelector)
    //                                     })
    //     }
    // });

    // document.querySelector("#eventSection").addEventListener("click", evt => {
    //     if (evt.target.classList.contains("saveEditEventButton")) {
    //         console.log(evt.target)
    //             // const editedEvent = {
    //             //     eventTitle: document.querySelector("#eventEditTitle").value,
    //             //     eventContent: document.querySelector("#eventEditDescription").value,
    //             //     eventDate: document.querySelector("#eventEditDate").value
    //             // }
    //             // console.log(editedEvent)
    //     }
    // })
},
}

module.exports = chatListeners;