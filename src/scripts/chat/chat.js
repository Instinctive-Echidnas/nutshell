const savechatMessage = (entry) => {
    return fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
}
const getchatMessages = () => {
    return fetch("http://localhost:8088/messages?_order=desc&_sort=date")
    .then(response => response.json())
}
const deletechatMessage = (entry) => {
    return fetch(`http://localhost:8088/messages/${entry}`, {
        method: "DELETE",
    })
    .then(response => response.json())
}

const editchatMessage = (id) => {
    return fetch(`http://localhost:8088/messages/${id}`)
    .then(response => response.json())
}

const chat = Object.create(null, {
    createWindow: {
        value: () => {
            console.log("Create Chat Window");
            let txt1 = $("<h3></h3>").text("Chat");
            let chatHistory = $("<div></div>").attr("id", "chatHistory");
            let messageArea = $("<textarea></textarea>").attr("id", "messageArea");
            let postButton = $("<button></button>").attr("id", "postButton");
            $("#chatWindow").append(txt1, chatHistory, messageArea, postButton);
            getchatMessages().then((response) => {
                response.reverse().forEach((element, index) => {
                    let messageBox = $("<div></div>").attr("id", `messageBox--${index}`).attr("class", "messages");
                    let messageArea = $("<div></div>").attr("class", "chatMessage").text(`${element.message}`);
                    let userBox = $("<div></div>").attr("class", "userName").text(`${element.userId}`);
                    $(messageBox).append(userBox, messageArea);
                    $("#chatHistory").append(messageBox);
                    $("#chatHistory").scrollTop($("#chatHistory")[0].scrollHeight)
                });
            })
        }
    },
    postMessage: {
        value: () => {
            const newEntry = {
                userId: 5,
                message: document.querySelector("#messageArea").value,
                date: Date.now(),
            }
            savechatMessage(newEntry)
            .then(() => {
                document.querySelector("#chatHistory").value = "";
                document.querySelector("#messageArea").value = "";
            })
            .then(() => {return getchatMessages()})
            .then((result) => {
                document.querySelector("#chatHistory").innerHTML = "";
                result.reverse().forEach((element, index) => {
                    let messageBox = $("<div></div>").attr("id", `messageBox--${index}`).attr("class", "messages");
                    let messageArea = $("<div></div>").attr("class", "chatMessage").text(`${element.message}`);
                    let userBox = $("<div></div>").attr("class", "userName").text(`${element.userId}`);
                    $(messageBox).append(userBox, messageArea);
                    $("#chatHistory").append(messageBox);
                    $("#chatHistory").scrollTop($("#chatHistory")[0].scrollHeight)
                })
            })
        }
    },
    editMessage: {
        value: () => {
            const newEntry = {
                userId: 5,
                message: document.querySelector("#messageArea").value,
                date: Date.now(),
            }
            savechatMessage(newEntry)
            .then(() => {
                document.querySelector("#chatHistory").value = "";
                document.querySelector("#messageArea").value = "";
            })
            .then(() => {return getchatMessages()})
            .then((result) => {
                document.querySelector("#chatHistory").innerHTML = "";
                result.reverse().forEach((element, index) => {
                    let messageBox = $("<div></div>").attr("id", `messageBox--${index}`).attr("class", "messages");
                    let messageArea = $("<div></div>").attr("class", "chatMessage").text(`${element.message}`);
                    let userBox = $("<div></div>").attr("class", "userName").text(`${element.userId}`);
                    $(messageBox).append(userBox, messageArea);
                    $("#chatHistory").append(messageBox);
                    $("#chatHistory").scrollTop($("#chatHistory")[0].scrollHeight)
                })
            })
        }
    }
})

module.exports = chat
