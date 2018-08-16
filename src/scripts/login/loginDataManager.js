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
                    console.log("user doesn't exist so creating them");
                    loginDataManager.saveUser(user).then((returnedUser) => {
                        // set userObject equal to returned user to preserve this for setting later in storage
                        userObject = returnedUser;
                        // get user id to add and set to user.id which modifies the saved user in welcome.js
                        console.log(returnedUser);
                        // add user to session storage to preserve them
                        sessionStorage.setItem("session", JSON.stringify(returnedUser));
                    });

                    // take user to Dashboard
                    dashboard(user.username);
                }  // if user does not exist

            });
        }
    }
});

// you require modules, you export functions
module.exports = loginDataManager;