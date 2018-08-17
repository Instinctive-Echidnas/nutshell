// require loginDataManager so that you can use functions witih respect to article management
// I have put everything into loginDataManager so that eventually it can just be DataManager
const loginDataManager = require("../login/loginDataManager.js");

function article() {
    const articleDivRef = document.querySelector(".articleDiv");
    // document.querySelector(".articleDiv").innerHTML = "article code is talking";

    // create a button for creating a new article
    const newArticleBtn = document.createElement("button");
    const textNode = document.createTextNode("new article");
    newArticleBtn.appendChild(textNode);
    articleDivRef.appendChild(newArticleBtn);

    // create a button for saving a new article
    const saveArticleBtn = document.createElement("button");
    const textNodeSave = document.createTextNode("save article");
    saveArticleBtn.appendChild(textNodeSave);

    // create a paragraph for article
    const articleP = document.createElement("p");

    // new article form string literal
    const newArticleForm = `<form><fieldset><legend>Add a new article</legend>
    News title: <input type="text" name="newsTitle"><br/>
    Synopsis: <input type="text" name="Synopsis"><br/>
    URL: <input type="text" name="url"><br/>
    </fieldset></form>`

    // event listener for displaying form for new article
    newArticleBtn.addEventListener("click", function displayForm() {
        // lets add the newArticleForm to articleP and then appendChild
        articleP.innerHTML = newArticleForm;
        articleDivRef.appendChild(articleP);
        // append save article button as well
        articleDivRef.appendChild(saveArticleBtn);
    });

     // event listener for save article btn that needs to check if form input and save if so
     saveArticleBtn.addEventListener("click", function saveArticle() {
        // validate that form fields are filled out and if so, save the article
        loginDataManager.getArticleFormInput();
    });
}

module.exports = article;