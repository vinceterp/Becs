import Book from './prototypes/Book.js'

//Book constructor(title: String, author: String, barcode: String, imageSrc: String, price: double, reorder: Boolean, reorderAmount: Integer, stock: Integer)

const books = {
    '00000001' : new Book ("Life of Pi", "Yann Martel", "00000001","/book-covers/Life_of_Pi_2012_Poster.jpg","2000.00",false, 0, "4"),
    '00000002' : new Book ("The Lord of the Rings", "J.R.R Tolkien", "00000002","/book-covers/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif","1900.00", false, 0, "12"),
    '00000003' : new Book ("The Alchemist", "Paulo Coelho", "00000003","/book-covers/TheAlchemist.jpg","1800.00",false, 0, "8"),
    '00000004' : new Book ("The Little Prince", "Antoine de Saint-Expurey", "00000004","/book-covers/Littleprince.JPG","1700.00",false, 0, "3"),
    '00000005' : new Book ("Harry Potter and the Philosopher's Stone", "J.K.Rowling", "00000005","/book-covers/220px-Harry_Potter_and_the_Philosopher's_Stone_Book_Cover.jpg","1600.00",false, 0, "6"),
    '00000006' : new Book ("Alice's Adeventures in Wonderland", "Lewis Carroll", "00000006","/book-covers/220px-Alice's_Adventures_in_Wonderland_cover_(1865).jpg","1500.00",false, 0, "5"),
    '00000007' : new Book ("The Hobbit", "J.R.R. Tolkien", "00000007","/book-covers/220px-TheHobbit_FirstEdition.jpg","1400.00",false, 0, "13"),
    '00000008' : new Book ("And Then There Were None", "Agatha Christie", "00000008","/book-covers/And_Then_There_Were_None_US_First_Edition_Cover_1940.jpg","1300.00",false, 0, "2"),
    '00000009' : new Book ("Dream of the Red Chamber", "Cao Xueqin", "00000009","/book-covers/dreamred.jpg","1200.00",false, 0, "4"),
    '00000010' : new Book ("The Lion the Waitch and the Wardrobe", "C.S.Lewis", "00000010","/book-covers/220px-TheLionWitchWardrobe(1stEd).jpg","1100.00",false, 0, "5"),
    '00000011' : new Book ("She: A History of Adventure", "H.Rider Haggard", "00000011","/book-covers/220px-SHE,_A_History_of_Adventure_(1st_Edition_Cover),_by_H._Rider_Haggard.jpg","1000.00",false, 0, "9"),
    '00000012' : new Book ("The Adventures of Pinocchio", "Carlo Collodi", "00000012","/book-covers/Pinocchio.jpg","900.00",false, 0, "0"),
    '00000013' : new Book ("The Da Vinci Code", "Dan Brown", "00000013","/book-covers/220px-DaVinciCode.jpg","800.00",false, 0, "3"),
    '00000014' : new Book ("Harry Potter and the Chambers of Secrets", "J.K.Rowling", "00000014","/book-covers/220px-Harry_Potter_and_the_Chamber_of_Secrets.jpg","700.00",false, 0, "5"),
    '00000015' : new Book ("The Catcher in the Rye", "J.D.Salinger", "00000015","/book-covers/220px-The_Catcher_in_the_Rye_(1951,_first_edition_cover).jpg","600.00",false, 0, "0"),
    '00000016' : new Book ("The Bridges of Madison Country", "Robert James Waller", "00000016","/book-covers/BridgesOfMadisonCounty.jpg","500.00",false, 0, "0"),
    '00000017' : new Book ("Ben-hur:A Tale of the Christ", "Lew Wallace", "00000017","/book-covers/220px-Wallace_Ben-Hur_cover.jpg","400.00",false, 0, "3"),
    '00000018' : new Book ("You Can Heal Your Life", "Louise Hay", "00000018","/book-covers/220px-You_Can_Heal_Your_Life.jpg","300.00",false, 0, "4"),
    '00000019' : new Book ("One Hundred Years of solitude", "Gabriel Garcia Marquez", "00000019","/book-covers/220px-Cien_años_de_soledad_(book_cover,_1967).jpg","200.00",false, 0, "4"),
    '00000020' : new Book ("Lolita", "Vladimir Nabokov", "00000020","/book-covers/220px-Lolita_1955.JPG","100.00",false, 0, "7"),
    
}

export default books;
