// rather than make a specific data manager for articles, I'm going to include the necessary functions here

// requiring dashboard so can invoke dashboard function in validateUser
const dashboard = require("../dashboard/dashboard.js");

// putting functions I need for database manipulation inside loginDataManager object

const loginDataManager = Object.create(null, {
    // saveUser to database.json file
    saveUser: {
        value: (user) => {
            return fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
                .then(response => response.json());
        }
    },

    // get the users from database.json file
    getUsers: {
        value: () => {
            return fetch("http://localhost:8088/users").then(r => r.json())
        }
    },

    createUser: {
        value: (user) => {
            loginDataManager.saveUser(user).then((returnedUser) => {
            // add user to session storage to preserve them
            sessionStorage.setItem("session", JSON.stringify(returnedUser));
            });
        }
    },

    /**
     * Purpose:  Checks to see if user passed in matches user in database.json file.
     * If there is not a match, we know the user is unique and so we create the user and add to session storage
     */
    validateUser: {
        value: (user) => {
            // vars for user email and name from the API/DB
            let userEmail = "";
            let userName = "";

            // vars for user object passed in as argument
            let name = user.username;
            let email = user.email;

            // var to account if user exists or not
            let userExists = false;

            // keep track of userObject being returned later in promise
            let userObject = user;

            // get users first in order to search through them for user passed in
            loginDataManager.getUsers().then(response => {
                // response now is a reference to the users
                response.forEach(element => {
                    userEmail = element.email;
                    userName = element.username;
                    myMatchedUser = element;

                    // i want to use toUpperCase so that email and usernames are not case sensitive
                    if ((email.toUpperCase() === userEmail.toUpperCase()) || (name.toUpperCase() === userName.toUpperCase())) {
                        // change userExists to true and break or return
                        userExists = true;
                        console.log("username or email already exists; logging you in as, " + element.username);
                        // if user does exist we need to log them in and take them to the dashboard
                        // log user in
                        // add user to session storage to preserve them
                        sessionStorage.setItem("session", JSON.stringify(myMatchedUser));
                        // take user to dashboard by invoking dashboard(user.username);
                        dashboard(user.username);
                    }
                }); // forEach

                // let us check if userExists is false and create user if so
                if (!(userExists)) {
                    // userExists = false, we can create user.
                    loginDataManager.createUser(user);

                    // take user to Dashboard
                    dashboard(user.username);
                }  // if user does not exist

            });
        }
    },

    getArticleFormInput: {
        value: () => {
            console.log("function executed");
            // console.log ("getArticleFormInput called")
            // if ((document.querySelector("input[name=\"newsTitle\"]").value) !== null && (document.querySelector("input[name=\"Synopsis\"]").value) !== null && (document.querySelector("input[name=\"url\"]").value) !== null) {
            //     // form fields could still be an empty strong but this protects from them being null/undef
            //     console.log("fields not empty");
            // }
        }
    }
});

// you require modules, you export functions
module.exports = loginDataManager;