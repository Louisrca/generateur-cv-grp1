const User = require('../models/UsersModel');

const getUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.send(users);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving users',
    });
  }
};

module.exports = { getUser };
