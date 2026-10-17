const mongoose = require("mongoose")
const { string } = require("zod")

const taskSchema = new mongoose.Schema({
    id: {
        type : Number,
        required : true
    } ,
    name: {
        type: string,
        required : true
    }
})

const Task = mongoose.model("Task", taskSchema)

module.exports = { Task }
