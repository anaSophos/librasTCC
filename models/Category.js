import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema({
    nameCategory: {
        type: String,
        required: true
    },
    descriptionCategory: [{
        type: String,
        required: true
    }]
});

export default mongoose.model("Category", CategorySchema)