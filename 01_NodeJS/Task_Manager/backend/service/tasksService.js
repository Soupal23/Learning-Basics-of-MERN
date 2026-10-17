const { Task } = require("../models/tasksmodel")

async function getAllTasks(){
    return await Task.find()
}

async function addTask(task){
    return await Task.create(task)
}

async function removeTask(id){
    return await Task.findOneAndDelete({ "id" : id.id })
}

module.exports = { getAllTasks, addTask, removeTask }