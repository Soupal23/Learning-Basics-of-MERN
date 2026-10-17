const { getAllTasks,addTask , removeTask } = require(
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

async function deleteTasks(req,res){
    try{
        const result = await removeTask(req.body)
        if(!result){
            res.status(404).send("No such task")
            return
        }
        res.status(200).send("Task Deleted")
    } catch(error){
        res.status(500).send("Not deleted")
    }
}

module.exports = { getTasks, postTasks, deleteTasks } 