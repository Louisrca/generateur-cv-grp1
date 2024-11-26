const express = require('express');
const router = express.Router();
const RecommandationsModels = require('../models/RecommandationsModels');
const {ajouterRecommandation, obtenirRecommandationsParCV, supprimerRecommandation} = require('../controllers/RecommandationController')
const verifyToken = require('../middleware/jwt')

// Ajouter une recommandation
router.post('/', verifyToken, ajouterRecommandation);

// Obtenir toutes les recommandations pour un CV donné
router.get('/:curriculumId', obtenirRecommandationsParCV);

// Supprimer une recommandation
router.delete('/:id', supprimerRecommandation );

module.exports = router;
