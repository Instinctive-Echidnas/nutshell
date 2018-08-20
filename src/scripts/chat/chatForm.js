const chatDBCalls = require("./chatDBCalls.js");

//vvvvvvvvvvvvvvvvv THIS AREA BELOW POPULATES THE #chatWindow WITH CURRENT DATA FROM API THAT IS PASSED INTO IT vvvvvvvvvvvvvvvvvvvvvvv
makeChat = (response) => {
    response.reverse().forEach((messageObject, index) => {
        chatDBCalls.getUser(messageObject.userId)
        .then(userObject => userObject.username)
        .then(username => {
            let messageBox = $("<div></div>").attr("id", `messageBox--${index}`).attr("class", "messages");
            let messageArea = $("<div></div>").attr("class", "chatMessage").text(`${messageObject.message}`);
            let userBox = $("<div></div>").attr("class", "chatUserName").text(username);
            let editButton = $("<div></div>").text("Edit").attr("id", `editchatButton--${messageObject.id}`).attr("class", `editChatButton`);
            let deleteButton = $("<div></div>").text("Delete").attr("id", `deletechatButton--${messageObject.id}`).attr("class", `deleteChatButton`);
            $(messageBox).append(userBox, messageArea, editButton, deleteButton);
            $("#chatHistory").append(messageBox);
            $("#chatHistory").scrollTop($("#chatHistory")[0].scrollHeight) //THIS MAKES THE CHAT WINDOW STAY SCROLLED TO THE MOST CURRENT POST})
        })
    })
}

module.exports = makeChat