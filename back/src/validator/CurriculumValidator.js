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
          errorMessage: 'Invalid name or missing name',
        },
        lastname: {
          type: 'string',
          min: 1,
          errorMessage: 'Invalid lastname or missing lastname',
        },
        email: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid email or missing email',
        },
        description: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid description or missing description',
        },
        phone: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid phone or missing phone',
        },
        linkedin: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid linkedin or missing linkedin',
        },
        github: {
          type: 'string',
          minLenght: 1,
          errorMessage: 'Invalid github or missing github',
        },
        skills: {
          type: 'array',
          minItems: 1,
          errorMessage: 'Invalid skills or missing skills',
        },
        languages: {
          type: 'array',
          minItems: 1,
          errorMessage: 'Invalid languages or missing languages',
        },
        technicalSkills: {
          type: 'array',
          minItems: 1,
          errorMessage: 'Invalid technicalSkills or missing technicalSkills',
        },
        experiences: {
          type: 'array',
          minItems: 1,
          errorMessage: 'Invalid experiences or missing experiences',
        },
        educations: {
          type: 'array',
          minItems: 1,
          errorMessage: 'Invalid educations or missing educations',
        },

        areaOfInterests: {
          type: 'array',
          minItems: 1,
          errorMessage: 'Invalid areaOfInterest or missing areaOfInterest',
        },
        creationAt: {
          type: 'date',
          errorMessage: 'Invalid creationAt or missing creationAt',
        },
        updateAt: {
          type: 'date',
          errorMessage: 'Invalid updateAt or missing updateAt',
        },
      },
      required: [
        'name',
        'lastname',
        'email',
        'phone',
        'description',
        'educations',
        'experiences',
        'skills',
        'languages',
        'technicalSkills',
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
