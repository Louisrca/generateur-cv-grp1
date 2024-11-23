const Curriculum = require('../models/CurriculumModel');
const { verifyCurriculum } = require('../validator/CurriculumValidator');

const getCurriculums = async (req, res) => {
  try {
    const products = await Curriculum.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: `Internal server error : ${error}` });
  }
};

const getCurriculumById = async (req, res) => {
  const Curriculum = await Curriculum.findById(req.params.id);
  if (!Curriculum) {
    return res.status(404).json({ error: 'Curriculum not found' });
  }
  return res.json(Curriculum);
};

const createCurriculum = (req, res) => {
  const newCurriculum = new Curriculum({
    title: req.body.title,
    totalPages: req.body.totalPages,
    description: req.body.description,
    createAt: Date.now(),
    updateAt: Date.now(),
    author: req.user,
  });

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
};

const updateCurriculum = async (req, res) => {
  const Curriculum = await Curriculum.findById(req.params.id);
  if (!Curriculum) {
    return res.status(404).json({ error: 'Curriculum not found' });
  }
  Curriculum.title = req.body.title;
  Curriculum.totalPages = req.body.totalPages;
  Curriculum.description = req.body.description;
  Curriculum.updateAt = Date.now();

  Curriculum.save()
    .then((Curriculum) => {
      const status = (res.status = 200);
      return res.send({ status, Curriculum });
    })
    .catch((err) => {
      res.status = 400;
      return res.send({ error: err.message });
    });
};

const deleteCurriculum = async (req, res) => {
  const Curriculum = await Curriculum.findById(req.params.id);
  if (!Curriculum) {
    return res.status(404).json({ error: 'Curriculum not found' });
  }
  Curriculum.deleteOne()
    .then(() => {
      return res.status(200).json({ message: `Curriculum deleted` });
    })
    .catch((err) => {
      return res.status(400).json({ error: err.message });
    });
};

module.exports = {
  getCurriculums,
  getCurriculumById,
  createCurriculum,
  updateCurriculum,
  deleteCurriculum,
};
