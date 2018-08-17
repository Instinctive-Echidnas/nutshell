const listElement = document.getElementById("eventSection")
const eventListComponent = require("events/eventListComponent.js")
//takes the events and maps over them and takes the info and sends it into the eventListComponent
const eventList = (events) => {
    document.getElementById("eventSection").innerHTML = ""

    events.map(event => {
        document.getElementById("eventSection").innerHTML += eventListComponent(event)
    })
}


module.exports = eventList;