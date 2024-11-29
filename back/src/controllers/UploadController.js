const Image = require('../models/Image');

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({
        error: 'Image not sent.',
      });
    }

    if (!req.body.curriculumId) {
      return res.status(400).send({
        error: 'Curriculum ID not sent.',
      });
    }

    const image = await Image.findOne({ curriculumId: req.body.curriculumId });
    if (image) {
      return res.status(400).send({
        error: 'Image already exists for this curriculum.',
      });
    }

    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedMimeTypes.includes(req.file.mimetype)) {
      return res.status(400).send({
        error: 'Invalid file type. Only JPEG, PNG, and GIF are allowed.',
      });
    }
    const newImage = new Image({
      name: req.file.originalname,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      curriculumId: req.body.curriculumId,
    });
    const savedImage = await newImage.save();

    res.status(200).send({
      message: 'Image saved in MongoDB',
      image: savedImage,
    });
  } catch (error) {
    res.status(500).send({
      error: 'Server error: ' + error.message,
    });
  }
};
exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find(
      {},
      'name _id uploadDate image.contentType'
    );

    const imageList = images.map((image) => ({
      id: image._id,
      name: image.name,
      uploadDate: image.uploadDate,
      contentType: image.image.contentType,
      url: `/upload/${image._id}`,
    }));

    res.status(200).send(imageList);
  } catch (error) {
    res.status(500).send({
      error: 'Server error: ' + error.message,
    });
  }
};
exports.getImageById = async (req, res) => {
  try {
    // Utilisez findOne pour trouver une seule image correspondant au curriculumId
    const image = await Image.findOne({
      curriculumId: req.params.curriculumId,
    });

    // Si une image est trouvée, ajoutez son Data URI
    if (image) {
      const base64Image = image.image.data.toString('base64');
      const contentType = image.image.contentType || 'image/jpeg'; // Par défaut à 'image/jpeg' si non défini
      const dataUri = `data:${contentType};base64,${base64Image}`;
      return res.status(200).send({ imageUrl: dataUri }); // Ajouter l'image en Data URI au curriculum
    } else {
      return res.status(200).send({ imageUrl: '/default-image.jpg' }); // Image par défaut si aucune image n'est trouvée
    }
  } catch (error) {
    return res.status(500).send({
      error: 'Server error: ' + error.message,
    });
  }
};

exports.updateImage = async (req, res) => {
  try {
    // Vérifier si un fichier a été envoyé
    if (!req.file) {
      return res.status(400).send({
        error: 'No image file provided.',
      });
    }

    // Vérifier si le curriculumId est envoyé dans le corps de la requête
    if (!req.body.curriculumId) {
      return res.status(400).send({
        error: 'Curriculum ID not sent.',
      });
    }

    // Vérifier si l'image existe pour ce curriculumId
    let image = await Image.findOne({ curriculumId: req.body.curriculumId });

    // Si l'image n'existe pas, créer une nouvelle image
    if (!image) {
      // Vérifier les types MIME autorisés
      const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedMimeTypes.includes(req.file.mimetype)) {
        return res.status(400).send({
          error: 'Invalid file type. Only JPEG, PNG, and GIF are allowed.',
        });
      }

      // Créer une nouvelle image si elle n'existe pas
      image = new Image({
        name: req.file.originalname,
        image: {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        },
        curriculumId: req.body.curriculumId,
      });

      // Sauvegarder la nouvelle image dans la base de données
      const savedImage = await image.save();

      return res.status(200).send({
        message: 'Image uploaded and saved successfully.',
        image: savedImage,
      });
    }

    // Si l'image existe déjà, procéder à la mise à jour
    // Vérifier les types MIME autorisés
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedMimeTypes.includes(req.file.mimetype)) {
      return res.status(400).send({
        error: 'Invalid file type. Only JPEG, PNG, and GIF are allowed.',
      });
    }

    // Mettre à jour l'image
    image.name = req.file.originalname;
    image.image.data = req.file.buffer;
    image.image.contentType = req.file.mimetype;

    // Sauvegarder l'image mise à jour
    const updatedImage = await image.save();

    res.status(200).send({
      message: 'Image updated successfully.',
      image: updatedImage,
    });
  } catch (error) {
    res.status(500).send({
      error: 'Server error: ' + error.message,
    });
  }
};
