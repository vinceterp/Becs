export default class Item {
    constructor(barcode, imageSrc, price, reorder, reorderAmount, stock) {
        this.barcode = barcode || "";
        this.imageSrc= imageSrc || "/images/stock-item.png";
        this.price = price || 0.00;
        this.reorder = reorder || false;
        this.reorderAmount = reorderAmount || 0;
        this.stock = stock || 0;
    }
}
