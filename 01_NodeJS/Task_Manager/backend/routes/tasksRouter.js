const express = require("express")
const tasksRouter = express.Router()
const app = express()
const { getTask } = require("../controllers/taskController")
app.get("/api/tasks",(req,res,next)=>{
    getTask(req,res)
})