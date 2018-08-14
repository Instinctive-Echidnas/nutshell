// I think this returns a promise so when I invoke it, I need to use a .then to do something
// with it.

saveUser: {
    value: (user) => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
    }
}
// you require modules, you export functions
module.exports = saveUser;
