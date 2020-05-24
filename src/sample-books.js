import Book from './prototypes/Book.js'

//Book constructor(title: String, author: String, barcode: String, price: double, reorder: Boolean, reorderAmount: Integer, stock: Integer)

const books = {
    'barcode_here' : new Book ("Formula", "Baron Zimo", "barcode_here"),
    '00000001' : new Book ("Life of Pi", "Yann Martel", "00000001"),
}

export default books;