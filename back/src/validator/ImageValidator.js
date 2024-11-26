const { Validator } = require('jsonschema');

module.exports = {
  verifyImage: (req) => {
    let validator = new Validator();
    let imageSchema = {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid image or missing image',
        },
      },
      required: ['image'],
    };
    return validator.validate(req, imageSchema);
  },
};
