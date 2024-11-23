const { Validator } = require('jsonschema');

module.exports = {
  verifyUser: (req) => {
    let validator = new Validator();
    let userSchema = {
      name: {
        type: 'string',
        minLenght: 1,
        errorMessage: 'Invalid name or missing name',
      },
      lastname: {
        type: 'string',
        minLenght: 1,
        errorMessage: 'Invalid lastname or missing lastname',
      },
      email: {
        type: 'email',
        format: 'email',
        errorMessage: 'Invalid email or missing email',
      },
      password: {
        type: 'string',
        minLenght: 6,
        pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])',
        errorMessage: 'Invalid password or missing password',
      },
      required: ['name', 'lastname', 'email', 'password'],
    };
    let validationResponse = validator.validate(req.body, userSchema);

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
