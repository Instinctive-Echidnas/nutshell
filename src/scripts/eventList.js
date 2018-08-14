const eventData = require("./datamanger.js");





const listElement = document.querySelector("#eventSection")

const eventList = (entries) => {
    listElement.innerHTML = ""

    entries.map(entry => {
        listElement.innerHTML += entryComponent(entry)
    })
}


modules.export = eventList