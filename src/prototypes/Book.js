import Item from './Item';

export default class Book extends Item{
    constructor(title, author, barcode, price, reorder, reorderAmount, stock){
        super(barcode, price, reorder, reorderAmount, stock);
        this.title= title || "";
        this.author= author || "";
    }
}