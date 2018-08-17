const eventDataManager = Object.create(null, {
    saveEvent: {
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
            return fetch("http://localhost:8088/events").then(r => r.json())
        }
    },
    deleteEvent: {
        value: (id) => {
            return fetch(`http://localhost:8088/events/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    },
    editEvent: {
        value: (id,event) => {
            return fetch(`http://localhost:8088/events/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(event)
            })
                .then(response => response.json())
        }
    }
    }
)

module.exports = eventDataManager