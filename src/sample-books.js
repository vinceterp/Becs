import Book from './prototypes/Book.js'

//Book constructor(title: String, author: String, barcode: String, imageSrc: String, price: double, reorder: Boolean, reorderAmount: Integer, stock: Integer)

const books = {
    '00000001' : new Book ("Life of Pi", "Yann Martel", "00000001"),
    '00000002' : new Book ("The Lord of the Rings", "J.R.R Tolkien", "00000002"),
    '00000003' : new Book ("The Alchemist", "Paulo Coelho", "00000003"),
    '00000004' : new Book ("The Little Prince", "Antoine de Saint-Expurey", "00000004"),
    '00000005' : new Book ("Harry Potter and the Philosopher's Stone", "J.K.Rowling", "00000005"),
    '00000006' : new Book ("Alice's Adeventures in Wonderland", "Lewis Carroll", "00000006"),
    '00000007' : new Book ("The Hobbit", "J.R.R. Tolkien", "00000007"),
    '00000008' : new Book ("And Then There Were None", "Agatha Christie", "00000008"),
    '00000009' : new Book ("Dream of the Red Chamber", "Cao Xueqin", "00000009"),
    '00000010' : new Book ("The Lion the Waitch and the Wardrobe", "C.S.Lewis", "00000010"),
    '00000011' : new Book ("She: A History of Adventure", "H.Rider Haggard", "00000011"),
    '00000012' : new Book ("The Adventures of Pinocchio", "Carlo Collodi", "00000012"),
    '00000013' : new Book ("The Da Vinci Code", "Dan Brown", "00000013"),
    '00000014' : new Book ("Harry Potter and the Chambers of Secrets", "J.K.Rowling", "00000014"),
    '00000015' : new Book ("The Catcher in the Rye", "J.D.Salinger", "00000015"),
    '00000016' : new Book ("The Bridges of Madison Country", "Robert James Waller", "00000016"),
    '00000017' : new Book ("Ben-hur:A Tale of the Christ", "Lew Wallace", "00000017"),
    '00000018' : new Book ("You Can Heal Your Life", "Louise Hay", "00000018"),
    '00000019' : new Book ("One Hundred Years of solitude", "Gabriel Garcia Marquez", "00000019"),
    '00000020' : new Book ("Lolita", "Vladimir Nabokov", "00000020"),
    
}

export default books;
