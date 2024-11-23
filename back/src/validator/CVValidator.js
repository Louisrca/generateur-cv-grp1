const { Validator } = require('jsonschema');

module.exports = {
  verifyBook: (req) => {
    let validator = new Validator();
    let bookSchema = {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid title or missing title',
        },
        totalPages: {
          type: 'number',
          min: 1,
          errorMessage: 'Invalid totalPages or missing totalPages',
        },
        description: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid description or missing description',
        },
      },
      required: ['title', 'totalPages', 'description'],
    };
    let validationResponse = validator.validate(req.body, bookSchema);

    if (
      Array.isArray(validationResponse.errors) &&
      validationResponse.errors.length > 0
    ) {
      let errors = validationResponse.errors.map(
        (error) => error.schema.errorMessage
      );
      return errors;
    }
  },
};
