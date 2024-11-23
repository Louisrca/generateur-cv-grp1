const mongoose = require('mongoose');

// Fonction pour connecter à la base de données
const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ Connected to MongoDB: ${connection.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); // Arrête l'application si la connexion échoue
  }
};

module.exports = connectToDatabase;
