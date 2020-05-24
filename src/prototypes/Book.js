import Item from './Item';

export default class Book extends Item{
    constructor(title, author, barcode, imageSrc, price, reorder, reorderAmount, stock){
        super(barcode, imageSrc, price, reorder, reorderAmount, stock);
        this.title= title || "";
        this.author= author || "";
    }
}