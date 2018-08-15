
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
            // does this need to be loginDataManager.getUsers() to invoke here?
            getUsers().then(response => {
                console.log("I have gotten the users!");
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
