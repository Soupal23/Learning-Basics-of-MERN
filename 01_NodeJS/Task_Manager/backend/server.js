// const express = require("express")
// const app = express()
// const { z } = require("zod")
// const server = app.listen(3000)
// const crypto = require("crypto")
// const { error } = require("console")
// const sample_task = {
//         id : 1,
//         name : "learning" 
//     }

// const tasks_DB = [sample_task]

// const task_schema = z.object({
//     "id" : z.number().int(),
//     "name" : z.string()
// })
// const update_task_schema = z.object({
//     "name" : z.string()
// })

// app.use(express.json())

// app.use((req,res,next)=>{
//     const requestID = crypto.randomUUID()
//     req.requestID = requestID
//     next()
// })

// app.use((req,res,next)=>{
//     console.log("[" + req.requestID+"] " + req.method + req.path)
//     next()
// })

// app.use((req,res,next)=>{
//     if(req.path=="/health"){
//         next()
//         return
//     }
//     //res.status(503).send("App under maintanence")
//     next()
// })

// app.get("/",(req,res)=>{
//     res.status(200).send("welcome to task manager")
// })

// app.get("/tasks_check",(req,res)=>{
//     const task_status=req.query.task_status
//     res.status(200).send("Tasks are "+task_status)
// })

// app.get("/health",(req,res)=>{
//     res.status(200).json({
//         "health" : "ok"
//     })
// })

// app.post("/tasks",(req,res,next)=>{
//     const task_object = {
//         "id" : req.body.id ,
//         "name" : req.body.name
//     }
//     const result = task_schema.safeParse(task_object)
//     if(!result.success){
//         console.log("[" + req.requestID+"] " + "Wrong schema in request body")
//         const error = new error("Invalid object")
//         next(error)
//         return
//     }
//     console.log("[" + req.requestID+"] " + "Successfully added data")
//     tasks_DB.push(result.data)
//     res.status(201).json(result.data)
// })
// app.get("/tasks",(req,res)=>{
//     res.status(200).json(tasks_DB)
// })

// app.delete("/tasks/:id",(req,res)=>{
//     const id = req.params.id
//     for(let i=0;i<tasks_DB.length;i++){
//         if(tasks_DB[i].id==id){
//             const deleted_name = tasks_DB[i].name
//             tasks_DB.splice(i,1)
//             res.status(200).send("deleted task "+ deleted_name)
//             return
//         }
//     }
//     res.status(404).send("No such task")
// })

// app.put("/tasks/:id" , (req,res,next)=>{
//     const id = req.params.id
//     const result = update_task_schema.safeParse(req.body)
//             if(!result.success){
//                 const error = new error("Invalid object")
//                 next(error)
//                 return
//             }
//     for(let i=0;i<tasks_DB.length;i++){
//         if(tasks_DB[i].id==id){
//             tasks_DB[i].name=result.data.name
//             res.status(200).send(tasks_DB[i])
//             return
//         }
//     }
//     res.status(404).send("No such task")
// })

// app.get("/tasks/:id",(req,res)=>{
//     const id=req.params.id
//     for(let i=0;i<tasks_DB.length;i++){
//         if(tasks_DB[i].id==id){
//             res.status(200).send(tasks_DB[i])
//             return
//         }
//     }
//     res.status(404).send("No such task")
// })

// app.get("/error",(err,req,res,next)=>{
//     const error = err
//     res.send(error)
// })

const express = require("express")
const app = express()

require("dotenv").config()
const { connectDB } = require("./config/db")
const tasksRouter=require("./routes/tasksRouter")
const { Task } = require("./models/tasksmodel")
app.use(express.json())

connectDB()
app.use("/api", tasksRouter)
app.listen(3000, ()=>{
    console.log("Server listening on port 3000")
})

//find out why app.use("/api ") goes before port listening