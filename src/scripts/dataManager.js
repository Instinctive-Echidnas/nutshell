const APItasksContent = Object.create (null, {

//save the task in the API
    savetaskEntry: {
        value: (entry) => {
                return fetch("http://localhost:8088/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
            .then(response => response.json())

        }
    },

    //get task from the API
        getEntries: {
            value: () => {
                return fetch("http://localhost:8088/tasks?taskStatus=true")
                .then(response => response.json());
            }
        },

        //retrieves the completed tasks
        getCompletedTasks: {
            value: () => {
                return fetch("http://localhost:8088/tasks?taskStatus=false")
                .then(response => response.json());
            }
        },


    
        
    // this deletes the task in the API
    deleteEntries: {
        value: (ID) => {
            return fetch(`http://localhost:8088/tasks/${ID}`,{
            method: "DELETE"
            
            })

        }

    },
    //this allows you to edit the task in the API.
    replaceEntry: {
        value: (entry, taskID) => {
            
            return fetch(`http://localhost:8088/tasks/${taskID}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
            .then(response => response.json())
        }
    },


});

module.exports = APItasksContent