class Product {
    constructor({ id, name, category, price, offerPrice, description, createdAt, updatedAt, inStock }) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.offerPrice = offerPrice;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.inStock = inStock;
    }
}

module.exports = Product;
