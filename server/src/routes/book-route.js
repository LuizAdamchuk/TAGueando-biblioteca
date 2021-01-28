const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const booksController = require('../controllers/book-controller');

router.get('/all/', booksController.getbooks);

router.post('/', login.required, booksController.postbook);
router.get('/:bookId', booksController.getOneBook);
router.patch('/:bookId', login.required, booksController.updatebook);
router.delete('/:bookId', login.required, booksController.deletebook);

module.exports = router;
