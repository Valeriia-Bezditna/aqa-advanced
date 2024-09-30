import {Book} from "./Book.js";

export class eBook extends Book {
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
}