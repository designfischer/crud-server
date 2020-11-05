const Book = require('../../models/Book')

const { sanitizeArray } = require('../helpers')

module.exports = {

    async createBook(req, res) {
        let bodyData = req.body            
        const { coAuthor, category } = bodyData
            bodyData.coAuthor = undefined
            bodyData.category = undefined
        const arrayOfCoAuthors = sanitizeArray(coAuthor) 
        const arrayOfCategories = sanitizeArray(category)       
        try {
            const newBook = await Book.create({
                ...bodyData, 
                coAuthor: arrayOfCoAuthors,
                category: arrayOfCategories
            })
            return res.status(201).json(newBook)
        } catch(err) {
            return res.status(400).json(err)
        }
    },

    async getBook(req, res) {
        try {
            const books = await Book.find()
            return res.status(200).json(books)
        } catch(err) {
            return res.status(400).json(err)
        }
    },

    async updateBook(req, res) {
        const bodyData = req.body
        const { book_id } = req.params
        const { coAuthor, category } = bodyData
            bodyData.coAuthor = undefined
            bodyData.category = undefined
        const arrayOfCoAuthors = sanitizeArray(coAuthor) 
        const arrayOfCategories = sanitizeArray(category)
        try {
            const bookToUpdate = await Book.findById(book_id)

            const updatedBook = await Book.findByIdAndUpdate(book_id, {
                ...bodyData,
                coAuthor: arrayOfCoAuthors || bookToUpdate.coAuthor,
                category: arrayOfCategories || bookToUpdate.category
            }, { new: true })
            return res.status(200).json(updatedBook)
        } catch(err) {
            return res.status(400).json(err)
        }
    },

    async deleteBook(req, res) {
        const { book_id } = req.params
        try {
            const deletedBook = await Book.findByIdAndRemove(book_id)
            if (deletedBook) return res.status(200).json({ message: 'Book deleted successfully' })
            return res.status(404).json({ message: 'Book not found' })
        } catch(err) {
            return res.status(400).json(err)
        }
    }

}
