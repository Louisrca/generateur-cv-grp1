const express = require('express');
const router = express.Router();
const RecommandationsModels = require('../models/RecommandationsModels');
// const { authentificate } = require('../middleware/jwt');

// Ajouter une recommandation
router.post('/', async (req, res) => {
    try {
        const { message, curriculum } = req.body;

        if (!message || !curriculum) {
            return res.status(400).json({ message: 'Le message et l\'ID du CV sont requis.' });
        }

        const recommandations = new RecommandationsModels({
            message,
            curriculum,
            author: req.user.id, // L'utilisateur connecté
        });

        await recommandations.save();
        res.status(201).json(recommandations);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création de la recommandation.', error: err.message });
    }
});

// Obtenir toutes les recommandations pour un CV donné
router.get('/:curriculumId', async (req, res) => {
    try {
        const curriculumId = req.params.curriculumId;

        const recommandations = await RecommandationsModels.find({ curriculum: curriculumId })
            .populate('author', 'name email') // Remplir les infos de l'auteur
            .sort({ creationAt: -1 }); // Trier par date de création décroissante

        res.status(200).json(recommandations);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des recommandations.', error: err.message });
    }
});

// Supprimer une recommandation
router.delete('/:id', async (req, res) => {
    try {
        const recommandationId = req.params.id;

        const recommandations = await RecommandationsModels.findById(recommandationId);

        if (!recommandations) {
            return res.status(404).json({ message: 'Recommandation introuvable.' });
        }

        // Vérifier que l'utilisateur connecté est l'auteur de la recommandation
        if (recommandations.author.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Vous n\'êtes pas autorisé à supprimer cette recommandation.' });
        }

        await recommandations.remove();
        res.status(200).json({ message: 'Recommandation supprimée avec succès.' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la recommandation.', error: err.message });
    }
});

module.exports = router;
