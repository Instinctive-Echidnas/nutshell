//vvvvvvvvvvvvvvvvv THIS AREA BELOW POPULATES THE #chatWindow WITH CURRENT DATA FROM API THAT IS PASSED INTO IT vvvvvvvvvvvvvvvvvvvvvvv
makeChat = (response) => {
    response.reverse().forEach((element, index) => {
        let activeUser = JSON.parse(sessionStorage.getItem("session"));
        let messageBox = $("<div></div>").attr("id", `messageBox--${index}`).attr("class", "messages");
        let messageArea = $("<div></div>").attr("class", "chatMessage").text(`${element.message}`);
        let userBox = $("<div></div>").attr("class", "userName").text(`${element.userId}`);
        let editButton = $("<button>Edit</button>").attr("id", `editchatButton--${element.id}`);
        let deleteButton = $("<button>Delete</button>").attr("id", `deletechatButton--${element.id}`);
        $(messageBox).append(userBox, messageArea, editButton, deleteButton);
        $("#chatHistory").append(messageBox);
        $("#chatHistory").scrollTop($("#chatHistory")[0].scrollHeight) //THIS MAKES THE CHAT WINDOW STAY SCROLLED TO THE MOST CURRENT POST
    })
}

module.exports = makeChat