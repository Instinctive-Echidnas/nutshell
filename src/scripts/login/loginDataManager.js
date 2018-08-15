
// putting functions I need for database manipulation inside loginDataManager object
const loginDataManager = Object.create(null, {
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

    getUsers: {
        value: () => {
            return fetch("http://localhost:8088/users").then(r => r.json())
        }
    },

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

            // get users first in order to search through them for user passed in
            loginDataManager.getUsers().then(response => {
                // response now is a reference to the users
                response.forEach(element => {
                    userEmail = element.email;
                    userName = element.username;

                    // i want to use toUpperCase so that email and usernames are not case sensitive
                    if ((email.toUpperCase() === userEmail.toUpperCase()) || (name.toUpperCase() === userName.toUpperCase())) {
                        // change userExists to true and break or return
                        userExists = true;
                        console.log("username or email already exists; please try again!");
                    }
                }); // forEach

                // let us check if userExists is false and create user if so
                if (!(userExists)) {
                    // userExists = false, we can create user.
                    console.log("user doesn't exist so creating them");
                    loginDataManager.saveUser(user).then(() => {
                        console.log(user + " user has been saved!");
                    });

                    // take user to Dashboard

                }
            });
        }
    }
});

// function saveUser(user) {
//     return fetch("http://localhost:8088/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)
//     })
//         .then(response => response.json())
// }


// you require modules, you export functions
module.exports = loginDataManager;
