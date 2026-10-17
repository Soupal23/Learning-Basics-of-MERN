const { Task } = require("../models/tasksmodel")

function getAllTasks(){
    return Task.find()
}

function addTask(task){
    tasks.push(task)
    return task
}

module.exports = { getAllTasks, addTask }