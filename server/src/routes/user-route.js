const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const userController = require('../controllers/user-controller');

router.post('/', userController.createUser);
router.get('/books/:userId', userController.getUsersBooks);
router.post('/login', userController.Login);

module.exports = router;
