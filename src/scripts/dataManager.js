const APItasksContent = Object.create (null, {

//save the task in the API
    saveTask: {
        value: (task) => {
                return fetch("http://localhost:8088/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
            .then(response => response.json())
        }
    },

    //get task from the API
        getTasks: {
            value: (id) => {
                return fetch(`http://localhost:8088/tasks?taskStatus=true&userId=${id}`)
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
    //this allows you to edit the task in the API.
    completeTask: {
        value: (task, taskID) => {
            
            return fetch(`http://localhost:8088/tasks/${taskID}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
            .then(response => response.json())
        }
    },
    editTask: {
        value: (task, taskID) => {
            
            return fetch(`http://localhost:8088/tasks/${taskID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
            .then(response => response.json())
        }
    }
});

module.exports = APItasksContent