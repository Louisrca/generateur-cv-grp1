const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Books Documentation',
      version: '1.0.0',
      description: 'API documentation for our application',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/',
      },
    ],
  },
  apis: [
    './src/docs/schema/*.js', // Inclut tous les schémas
    './src/docs/path/*.js', // Inclut tous les endpoints
  ],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
