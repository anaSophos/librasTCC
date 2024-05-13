import mongoose from "mongoose";

const Schema = mongoose.Schema;

const permissionSchema = new Schema({
    namePermission:{
        type: String,
        required: true
    },
    descriptionPermission:{
        type: String,
        required: true
    }
})

export default mongoose.model("Permission", permissionSchema)