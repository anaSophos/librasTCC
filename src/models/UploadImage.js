import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ImageSchema = new mongoose.Schema({
    name: String,
    data: String,
    contentType: String,
  });

export default mongoose.model("Image", ImageSchema)