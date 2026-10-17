const express = require("express")
const tasksRouter = express.Router()

const { getTasks,postTasks } = require(
    "../controllers/taskController")
tasksRouter.get("/tasks",(req,res,next)=>{
    getTasks(req,res)
})

tasksRouter.post("/tasks",(req,res,next) =>{
    postTasks(req,res)
})

module.exports = tasksRouter