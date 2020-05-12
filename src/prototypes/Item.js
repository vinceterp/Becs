export default class Item {
    constructor(barcode, price, reorder, reorderAmount, stock) {
        this.barcode = barcode || "";
        this.price = price || 0.00;
        this.reorder = reorder || false;
        this.reorderAmount = reorderAmount || 0;
        this.stock = stock || 0;
    }
}
