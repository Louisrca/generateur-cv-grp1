const { Validator } = require('jsonschema');

module.exports = {
  verifyCurriculum: (req) => {
    let validator = new Validator();
    let curriculumSchema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid title or missing title',
        },
        lastname: {
          type: 'number',
          min: 1,
          errorMessage: 'Invalid totalPages or missing totalPages',
        },
        email: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid description or missing description',
        },
        description: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid description or missing description',
        },
        phone: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid description or missing description',
        },
        linkedin: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid description or missing description',
        },
        github: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid description or missing description',
        },
        skills: {
          type: 'array',
          minItems: 1,
          errorMessage: 'Invalid description or missing description',
        },
        experience: {
          type: 'array',
          minItems: 1,
          errorMessage: 'Invalid description or missing description',
        },
        education: {
          type: 'array',
          minItems: 1,
          errorMessage: 'Invalid description or missing description',
        },
        creationAt: {
          type: 'date',
          errorMessage: 'Invalid description or missing description',
        },
        updateAt: {
          type: 'date',
          errorMessage: 'Invalid description or missing description',
        },
      },
      required: [
        'name',
        'lastname',
        'email',
        'phone',
        'description',
        'education',
        'experience',
        'skills',
      ],
    };
    let validationResponse = validator.validate(req.body, curriculumSchema);

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
