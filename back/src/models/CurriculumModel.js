const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CurriculumSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
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
    type: [String],
    required: true,
  },
  languages: {
    type: [
      {
        name: { type: String, required: true },
        level: { type: String, required: true },
      },
    ],
    required: false,
  },
  technicalSkills: {
    type: [
      {
        category: { type: String, required: true }, // Exemple : "Langages Web", "Framework", etc.
        skills: [
          {
            name: { type: String, required: true }, // Exemple : "HTML", "React.js"
            level: { type: String, required: false }, // Exemple : "Débutant", "Avancé" (optionnel)
          },
        ],
      },
    ],
    required: false,
  },

  experiences: {
    type: [
      {
        title: { type: String, required: true },
        company: { type: String, required: true },
        startYear: { type: Date, required: true },
        endYear: { type: Date, required: false },
        description: { type: String, required: false },
      },
    ],
    required: true,
  },
  educations: {
    type: [
      {
        school: { type: String, required: true },
        degree: { type: String, required: true },
        fieldOfStudy: { type: String, required: false },
        startYear: { type: Date, required: true },
        endYear: { type: Date, required: false },
      },
    ],
    required: true,
  },
  areaOfInterests: {
    type: [String],
    required: false,
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
