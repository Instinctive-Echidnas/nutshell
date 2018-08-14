const eventDataManager = Object.create(null, {
    saveEventEntry: {
        value: (entry) => {
            return fetch("http://localhost:8088/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
                .then(response => response.json())
        }
    },
    getAllEvents: {
        value: () => {
            return fetch("http://localhost:8088/entries?_order=desc&_sort=date").then(r => r.json())
        }
    },
    deleteEvent: {
        value: (id) => {
            return fetch(`http://localhost:8088/entries/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    }
})

module.exports = eventDataManager