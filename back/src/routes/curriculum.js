const express = require('express');
const router = express.Router();
// const verifyToken = require('../middleware/jwt');

const {
  getCurriculums,
  getCurriculumById,
  createCurriculum,
  updateCurriculum,
  deleteCurriculum,
} = require('../controllers/CurriculumControllers');

router.get('/', getCurriculums);

router.get('/:id', getCurriculumById);

router.post('/', createCurriculum);

router.put('/:id', updateCurriculum);

router.delete('/:id', deleteCurriculum);

module.exports = router;
