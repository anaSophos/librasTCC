const mongoose = require("mongoose");

const Schema = mongoose.Schema 

const wordDefinitionSchema = new Schema({
    descriptionWordDefinition:{
        type: String,
        required: true
    },
    src:{
        type: String,
        required: true
    },
    category:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: true
    }]
})

module.exports = mongoose.model("WordDefinition", wordDefinitionSchema);
