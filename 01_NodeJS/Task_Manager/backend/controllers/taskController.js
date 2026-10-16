const getAllTasks = require("../service/tasksService")
function getTasks(res,req){
    res.send(getAllTasks())
}

module.exports = { getTasks } 