import mongoose from 'mongoose';

const { Schema } = mongoose;

const wordSchema = new Schema({
  nameWord: {
    type: String,
    required: true,
  },
  wordDefinitions: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true, // Define o campo _id como ObjectId gerado automaticamente
        unique: true,
      },
      descriptionWordDefinition: {
        type: String,
        required: true,
      },
      src: {
        type: String,
        // auto: true,
        required: true,
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },
    },
  ],
});

export default mongoose.model('Word', wordSchema);
