/*import mongoose from 'mongoose';

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

export default mongoose.model('Word', wordSchema);*/
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
        auto: true,
        unique: true,
      },
      descriptionWordDefinition: {
        type: String,
        required: true,
      },
      src: {
        type: String, // Pode ser base64 ou URL do Firebase Storage
        required: true,
      },
      fileType: {
        type: String,
        //enum: ['image', 'gif', 'video'], // Define os tipos possíveis de arquivos
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
