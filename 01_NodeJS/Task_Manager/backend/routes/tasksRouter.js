const express = require("express")
const tasksRouter = express.Router()

const { getTasks } = require("../controllers/taskController")
tasksRouter.get("/tasks",(req,res,next)=>{
    getTasks(req,res)
})

module.exports = tasksRouter