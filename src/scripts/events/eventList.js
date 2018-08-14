const listElement = document.querySelector("#eventSection")
const eventListComponent = require("events/eventListComponent.js")

const eventList = (entries) => {
    listElement.innerHTML = ""

    entries.map(entry => {
        console.log(entry)
        listElement.innerHTML += eventListComponent(entry)
    })
}


module.exports = eventList;