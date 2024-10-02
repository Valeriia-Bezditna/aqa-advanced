import {Book} from "./Book.js";

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }
    printInfo() {
        console.log(`Title:${this.title}, Author:${this.author}, Year:${this.year}, File Format:${this.fileFormat}`);
    }
    get fileFormat(){
        return this._fileFormat;
    }
    set fileFormat(value) {
        if (value !== "pdf" && value !== "txt" && value !== "epub") {
            console.log("Invalid extension type")
            return;
        }
        return this._fileFormat = value;
    }
    static elBook (book1, book2, book3, file1, file2, file3 ) {
        const eBooks = [];
        if (book1 instanceof Book) {
            eBooks.push(new EBook(book1.title, book1.author, book1.year, file1.fileFormat));
        }
        if (book2 instanceof Book) {
            eBooks.push(new EBook(book2.title, book2.author, book2.year, file2.fileFormat));
        }
        if (book3 instanceof Book) {
            eBooks.push(new EBook(book3.title, book3.author, book3.year, file3.fileFormat));
        }
        return eBooks;

}
}