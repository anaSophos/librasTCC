import mongoose from 'mongoose';

const { Schema } = mongoose;

const wordDefinitionSchema = new Schema({
  descriptionWordDefinition: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
});

export default mongoose.model('WordDefinition', wordDefinitionSchema);
