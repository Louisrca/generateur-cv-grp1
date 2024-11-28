const Curriculum = require('../models/CurriculumModel');
const { verifyCurriculum } = require('../validator/CurriculumValidator');
const mongoose = require('mongoose');

const getCurriculums = async (req, res) => {
  try {
    const products = await Curriculum.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: `Internal server error : ${error}` });
  }
};

const getCurriculumByAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;

    // Vérifier si l'ID est valide
    if (!mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({ error: 'Invalid Author ID' });
    }

    // Trouver le(s) curriculum(s) par auteur
    const curriculums = await Curriculum.find({ author: authorId }).populate('author');

    if (!curriculums || curriculums.length === 0) {
      return res
        .status(200)
        .json({ error: 'No curriculums found for this author' });
    }

    // Retourner le résultat
    return res.status(200).json(curriculums);
  } catch (error) {
    console.error('Error in getCurriculumByAuthor:', error.message);
    return res.status(500).json({ error: 'An internal server error occurred' });
  }
};

const createCurriculum = (req, res) => {
  try {
    // Vérifiez si l'utilisateur est authentifié
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: 'Unauthorized. Please log in.' });
    }
    const newCurriculum = new Curriculum({
      name: req.body.name,
      lastname: req.body.lastname,
      jobTitle: req.body.jobTitle,
      email: req.body.email,
      phone: req.body.phone,
      linkedin: req.body.linkedin,
      github: req.body.github,
      skills: req.body.skills,
      languages: req.body.languages,
      technicalSkills: req.body.technicalSkills,
      description: req.body.description,
      educations: req.body.educations,
      experiences: req.body.experiences,
      areaOfInterests: req.body.areaOfInterests,
      createAt: Date.now(),
      updateAt: Date.now(),
      author: req.user,
    });
    console.log(req.user);

    const isCurriculumValid = verifyCurriculum(req);

    if (isCurriculumValid) {
      return res.status(400).json({ error: verifyCurriculum(req, res) });
    }

    newCurriculum
      .save()
      .then((Curriculum) => {
        const status = (res.status = 200);
        return res.send({ status, Curriculum });
      })
      .catch((err) => {
        res.status = 400;
        return res.send({ error: err.message });
      });
  } catch (error) {
    console.error('Error in createCurriculum:', error);
    return res.status(500).json({ error: error.message });
  }
};

const updateCurriculum = async (req, res) => {
  try {
    const curriculum = await Curriculum.findById(req.params.id);
    if (!curriculum) {
      return res.status(404).json({ error: 'Curriculum not found' });
    }
    curriculum.name = req.body.name;
    curriculum.lastname = req.body.lastname;
    curriculum.jobTitle = req.body.jobTitle;
    curriculum.email = req.body.email;
    curriculum.description = req.body.description;
    curriculum.phone = req.body.phone;
    curriculum.linkedin = req.body.linkedin;
    curriculum.github = req.body.github;
    curriculum.skills = req.body.skills;
    curriculum.languages = req.body.languages;
    curriculum.technicalSkills = req.body.technicalSkills;
    curriculum.experiences = req.body.experiences;
    curriculum.educations = req.body.educations;
    curriculum.areaOfInterests = req.body.areaOfInterests;
    curriculum.updatedAt = Date.now();

    console.log('Curriculum before save:', curriculum);
    const updatedCurriculum = await curriculum.save();
    console.log('Curriculum after save:', updatedCurriculum);

    return res
      .status(200)
      .json({ message: 'Curriculum updated', curriculum: updatedCurriculum });
  } catch (error) {
    console.error('Error updating curriculum:', error);
    return res.status(500).json({ error: error.message });
  }
};

const deleteCurriculum = async (req, res) => {
  try {
    const curriculum = await Curriculum.findById(req.params.id);
    if (!curriculum) {
      return res.status(404).json({ error: 'Curriculum not found' });
    }
    await curriculum.deleteOne();
    return res.status(200).json({ message: 'Curriculum deleted successfully' });
  } catch (error) {
    console.error('Error deleting curriculum:', error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCurriculums,
  getCurriculumByAuthor,
  createCurriculum,
  updateCurriculum,
  deleteCurriculum,
};
