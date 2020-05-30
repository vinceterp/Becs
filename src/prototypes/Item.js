export default class Item {
    constructor(barcode, imageSrc, price, reorder, reorderAmount, stock) {
        this.barcode = barcode || "";
        this.imageSrc= imageSrc || "/book-covers/stock-item.png";
        this.price = price || 0.00;
        this.reorder = reorder || false;
        this.reorderAmount = reorderAmount || 0;
        this.stock = stock || 0;
        this.promoCode= "";
        this.promoPrice= this.price;
    }
}
