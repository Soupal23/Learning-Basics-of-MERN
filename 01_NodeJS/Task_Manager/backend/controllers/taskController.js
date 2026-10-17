const { getAllTasks,addTask } = require(
    "../service/tasksService")

async function getTasks(req,res){
    const tasks = await getAllTasks()
    res.send(tasks)
}

function postTasks(req,res){
    res.send(addTask(req.body))
}

module.exports = { getTasks, postTasks } 