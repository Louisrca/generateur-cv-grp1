const Image = require('../models/Image');
const fs = require('fs');

exports.uploadImage = async (req, res) => {
    try{
        if(!req.file){
            return res.status(400).send({
                error: 'Image not send.'
            })
        }

        const image = fs.readFileSync(req.file.path);

        const newImage = new Image({
            name: req.file.originalName,
            image: {
                data: image,
                contentType: req.file.mimetype,
            }
        });
        const saveImage = await newImage.save();

        fs.unlinkSync(req.file.path);

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