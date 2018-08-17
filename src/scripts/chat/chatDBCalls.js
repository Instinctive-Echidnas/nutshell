chatDBCalls = {
    savechatMessage: (entry) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    getchatMessages: () => {
        return fetch("http://localhost:8088/messages?_order=desc&_sort=date")
        .then(response => response.json())
    },
    deletechatMessage: (id) => {
        return fetch(`http://localhost:8088/messages/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
    },
    editchatMessage: (id, updatedMessage) => {
        return fetch(`http://localhost:8088/messages/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedMessage)
        })
        .then(response => response.json())
    }
}

module.exports = chatDBCalls;