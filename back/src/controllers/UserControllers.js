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

const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send({ message: 'User was updated successfully' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while updating user',
    });
  }
};

module.exports = { getUser, updateUser };
