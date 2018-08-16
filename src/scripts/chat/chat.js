const makeChat = require("./chatForm.js");

//vvvvvvvvvvvvvvvvv CURRENT CALLS TO API, WILL BE MOVED TO A EXTERIOR MODULE LATER vvvvvvvvvvvvvvvvvvvvvvv
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
const deletechatMessage = (id) => {
    return fetch(`http://localhost:8088/messages/${id}`, {
        method: "DELETE"
    })
    .then(r => r.json())
}
const editchatMessage = (id, updatedMessage) => {
    return fetch(`http://localhost:8088/messages/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedMessage)
    })
    .then(response => response.json())
}
//_______________________END DATABASE FUNCTIONS____________________________


const chat = Object.create(null, {
    //vvvvvvvvvvvvvvvvv CreateWindow MAKES THE HTML FOR CHAT & POPULATES WITH CURRENT DATA vvvvvvvvvvvvvvvvvvvvvvv
    createWindow: {
        value: () => {
            console.log("Create Chat Window");
            let txt1 = $("<h3></h3>").text("Chat");
            let chatHistory = $("<div></div>").attr("id", "chatHistory");
            let messageArea = $("<textarea></textarea>").attr("id", "messageArea");
            let postButton = $("<button>Post</button>").attr("id", "postButton");
            $("#chatWindow").append(txt1, chatHistory, messageArea, postButton);
            return getchatMessages()
            .then((response) => {
                makeChat(response)
            })
        }
    },
    //vvvvvvvvvvvvvvvvv postMessage GENERATES AN OBJECT BASED ON CURRENT VALUES OF #messageArea and POSTS IT TO API vvvvvvvvvvvvvvvvvvvvvvv
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
                //THEN CALLS ON DATABASE MANAGER TO GET DATA AND GENERATE THE CHAT WINDOW AGAIN WITH CURRENT DATA vvvvvvvvvvvvvvvvvvvvvvv
                .then(() => {
                    return getchatMessages()
                })
                .then((result) => {
                    document.querySelector("#chatHistory").innerHTML = "";
                    makeChat(result)
                })
            }
        },
    //vvvvvvvvvvvvvvvvv THIS CALLS ON DATABASE MANAGER TO DELETE THE MESSAGE BASED ON ID vvvvvvvvvvvvvvvvvvvvvvv
    deleteMessage: {
        value: (id) => {
            deletechatMessage(id);
        },
    },
    //vvvvvvvvvvvvvvvvv THIS CALLS ON DATABASE MANAGER TO EDIT A PREVIOUSLY POSTED MESSAGE vvvvvvvvvvvvvvvvvvvvvvv
    editMessage: {
        value: (id) => {
            let editTitle = $("<h3></h3>").text("Edit Your Message");
            let editMessageArea = $("<textarea></textarea>").attr("id", "editMessageArea");
            let editButton = $("<button>Post</button>").attr("id", "postButton");
            $(`#editchatButton--${id}`).append(editTitle, editMessageArea, editButton);
            getchatMessages()
            .then((response) => {
                document.querySelector("#chatHistory").innerHTML = "";
                makeChat(response)
            })
        }
        // let something = () => {
        //     const newEntry = {
        //         userId: 5,
        //         message: document.querySelector("#messageArea").value,
        //         date: Date.now(),
        //     }
        //     savechatMessage(newEntry)
        //         .then(() => {
        //             document.querySelector("#chatHistory").value = "";
        //             document.querySelector("#messageArea").value = "";
        //         })
        //         .then(() => { return getchatMessages() })
        //         .then((result) => {
        //             document.querySelector("#chatHistory").innerHTML = "";
        //             result.reverse().forEach((element, index) => {
        //                 let messageBox = $("<div></div>").attr("id", `messageBox--${index}`).attr("class", "messages");
        //                 let messageArea = $("<div></div>").attr("class", "chatMessage").text(`${element.message}`);
        //                 let userBox = $("<div></div>").attr("class", "userName").text(`${element.userId}`);
        //                 $(messageBox).append(userBox, messageArea);
        //                 $("#chatHistory").append(messageBox);
        //                 $("#chatHistory").scrollTop($("#chatHistory")[0].scrollHeight)
        //             })
        //         })
        // }
    }
})

module.exports = chat
