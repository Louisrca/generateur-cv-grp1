const express = require('express');
const router = express.Router();

const { getUser, updateUser } = require('../controllers/UserControllers');
const verifyToken = require('../middleware/jwt');

router.get('/:id', verifyToken, getUser);
router.put('/update/:id', verifyToken, updateUser);

module.exports = router;
