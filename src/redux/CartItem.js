class CartItem {
    constructor(quantity, productPrice, productName, sum, productImage, productSize) {
        this.quantity = quantity;
        this.productPrice = productPrice;
        this.productName = productName;
        this.productImage = productImage;
        this.productSize = productSize;
        this.sum = sum;
    }
}

export default CartItem;
