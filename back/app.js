require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDatabase = require('./src/config/database');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');
const indexRoutes = require('./src/routes/index');

// Connexion à la base de données
connectToDatabase();

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://front-generateur-cv-grp1.onrender.com/',
  ],

  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', indexRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
