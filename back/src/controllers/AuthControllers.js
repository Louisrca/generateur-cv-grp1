const User = require('../models/UsersModel');
const { verifyUser } = require('../validator/UserValidator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const newUser = req.body;
    const isNotValidateUser = verifyUser(newUser);

    if (isNotValidateUser) {
      res.status(400).send({
        error: isNotValidateUser.message,
      });
    } else {
      newUser.password = await bcrypt.hash(newUser.password, 10);
      const { id, lastname, name, email } = await User.create(newUser);

      res.send({
        sucess: true,
        user: {
          id, // id: id
          lastname,
          name,
          email,
        },
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while registering user',
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: 'Email or Password wrong' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).send({ message: 'Email or Password wrong' });
    }

    const userData = {
      id: user.id,
      email: user.email,
      name: user.name,
      lastname: user.lastname,
    };
    const secret = process.env.JWT_TOKEN;
    const jwtData = {
      expiresIn: process.env.JWT_TIME_OUT || '12h',
    };

    const token = jwt.sign(userData, secret, jwtData);

    res.status(200).send({
      message: 'Successfully logged in',
      user: {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occurred while logging user',
      status: 500,
    });
  }
};

module.exports = { register, login };
