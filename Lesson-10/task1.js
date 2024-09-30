import {Book} from './Book.js';
import {eBook} from './eBook.js';

const book1 = new Book ("Charlie and the Chocolate Factory", "Roald Dahl", 2010);
const book2 = new Book ("Диво", "Павло Загребельний", 1968);
const book3 = new Book ("Code: The Hidden Language of Computer Hardware and Software", "Charles Petzold", 2022);
book1.printInfo();
book2.printInfo();
book3.printInfo();

const file1 = new eBook("Charlie and the Chocolate Factory", "Roald Dahl", 2010, "pdf");
const file2 = new eBook("Диво", "Павло Загребельний", 1968, "txt");
const file3 = new eBook("Code: The Hidden Language of Computer Hardware and Software", "Charles Petzold",2022, "epub");
file1.printInfo();
file2.printInfo();
file3.printInfo();

book3.year = 2007;
book1.title = "Білий клик";
book2.author = "Конан Дойл";
file1.fileFormat = "txt"
console.log(book3.year);
console.log(book1.title);
console.log(book2.author);
console.log(file1.fileFormat);

book3.year = "2007";
book1.title = 3;
book2.author = undefined
file2.fileFormat = "doc";
console.log(book3.year);
console.log(book1.title);
console.log(book2.author);
console.log(file2.fileFormat);


