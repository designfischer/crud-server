const { Router } = require('express')

const BookController = require('../controllers/book-controller')

const routes = Router()

routes.post('/books', BookController.createBook)
routes.get('/books', BookController.getBook)
routes.patch('/books/:book_id', BookController.updateBook)
routes.delete('/books/:book_id', BookController.deleteBook)

module.exports = routes