const express = require('express');
const router = express.Router();
const {
  createRecommendation,
  getRecommendationsByCVId,
  getAllRecommendationsOfUser,
  deleteRecommendation,
} = require('../controllers/RecommandationController');
const verifyToken = require('../middleware/jwt');

// Ajouter une recommandation
router.post('/', verifyToken, createRecommendation);

// Obtenir toutes les recommandations pour un CV donné
router.get('/:curriculumId', verifyToken, getRecommendationsByCVId);

router.get(
  '/all-recommendations-by-user/:id',
  verifyToken,
  getAllRecommendationsOfUser
);

// Supprimer une recommandation
router.delete('/:id', deleteRecommendation);

module.exports = router;
