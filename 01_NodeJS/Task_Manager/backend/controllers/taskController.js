const { getAllTasks } = require("../service/tasksService")
function getTasks(req,res){
    res.send(getAllTasks())
}

module.exports = { getTasks } 