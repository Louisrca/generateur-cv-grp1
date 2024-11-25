const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecommandationSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    creationAt: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      curriculum: {
        type: Schema.Types.ObjectId,
        ref: 'Curriculum',
      }
});

const Recommandation = mongoose.model('Recommandation', RecommandationSchema);
module.exports = Recommandation;