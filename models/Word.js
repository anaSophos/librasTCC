const mongoose = require("mongoose");

const Schema = mongoose.Schema 

const wordSchema = new Schema({
    nameWord:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Word", wordSchema)