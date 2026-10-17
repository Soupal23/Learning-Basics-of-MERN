const { getAllTasks,addTask } = require(
    "../service/tasksService")

function getTasks(req,res){
    res.send(getAllTasks())
}

function postTasks(req,res){
    res.send(addTask(req.body))
}

module.exports = { getTasks, postTasks } 