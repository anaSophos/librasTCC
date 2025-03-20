import mongoose from 'mongoose';

const { Schema } = mongoose;

const suggestionSchema = new Schema({
  nameWord: {
    type: String,
    required: true,
  },
  emailContact: {
    type: String,
    required: true,
  },
  wordDefinitions: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        unique: true,
      },
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
      fileType: {
        type: String,
        //enum: ['image', 'gif', 'video'], // Define os tipos possíveis de arquivos
        required: true,
      },
    },
  ],
});

export default mongoose.model('Suggestion', suggestionSchema);
