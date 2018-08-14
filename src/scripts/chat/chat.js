const chat = Object.create(null, {
    createWindow: {
        value: () => {
            console.log("Create Chat Window");
            let txt1 = $("<h3></h3>").text("Chat");
            let chatHistory = $("<div></div>").attr("id", "chatHistory");
            let messageArea = $("<textarea></textarea>").attr("id", "messageArea");
            $("#chatWindow").append(txt1, chatHistory, messageArea);
            }
    },
    postMessage: {
        value: () => {
            console.log("Posted Message");
            let txt1 = $("<h3></h3>").text("Chat");
            let chatHistory = $("<div></div>").attr("id", "chatHistory");
            let txt2 = $("<textarea></textarea>");
            let txt3 = $("<strong></strong>").text("Text.");
            $("#chatWindow").append(txt1, chatHistory, txt2, txt3);
            }
    }
})

// const formManager = Object.create(null, {
//     clearForm: {
//         value: () => {
//             document.querySelector("#journalTitleInput").value = "";
//             document.querySelector("#journalTextInput").value = "";
//         }
//     },
//     makeForm: {
//         value: () => {
//             console.log("Form function invoked");
//             return `
//             <fieldset>
//                 <label for="journalTitle">Journal Title:</label>
//                 <br>
//                 <input required type="text" id="journalTitleInput">
//             </fieldset>
//             <fieldset>
//                 <label for="journalText">Journal Text:</label>
//                 <br>
//                 <textarea id="journalTextInput"></textarea>
//             </fieldset>
//             <button id="saveEntryButton">Save Journal Entry</button>
//             `}
//         }
// })
module.exports = chat
