const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  cvId: {
    type: Schema.Types.ObjectId,
    ref: 'Curriculum',
  },
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
