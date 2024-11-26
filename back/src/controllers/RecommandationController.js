const RecommandationsModels = require('../models/RecommandationsModels');

// Ajouter une recommandation
exports.ajouterRecommandation = async (req, res) => {
    try {
        const { message, curriculum } = req.body;

        // Vérification des champs requis
        if (!message || !curriculum) {
            return res.status(400).json({ message: 'Le message et l\'ID du CV sont requis pour ajouter une recommandation.' });
        }

        // Création d'une nouvelle recommandation
        const nouvelleRecommandation = new RecommandationsModels({
            message,
            curriculum,
            author: req.user.id, // L'utilisateur connecté (via JWT)
        });

        await nouvelleRecommandation.save();
        res.status(201).json(nouvelleRecommandation);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout de la recommandation.', error: error.message });
    }
};

// Récupérer les recommandations d'un CV spécifique
exports.obtenirRecommandationsParCV = async (req, res) => {
    try {
        const curriculumId = req.params.curriculumId;

        // Récupération des recommandations associées à un CV
        const recommandations = await RecommandationsModels.find({ curriculum: curriculumId })
            .populate('author', 'name email') // Remplir les infos de l'auteur (nom et email)
            .sort({ creationAt: -1 }); // Trier par date décroissante

        res.status(200).json(recommandations);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des recommandations.', error: error.message });
    }
};

// Supprimer une recommandation
exports.supprimerRecommandation = async (req, res) => {
    try {
        const recommandationId = req.params.id;

        // Trouver la recommandation
        const recommandations = await RecommandationsModels.findById(recommandationId);

        if (!recommandations) {
            return res.status(404).json({ message: 'Recommandation introuvable.' });
        }

        // Vérifier que l'utilisateur connecté est l'auteur
        if (recommandations.author.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Vous n\'êtes pas autorisé à supprimer cette recommandation.' });
        }

        await recommandations.remove();
        res.status(200).json({ message: 'Recommandation supprimée avec succès.' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la recommandation.', error: error.message });
    }
};
