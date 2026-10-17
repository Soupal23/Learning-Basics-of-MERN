const tasks = []

function getAllTasks(){
    return tasks
}

function addTask(task){
    tasks.push(task)
    return task
}

module.exports = { getAllTasks,
     addTask }