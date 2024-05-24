const mongoose = require("mongoose");

const Schema = mongoose.Schema

const categorySchema = new Schema({
    nameCategory:{
        type: String,
        required: true
    },
    descriptionCategory:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Category", categorySchema)