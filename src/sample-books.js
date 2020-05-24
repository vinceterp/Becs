import Book from './prototypes/Book.js'

//Book constructor(title: String, author: String, barcode: String, imageSrc: String, price: double, reorder: Boolean, reorderAmount: Integer, stock: Integer)

const books = {
    'barcode_here' : new Book ("Formula", "Baron Zimo", "barcode_here"),
    '00000001' : new Book ("Life of Pi", "Yann Martel", "00000001","/public/book-covers/Life_of_Pi_2012_Poster.jpg"),
    '00000002' : new Book ("The Lord of the Rings", "J.R.R Tolkien", "00000002","/public/book-covers/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"),
    '00000003' : new Book ("The Alchemist", "Paulo Coelho", "00000003","/public/book-covers/TheAlchemist.jpg"),
    '00000004' : new Book ("The Little Prince", "Antoine de Saint-Expurey", "00000004","/public/book-covers/Littleprince.JPG"),
    '00000005' : new Book ("Harry Potter and the Philosopher's Stone", "J.K.Rowling", "00000005","/public/book-covers/220px-Harry_Potter_and_the_Philosopher's_Stone_Book_Cover.jpg"),
    '00000006' : new Book ("Alice's Adeventures in Wonderland", "Lewis Carroll", "00000006","/public/book-covers/220px-Alice's_Adventures_in_Wonderland_cover_(1865).jpg"),
    '00000007' : new Book ("The Hobbit", "J.R.R. Tolkien", "00000007","/public/book-covers/220px-TheHobbit_FirstEdition.jpg"),
    '00000008' : new Book ("And Then There Were None", "Agatha Christie", "00000008","/public/book-covers/And_Then_There_Were_None_US_First_Edition_Cover_1940.jpg"),
    '00000009' : new Book ("Dream of the Red Chamber", "Cao Xueqin", "00000009","/public/book-covers/dreamredjpg"),
    '00000010' : new Book ("The Lion the Waitch and the Wardrobe", "C.S.Lewis", "00000010","/public/book-covers/220px-TheLionWitchWardrobe(1stEd).jpg"),
    '00000011' : new Book ("She: A History of Adventure", "H.Rider Haggard", "00000011","/public/book-covers/220px-SHE,_A_History_of_Adventure_(1st_Edition_Cover),_by_H._Rider_Haggard.jpg"),
    '00000012' : new Book ("The Adventures of Pinocchio", "Carlo Collodi", "00000012","/public/book-covers/Pinocchio.jpg"),
    '00000013' : new Book ("The Da Vinci Code", "Dan Brown", "00000013","/public/book-covers/220px-DaVinciCode.jpg"),
    '00000014' : new Book ("Harry Potter and the Chambers of Secrets", "J.K.Rowling", "00000014","/public/book-covers/220px-Harry_Potter_and_the_Chamber_of_Secrets.jpg"),
    '00000015' : new Book ("The Catcher in the Rye", "J.D.Salinger", "00000015","/public/book-covers/220px-The_Catcher_in_the_Rye_(1951,_first_edition_cover).jpg"),
    '00000016' : new Book ("The Bridges of Madison Country", "Robert James Waller", "00000016","/public/book-covers/BridgesOfMadisonCounty.jpg"),
    '00000017' : new Book ("Ben-hur:A Tale of the Christ", "Lew Wallace", "00000017","/public/book-covers/220px-Wallace_Ben-Hur_cover.jpg"),
    '00000018' : new Book ("You Can Heal Your Life", "Louise Hay", "00000018","/public/book-covers/220px-You_Can_Heal_Your_Life.jpg"),
    '00000019' : new Book ("One Hundred Years of solitude", "Gabriel Garcia Marquez", "00000019","/public/book-covers/220px-Cien_años_de_soledad_(book_cover,_1967).jpg"),
    '00000020' : new Book ("Lolita", "Vladimir Nabokov", "00000020","/public/book-covers/220px-Lolita_1955.JPG"),
    
}

export default books;
