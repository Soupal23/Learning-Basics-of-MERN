const { getAllTasks,addTask } = require(
    "../service/tasksService")

async function getTasks(req,res){
    const tasks = await getAllTasks()
    res.json(tasks)
}

async function postTasks(req,res){
    try{
        const new_task = await addTask(req.body)
        res.status(201).json(new_task)
    }catch(error){
        res.status(500).send("Task was not added")
        return
    }
}

module.exports = { getTasks, postTasks } 