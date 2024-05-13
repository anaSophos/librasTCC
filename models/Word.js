import mongoose from "mongoose";

const Schema = mongoose.Schema 

const wordSchema = new Schema({
    nameWord:{
        type: String,
        required: true
    },
    wordDefinitions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WordDefinition',
        default: []
    }]
})

export default mongoose.model("Word", wordSchema)