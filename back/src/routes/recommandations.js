const express = require('express');
const router = express.Router();
const {
  createRecommendation,
  getRecommendationsByCVId,
  getAllRecommendations,
  deleteRecommendation,
} = require('../controllers/RecommandationController');
const verifyToken = require('../middleware/jwt');

// Ajouter une recommandation
router.post('/', verifyToken, createRecommendation);

// Obtenir toutes les recommandations pour un CV donné
router.get('/:curriculumId', verifyToken, getRecommendationsByCVId);

router.get('/', verifyToken, getAllRecommendations);

// Supprimer une recommandation
router.delete('/:id', verifyToken, deleteRecommendation);

module.exports = router;
