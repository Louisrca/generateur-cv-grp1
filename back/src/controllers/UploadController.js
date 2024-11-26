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
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).send({ error: 'Image not found' });
    }
    res.set('Content-Type', image.image.contentType);
    res.send(image.image.data);
  } catch (error) {
    res.status(500).send({
      error: 'Server error: ' + error.message,
    });
  }
};
