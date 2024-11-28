const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/jwt');

const {
  getCurriculums,
  getCurriculumByAuthor,
  createCurriculum,
  updateCurriculum,
  deleteCurriculum,
} = require('../controllers/CurriculumControllers');

router.get('/', verifyToken, getCurriculums);

router.get('/:id', verifyToken, getCurriculumByAuthor);

router.post('/', verifyToken, createCurriculum);

router.put('/:id', verifyToken, updateCurriculum);

router.delete('/:id', verifyToken, deleteCurriculum);

module.exports = router;
