import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const roleSchema = new Schema({
  nameRole: {
    type: String,
    required: true,
  },
  descriptionRole: {
    type: String,
    required: true,
  },
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Permission',
      default: [],
    },
  ],
});

export default mongoose.model('Role', roleSchema);
