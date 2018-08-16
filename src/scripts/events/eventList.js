const listElement = document.querySelector("#eventSection")
const eventListComponent = require("events/eventListComponent.js")
//takes the events and maps over them and takes the info and sends it into the eventListComponent
const eventList = (events) => {
    listElement.innerHTML = ""

    events.map(event => {
        listElement.innerHTML += eventListComponent(event)
    })
}


module.exports = eventList;