const Image = require('../models/Image');

exports.uploadImage = async (req, res) => {
    try{
        if(!req.file){
            return res.status(400).send({
                error: 'Image not send.'
            })
        }

        const newImage = new Image({
            name: req.file.originalName,
            image: {
                data: image,
                contentType: req.file.mimetype,
            }
        });
        const saveImage = await newImage.save();

        res.status(200).send({
            message:'Image save in MongoDB',
            image: saveImage,
        });
    } catch{
        res.status(500).send({
            error: 'Error sever : ' + error.message
        });
    }
};