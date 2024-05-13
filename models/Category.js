import mongoose from "mongoose";

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

export default mongoose.model("Category", categorySchema)