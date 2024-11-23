const { json } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CurriculumSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: false,
  },
  github: {
    type: String,
    required: false,
  },
  skills: {
    type: json,
    required: true,
  },
  experience: {
    type: json,
    required: true,
  },
  education: {
    type: json,
    required: true,
  },
  creationAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Curriculum = mongoose.model('curriculum', CurriculumSchema);

module.exports = Curriculum;
