

export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    printInfo() {
        console.log(`Title:${this.title}, Author:${this.author}, Year:${this.year}`);
    }
    get title() {
        return this._title;
    }
    set title(value) {
        if ( typeof value !== "string") {
            console.log("Invalid title type");
            return;
        }
        this._title = value ;
    }

    get author(){
        return this._author;
    }
    set author(value){
        if ( value === undefined) {
            console.log("The author's value cannot be empty");
            return;
        }
         this._author = value;
    }

    get year() {
        return this._year;
    }
    set year(value) {
        if (typeof value !== "number") {
            console.log("Invalid data type");
            return;
        }
        this._year = value;
    }
    static findTheOldestBook(books){
       return books.reduce((oldest, currentBook) => {
           return currentBook.year < oldest.year ? currentBook : oldest;
        });

    }




}



