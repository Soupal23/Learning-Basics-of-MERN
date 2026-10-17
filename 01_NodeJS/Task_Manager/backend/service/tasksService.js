const { Task } = require("../models/tasksmodel")

async function getAllTasks(){
    return await Task.find()
}

async function addTask(task){
    return await Task.create(task)
}

module.exports = { getAllTasks, addTask }