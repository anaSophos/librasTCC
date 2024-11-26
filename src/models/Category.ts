import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema({
  nameCategory: {
    type: String,
    required: true,
  },
  descriptionCategory: {
    type: String,
    required: true,
  },
  showInMenu: {
    type: Boolean,
    default: false,
    required: true,
  },
  imgCategory: {
    type: String,
    // auto: true,
    required: true,
  },
});

export default mongoose.model('Category', CategorySchema);
