function article() {
    const articleDivRef = document.querySelector(".articleDiv");
    // document.querySelector(".articleDiv").innerHTML = "article code is talking";

    const newArticleBtn = document.createElement("button");
    const textNode = document.createTextNode("new article");
    newArticleBtn.appendChild(textNode);
    articleDivRef.appendChild(newArticleBtn);

    // create a paragraph for article
    const articleP = document.createElement("p");

    // new article form string literal
    const newArticleForm = `<form><fieldset><legend>Add a new article</legend>
    News title: <input type="text" name="newsTitle"><br/>
    Synopsis: <input type="text" name="Synopsis"><br/>
    URL: <input type="text" name="url"><br/>
    </fieldset></form>`

    newArticleBtn.addEventListener("click", function displayForm() {
        // lets add the newArticleForm to articleP and then appendChild
        articleP.innerHTML = newArticleForm;
        articleDivRef.appendChild(articleP);
    });
}

module.exports = article;